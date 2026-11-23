<?php

namespace Elementor\Modules\LocalBlocks;

use Elementor\Core\Base\Module as Base_Module;
use Elementor\Modules\AtomicWidgets\Module as Atomic_Widgets;
use Elementor\Modules\AtomicWidgets\OptIn\Opt_In;
use Elementor\Modules\AtomicWidgets\Utils\Utils as Atomic_Utils;
use Elementor\Plugin;
use Elementor\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Site-local reuse of native V4 element trees. */
final class Module extends Base_Module {
	private const POST_TYPE = 'llq_local_block';
	private const MODEL_META = '_llq_local_block_model';
	private const NAMESPACE = 'linglingqi/v1';
	private const HANDLE = 'linglingqi-local-blocks';
	private const ROOT_TYPES = [ 'e-flexbox', 'e-div-block', 'e-grid', 'e-accordion', 'e-tabs' ];
	private const PAGE_SIZE = 30;

	public function get_name() {
		return 'local-blocks';
	}

	public function __construct() {
		parent::__construct();

		add_action( 'init', [ $this, 'register_storage' ] );
		add_action( 'rest_api_init', [ $this, 'register_routes' ] );
		add_action( 'elementor/editor/after_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		add_action( 'elementor/editor/after_enqueue_styles', [ $this, 'enqueue_styles' ] );
	}

	private function is_enabled(): bool {
		return Atomic_Widgets::is_active() && Plugin::$instance->experiments->is_feature_active( Opt_In::EXPERIMENT_NAME );
	}

	public function register_storage(): void {
		register_post_type( self::POST_TYPE, [
			'public' => false,
			'show_ui' => false,
			'show_in_rest' => false,
			'rewrite' => false,
			'query_var' => false,
			'map_meta_cap' => true,
			'supports' => [ 'title', 'author' ],
		] );
	}

	public function register_routes(): void {
		$permission = [ $this, 'can_use_blocks' ];

		register_rest_route( self::NAMESPACE, '/blocks', [
			[
				'methods' => \WP_REST_Server::READABLE,
				'callback' => [ $this, 'list_blocks' ],
				'permission_callback' => $permission,
				'args' => [ 'page' => [ 'type' => 'integer', 'minimum' => 1, 'default' => 1 ] ],
			],
			[
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'save_block' ],
				'permission_callback' => $permission,
			],
		] );

		register_rest_route( self::NAMESPACE, '/blocks/(?P<id>[1-9][0-9]*)', [
			[
				'methods' => 'PATCH',
				'callback' => [ $this, 'rename_block' ],
				'permission_callback' => [ $this, 'can_edit_block' ],
			],
			[
				'methods' => \WP_REST_Server::DELETABLE,
				'callback' => [ $this, 'delete_block' ],
				'permission_callback' => [ $this, 'can_delete_block' ],
			],
		] );

		register_rest_route( self::NAMESPACE, '/blocks/(?P<id>[1-9][0-9]*)/copy', [
			'methods' => \WP_REST_Server::CREATABLE,
			'callback' => [ $this, 'copy_block' ],
			'permission_callback' => $permission,
		] );

		register_rest_route( self::NAMESPACE, '/blocks/presets/(?P<slug>[a-z0-9-]+)/copy', [
			'methods' => \WP_REST_Server::CREATABLE,
			'callback' => [ $this, 'copy_preset' ],
			'permission_callback' => $permission,
		] );
	}

	private function get_document( $id ) {
		$id = filter_var( $id, FILTER_VALIDATE_INT, [ 'options' => [ 'min_range' => 1 ] ] );

		if ( ! $id || ! current_user_can( 'edit_post', $id ) ) {
			return null;
		}

		$document = Plugin::$instance->documents->get( $id );

		return $document && $document->is_editable_by_current_user() ? $document : null;
	}

	public function can_use_blocks( \WP_REST_Request $request ): bool {
		return $this->is_enabled() && null !== $this->get_document( $request->get_param( 'document' ) );
	}

	public function can_edit_block( \WP_REST_Request $request ) {
		return $this->can_manage_block( $request, 'edit_post' );
	}

	public function can_delete_block( \WP_REST_Request $request ) {
		return $this->can_manage_block( $request, 'delete_post' );
	}

	private function can_manage_block( \WP_REST_Request $request, string $capability ) {
		if ( ! $this->can_use_blocks( $request ) ) {
			return false;
		}

		$block = $this->get_block( (int) $request['id'] );

		return is_wp_error( $block ) ? $block : current_user_can( $capability, $block->ID );
	}

	private function get_block( int $id ) {
		$block = get_post( $id );

		if ( ! $block || self::POST_TYPE !== $block->post_type || 'private' !== $block->post_status ) {
			return $this->error( 'missing_block', __( '找不到此区块。', 'elementor' ), 404 );
		}

		return $block;
	}

	private function error( string $code, string $message, int $status ): \WP_Error {
		return new \WP_Error( 'llq_' . $code, $message, [ 'status' => $status ] );
	}

	private function summarize_block( \WP_Post $post ): array {
		return [
			'id' => $post->ID,
			'title' => $post->post_title,
			'canRename' => current_user_can( 'edit_post', $post->ID ),
			'canDelete' => current_user_can( 'delete_post', $post->ID ),
		];
	}

	private function get_presets(): array {
		$index = __DIR__ . '/presets/index.php';

		return is_readable( $index ) ? require $index : [];
	}

	public function list_blocks( \WP_REST_Request $request ): array {
		$query = new \WP_Query( [
			'post_type' => self::POST_TYPE,
			'post_status' => 'private',
			'meta_key' => self::MODEL_META,
			'posts_per_page' => self::PAGE_SIZE,
			'paged' => (int) $request['page'],
			'orderby' => [ 'date' => 'DESC', 'ID' => 'DESC' ],
			'update_post_meta_cache' => false,
			'update_post_term_cache' => false,
		] );

		$presets = [];

		foreach ( $this->get_presets() as $slug => $preset ) {
			$presets[] = [
				'slug' => $slug,
				'title' => $preset['title'],
			];
		}

		return [
			'blocks' => array_map( [ $this, 'summarize_block' ], $query->posts ),
			'presets' => $presets,
			'pages' => (int) $query->max_num_pages,
		];
	}

	private function get_title( \WP_REST_Request $request ): string {
		$title = $request->get_param( 'title' );
		$title = is_string( $title ) ? sanitize_text_field( $title ) : '';

		return strlen( $title ) <= 360 ? $title : '';
	}

	public function save_block( \WP_REST_Request $request ) {
		if ( strlen( $request->get_body() ) > 512 * 1024 ) {
			return $this->error( 'block_size', __( '此区块超过 512 KB。请拆成较小的区块。', 'elementor' ), 413 );
		}

		$title = $this->get_title( $request );

		if ( '' === $title ) {
			return $this->error( 'block_title', __( '请输入有效的区块名称。', 'elementor' ), 400 );
		}

		$element = $this->normalize_model( $request->get_param( 'model' ), $request['document'] );

		if ( is_wp_error( $element ) ) {
			return $element;
		}

		$json = wp_json_encode( $element );

		if ( false === $json ) {
			return $this->error( 'block_data', __( '无法保存此区块。', 'elementor' ), 400 );
		}

		$id = wp_insert_post( wp_slash( [
			'post_type' => self::POST_TYPE,
			'post_status' => 'private',
			'post_title' => $title,
			'post_author' => get_current_user_id(),
		] ), true );

		if ( is_wp_error( $id ) ) {
			return $id;
		}

		if ( ! add_post_meta( $id, self::MODEL_META, wp_slash( $json ), true ) ) {
			wp_delete_post( $id, true );

			return $this->error( 'block_storage', __( '无法保存此区块。', 'elementor' ), 500 );
		}

		return new \WP_REST_Response( $this->summarize_block( get_post( $id ) ), 201 );
	}

	public function rename_block( \WP_REST_Request $request ) {
		$title = $this->get_title( $request );

		if ( '' === $title ) {
			return $this->error( 'block_title', __( '请输入有效的区块名称。', 'elementor' ), 400 );
		}

		$id = wp_update_post( wp_slash( [
			'ID' => (int) $request['id'],
			'post_title' => $title,
		] ), true );

		return is_wp_error( $id ) ? $id : $this->summarize_block( get_post( $id ) );
	}

	public function delete_block( \WP_REST_Request $request ) {
		if ( ! wp_delete_post( (int) $request['id'], true ) ) {
			return $this->error( 'block_delete', __( '无法删除此区块。', 'elementor' ), 500 );
		}

		return [ 'deleted' => true ];
	}

	public function copy_block( \WP_REST_Request $request ) {
		$block = $this->get_block( (int) $request['id'] );

		if ( is_wp_error( $block ) ) {
			return $block;
		}

		return $this->copy_model( json_decode( get_post_meta( $block->ID, self::MODEL_META, true ), true ), $request['document'] );
	}

	public function copy_preset( \WP_REST_Request $request ) {
		$preset = $this->get_presets()[ $request['slug'] ] ?? null;

		if ( ! $preset ) {
			return $this->error( 'missing_preset', __( '找不到此组合。', 'elementor' ), 404 );
		}

		return $this->copy_model( $preset['model'], $request['document'] );
	}

	private function copy_model( $model, $document_id ) {
		$model = $this->normalize_model( $model, $document_id );

		if ( is_wp_error( $model ) ) {
			return $model;
		}

		$ids = [];

		return [
			'model' => $this->replace_ids( $model, $ids ),
		];
	}

	private function normalize_model( $model, $document_id ) {
		$count = 0;

		if ( ! is_array( $model ) || ! in_array( $model['elType'] ?? '', self::ROOT_TYPES, true ) ||
			! $this->is_native_tree( $model, 0, $count ) ) {
			return $this->error( 'block_model', __( '请选择由可用原子元素组成的 V4 容器、折叠区块或选项卡。', 'elementor' ), 400 );
		}

		$manager = Plugin::$instance->documents;
		$document = $this->get_document( $document_id );

		if ( ! $document ) {
			return $this->error( 'block_document', __( '当前文档无法编辑。', 'elementor' ), 403 );
		}

		$manager->switch_to_document( $document );

		try {
			if ( ! current_user_can( 'unfiltered_html' ) ) {
				$model = Utils::kses_post_deep( $model );
			}

			$element = Plugin::$instance->elements_manager->create_element_instance( $model );

			return $element->get_data_for_save();
		} catch ( \Throwable $exception ) {
			return $this->error( 'block_parse', __( '此区块包含无法保存的元素设置。', 'elementor' ), 400 );
		} finally {
			$manager->restore_document();
		}
	}

	private function is_native_tree( array $model, int $depth, int &$count ): bool {
		if ( ++$count > 250 || $depth > 24 || ! is_string( $model['elType'] ?? null ) ||
			! is_string( $model['id'] ?? null ) || ! preg_match( '/^[a-zA-Z0-9_-]{1,64}$/D', $model['id'] ) ||
			! is_array( $model['elements'] ?? null ) ) {
			return false;
		}

		$plugin = Plugin::$instance;

		if ( 'widget' === $model['elType'] ) {
			if ( ! is_string( $model['widgetType'] ?? null ) ) {
				return false;
			}

			$element_type = $plugin->widgets_manager->get_widget_types( $model['widgetType'] );
		} else {
			$element_type = $plugin->elements_manager->get_element_types( $model['elType'] );
		}

		if ( ! Atomic_Utils::is_atomic( $element_type ) ) {
			return false;
		}

		foreach ( $model['elements'] as $child ) {
			if ( ! is_array( $child ) || ! $this->is_native_tree( $child, $depth + 1, $count ) ) {
				return false;
			}
		}

		return true;
	}

	private function replace_ids( array $element, array &$ids ): array {
		do {
			$element['id'] = bin2hex( random_bytes( 8 ) );
		} while ( isset( $ids[ $element['id'] ] ) );

		$ids[ $element['id'] ] = true;

		// HTML IDs are authored names, so they cannot safely be repeated by a copy.
		unset( $element['settings']['_cssid'], $element['settings']['_element_id'] );

		// Remap local styles and interactions. Shared class and variable references stay intact.
		$element = apply_filters( 'elementor/document/element/replace_id', $element );

		foreach ( $element['elements'] as $index => $child ) {
			$element['elements'][ $index ] = $this->replace_ids( $child, $ids );
		}

		// The editor view expects an object even when the element has no settings.
		$element['settings'] = (object) ( $element['settings'] ?? [] );

		return $element;
	}

	public function enqueue_scripts(): void {
		if ( ! $this->is_enabled() ) {
			return;
		}

		wp_enqueue_script(
			self::HANDLE,
			ELEMENTOR_ASSETS_URL . 'js/linglingqi-local-blocks.js',
			[ 'elementor-v2-editor-app-bar', 'elementor-v2-editor-elements', 'wp-i18n' ],
			ELEMENTOR_VERSION,
			true
		);

		wp_localize_script( self::HANDLE, 'linglingqiLocalBlocks', [
			'url' => rest_url( self::NAMESPACE . '/blocks' ),
			'nonce' => wp_create_nonce( 'wp_rest' ),
		] );
	}

	public function enqueue_styles(): void {
		if ( $this->is_enabled() ) {
			wp_enqueue_style( self::HANDLE, ELEMENTOR_ASSETS_URL . 'css/linglingqi-local-blocks.css', [], ELEMENTOR_VERSION );
		}
	}
}
