"""Build the directory submission ZIP from the verified GitHub release."""

import argparse
import base64
import hashlib
from pathlib import Path
import re
import subprocess
import zipfile


SLUG = "linglingqi-builder-open"
BASELINE_SHA256 = "ad596a544cca67400d054359462d34de47c81b81a208edf5d0595bb89bd8418d"
DIRECTORY_VERSION = "1.3.2"
ESBUILD_VERSION = "0.25.12"
ENTRY = f"{SLUG}/linglingqi-builder.php"
README = f"{SLUG}/readme.txt"
UPDATER = f"{SLUG}/includes/linglingqi-release-updates.php"
UPDATE_URI = b" * Update URI: https://github.com/2405474279/linglingqi-builder-open\n"
UPDATE_LOADER = b"\nrequire_once ELEMENTOR_PATH . 'includes/linglingqi-release-updates.php';\n"
JSX_PACKAGES = ("editor-canvas", "editor-controls", "query", "ui")
JSX_REGION = re.compile(
    rb"^//#region node_modules/react/cjs/react-jsx-runtime\.development\.js\r?\n"
    rb".*?^//#region node_modules/react/jsx-runtime\.js\r?\n.*?^//#endregion",
    re.MULTILINE | re.DOTALL,
)
ABSPATH_GUARD = b"if ( ! defined( 'ABSPATH' ) ) {\n\texit;\n}\n"


def directory_entry(data):
    data = data.replace(b"\r\n", b"\n")
    version = DIRECTORY_VERSION.encode()
    replacements = {
        " * Plugin Name: 凌凌漆可视化编辑器（开源版）\n".encode(): (
            " * Plugin Name: LingLingQi Builder（凌凌漆可视化编辑器）\n".encode()
        ),
        b" * Version: 1.3.1\n": b" * Version: " + version + b"\n",
        b"define( 'ELEMENTOR_VERSION', '1.3.1' );": b"define( 'ELEMENTOR_VERSION', '" + version + b"' );",
        b" * Requires at least: 6.8\n": (
            b" * Requires at least: 6.8\n"
            b" * License: GPLv3\n"
            b" * License URI: https://www.gnu.org/licenses/gpl-3.0.html\n"
        ),
        UPDATE_URI: b" * Plugin URI: https://bpvips.com/collection/linglingqi-builder\n",
        UPDATE_LOADER: b"",
        b" * Text Domain: elementor\n": b" * Text Domain: linglingqi-builder-open\n",
        b"'languages/elementor-' . $locale . '.mo'": (
            b"'languages/linglingqi-builder-open-' . $locale . '.mo'"
        ),
    }
    for old, new in replacements.items():
        if data.count(old) != 1:
            raise ValueError(f"Expected one matching entry marker: {old!r}")
        data = data.replace(old, new)
    return data


def migrate_php_domains(source, php):
    files = [
        item for item in source.namelist()
        if item.endswith(".php") and item != UPDATER and "/vendor" not in item
    ]
    token_filter = Path(__file__).with_name("wordpress-org-php-domain.php")
    result = subprocess.run(
        [php, str(token_filter)],
        input=b"\n".join(base64.b64encode(source.read(file)) for file in files) + b"\n",
        stdout=subprocess.PIPE,
        check=True,
    )
    lines = result.stdout.splitlines()
    if len(lines) != len(files):
        raise ValueError("Translation domain migration returned an incomplete file list.")
    return dict(zip(files, (base64.b64decode(line, validate=True) for line in lines)))


def externalize_jsx(source, esbuild):
    version = subprocess.check_output([esbuild, "--version"], text=True).strip()
    if version != ESBUILD_VERSION:
        raise ValueError(f"Use esbuild {ESBUILD_VERSION}; found {version}.")
    updated = {}
    for package in JSX_PACKAGES:
        prefix = f"{SLUG}/assets/js/packages/{package}/{package}"
        script, count = JSX_REGION.subn(
            b"var require_jsx_runtime = () => window.ReactJSXRuntime;",
            source.read(prefix + ".js"),
        )
        if count != 1 or b"require_react_jsx_runtime_development" in script:
            raise ValueError(f"Changed JSX module layout in {package}.")

        manifest = source.read(prefix + ".asset.php")
        if manifest.count(b"'react',") != 1:
            raise ValueError(f"Changed React dependency list in {package}.")

        compressed = subprocess.run(
            [esbuild, "--loader=js", "--minify", "--legal-comments=inline"],
            input=script,
            stdout=subprocess.PIPE,
            check=True,
        )
        updated[prefix + ".js"] = script
        updated[prefix + ".min.js"] = compressed.stdout
        updated[prefix + ".asset.php"] = manifest.replace(
            b"'react',", b"'react',\n\t\t'react-jsx-runtime',", 1
        )
    return updated


def patch_review_php(files):
    def replace(relative, original, replacement, count=1):
        name = f"{SLUG}/{relative}"
        original = original.encode()
        data = files[name].replace(b"\r\n", b"\n")
        if data.count(original) != count:
            raise ValueError(f"Unexpected review patch context in {relative}.")
        files[name] = data.replace(original, replacement.encode())

    guard = ABSPATH_GUARD.decode()
    for relative, namespace in (
        ("core/utils/plugins-manager.php", r"Elementor\Core\Utils"),
        ("modules/atomic-widgets/module.php", r"Elementor\Modules\AtomicWidgets"),
    ):
        marker = f"namespace {namespace};\n"
        replace(relative, marker, marker + "\n" + guard)
    name = f"{SLUG}/core/kits/views/panel.php"
    files[name] = b"<?php\n" + ABSPATH_GUARD + b"?>\n" + files[name]

    for relative in ("core/editor/notice-bar.php", "modules/checklist/steps/setup-header.php"):
        replace(relative, "esc_html__( '', 'linglingqi-builder-open' )", "''")

    relative = "includes/settings/tools.php"
    replace(
        relative,
        "'html' => '<p class=\"description\">' . sprintf( esc_html__( 'Current version: %s. To update, upload a new plugin package.', 'linglingqi-builder-open' ), ELEMENTOR_VERSION ) . '</p>',",
        "'html' => '<p class=\"description\">' . sprintf(\n"
        "\t\t\t\t\t\t\t\t\t\t/* translators: %s: installed plugin version. */\n"
        "\t\t\t\t\t\t\t\t\t\tesc_html__( 'Current version: %s. To update, upload a new plugin package.', 'linglingqi-builder-open' ),\n"
        "\t\t\t\t\t\t\t\t\t\tELEMENTOR_VERSION\n"
        "\t\t\t\t\t\t\t\t\t) . '</p>',",
    )

    patch_filesystem(files, replace)
    patch_admin_output(files, replace)
    patch_editor_confirmation(replace)
    patch_query_identifiers(replace)


def patch_filesystem(files, replace):
    for relative, call, count in (
        ("core/files/uploads-manager.php", "unlink( $path )", 1),
        ("core/files/uploads-manager.php", "unlink( $name )", 1),
        ("core/utils/import-export/wp-import.php", "@unlink( $tmp_file_name )", 7),
        ("modules/safe-mode/module.php", "unlink( $file_path )", 1),
        ("core/files/base.php", "unlink( $this->path )", 1),
        ("core/files/fonts/google-font.php", "@unlink( $tmp_font_file )", 1),
        ("core/files/fonts/google-font.php", "unlink( $file_path )", 1),
        ("core/files/manager.php", "unlink( $file_path )", 2),
    ):
        replace(relative, call, call.replace("@unlink", "unlink").replace("unlink", "wp_delete_file"), count)

    local_filesystem = """	/**
	 * Filesystem for local paths returned by WordPress uploads and temporary files.
	 */
	public static function get_local_filesystem() {
		require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-base.php';
		require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-direct.php';

		return new \\WP_Filesystem_Direct( null );
	}

"""
    marker = "\tpublic static function generate_random_string() {"
    # Keep the existing random-string method's documentation with that method.
    replace("includes/utils.php", marker + "\n\t\treturn dechex( rand() );\n\t}\n", marker
            + "\n\t\treturn dechex( wp_rand( 0, 0x7fffffff ) );\n\t}\n\n" + local_filesystem.rstrip("\n") + "\n")
    replace("core/files/uploads-manager.php", "rmdir( $name )",
            "\\Elementor\\Utils::get_local_filesystem()->rmdir( $name )")
    replace("core/files/uploads-manager.php", "rmdir( $dir )",
            "\\Elementor\\Utils::get_local_filesystem()->rmdir( $dir )")
    replace("modules/safe-mode/module.php", "@rmdir( WPMU_PLUGIN_DIR );",
            "if ( is_dir( WPMU_PLUGIN_DIR ) ) {\n"
            "\t\t\t\t\\Elementor\\Utils::get_local_filesystem()->rmdir( WPMU_PLUGIN_DIR );\n\t\t\t}")
    replace("core/utils/import-export/wp-import.php", "chmod( $new_file, $perms );",
            "if ( $perms ) {\n\t\t\t\\Elementor\\Utils::get_local_filesystem()->chmod( $new_file, $perms );\n\t\t}")
    replace("modules/design-system-sync/classes/stylesheet-manager.php", "is_writable( $dir )", "wp_is_writable( $dir )")
    replace("modules/system-info/reporters/server.php", "is_writeable( $path )", "wp_is_writable( $path )")

    parser = "core/utils/import-export/parsers/wxr-parser-regex.php"
    replace(parser, "return fopen( $filename, $mode );",
            "try {\n\t\t\t$file = new \\SplFileObject( $filename, $mode );\n"
            "\t\t\t$file->setMaxLineLen( 8191 );\n\t\t\treturn $file;\n"
            "\t\t} catch ( \\RuntimeException $e ) {\n\t\t\treturn false;\n\t\t}")
    replace(parser, "\n\t\treturn feof( $fp );", "\n\t\treturn $fp->eof();")
    replace(parser, "\n\t\treturn fgets( $fp, $len );", "\n\t\treturn $fp->fgets();")
    replace(parser, "\t\t\t$this->fclose( $fp );", "\t\t\t$this->fclose( $fp );\n\t\t\tunset( $fp );")
    replace(parser, "\n\t\treturn fclose( $fp );", "\n\t\treturn true;")


def patch_admin_output(files, replace):
    replace("core/utils/ab-test.php", "mt_rand( 1, 2 )", "wp_rand( 1, 2 )")
    replace("includes/controls/media.php", "strip_tags( $text )", "wp_strip_all_tags( $text )")
    replace("modules/system-info/module.php", "parse_url( site_url(), PHP_URL_HOST )",
            "wp_parse_url( site_url(), PHP_URL_HOST )")
    replace("modules/atomic-widgets/opt-in/opt-in.php", "throw new \\Exception( $this->get_legacy_notice(), 409 );",
            "throw new \\Exception( esc_html( $this->get_legacy_notice() ), 409 );")

    settings = "includes/settings/settings.php"
    settings_data = files[f"{SLUG}/{settings}"].replace(b"\r\n", b"\n").decode()
    _, _, home_page = settings_data.partition("public function display_home_screen() {\n")
    entries, end_marker, _ = home_page.partition("\n\t\techo '<div class=\"wrap e-home-screen-fallback\">';")
    if not end_marker or entries.count("=> esc_html__( '") != 8:
        raise ValueError("Expected the home screen entry labels and descriptions.")
    replace(settings, entries, entries.replace("=> esc_html__( '", "=> __( '"))
    for field in ("label", "desc"):
        replace(settings, f"\n\t\t\t\t$entry['{field}']", f"\n\t\t\t\tesc_html( $entry['{field}'] )")

    # The exporter writes literal XML with values already prepared for WXR.
    exporter = "core/utils/import-export/wp-exporter.php"
    replace(exporter, "wxr_authors_list( array $post_ids = null )", "wxr_authors_list( ?array $post_ids = null )")
    name = f"{SLUG}/{exporter}"
    data = files[name].replace(b"\r\n", b"\n").decode()
    match = re.search(r"\$result = <<<EOT\n(.*?)\nEOT;", data, re.DOTALL)
    if not match:
        raise ValueError("Expected the WXR output template.")
    lines = []
    for line in match[1].split("\n"):
        pieces = re.split(r"(\$[a-z_]+)", line)
        expression = " . ".join(
            piece if index % 2 else "'" + piece.replace("\\", "\\\\").replace("'", "\\'") + "'"
            for index, piece in enumerate(pieces) if piece
        )
        lines.append("\t\t\t" + (expression or "''") + ",")
    replacement = '$result = implode( "\\n", [\n' + "\n".join(lines) + "\n\t\t] );"
    replace(exporter, match[0], replacement)


def patch_editor_confirmation(replace):
    replace(
        "core/base/document.php",
        "\t\t$url = apply_filters( 'elementor/document/urls/edit', $url, $this );",
        """		if ( ! $this->is_built_with_elementor() ) {
			$url = add_query_arg(
				'llq_builder_nonce',
				wp_create_nonce( 'linglingqi_open_enable_builder_' . $this->get_main_id() ),
				$url
			);
		}

		$url = apply_filters( 'elementor/document/urls/edit', $url, $this );""",
    )
    replace(
        "includes/preview.php",
        "if ( isset( $_GET['preview-debug'] ) ) {",
        "if ( WP_DEBUG && current_user_can( 'manage_options' ) && isset( $_GET['preview-debug'] ) ) {",
    )
    replace(
        "includes/preview.php",
        "Utils::print_unescaped_internal_string( $e['message'] );",
        "echo esc_html( $e['message'] );",
    )


def patch_query_identifiers(replace):
    relative = "core/base/background-process/wp-background-process.php"
    replace(
        relative,
        "\t\t// phpcs:disable WordPress.DB.PreparedSQL.InterpolatedNotPrepared\n"
        "\t\t// Can't use placeholders for table/column names, it will be wrapped by a single quote (') instead of a backquote (`).\n",
        "",
        2,
    )
    replace(relative, "FROM {$table}\n\t\t\tWHERE {$column} LIKE %s", "FROM %i\n\t\t\tWHERE %i LIKE %s", 2)
    replace(relative, "ORDER BY {$key_column} ASC", "ORDER BY %i ASC")
    replace(relative, 'LIMIT 1\n\t\t", $key ) );\n\t\t// phpcs:enable',
            'LIMIT 1\n\t\t", $table, $column, $key, $key_column ) );')
    replace(relative, '\t\t", $key ) );\n\t\t// phpcs:enable', '\t\t", $table, $column, $key ) );')
    replace(
        "core/editor/editor.php",
        "\t\t// Change mode to Builder\n\t\t$document->set_is_built_with_elementor( true );",
        """		if ( ! $document->is_built_with_elementor() ) {
			$nonce = isset( $_GET['llq_builder_nonce'] ) && is_string( $_GET['llq_builder_nonce'] )
				? sanitize_text_field( wp_unslash( $_GET['llq_builder_nonce'] ) )
				: '';

			if ( ! wp_verify_nonce( $nonce, 'linglingqi_open_enable_builder_' . $document->get_main_id() ) ) {
				wp_die(
					sprintf(
						'<p>%1$s</p><p><a href="%2$s">%3$s</a></p>',
						esc_html__( 'Confirm opening this page in LingLingQi Builder.', 'linglingqi-builder-open' ),
						esc_url( $document->get_edit_url() ),
						esc_html__( 'Edit with LingLingQi Builder', 'linglingqi-builder-open' )
					),
					'',
					[ 'response' => 403, 'back_link' => true ]
				);
			}

			$document->set_is_built_with_elementor( true );
		}""",
    )


def build(baseline, output, php, esbuild):
    if hashlib.sha256(baseline.read_bytes()).hexdigest() != BASELINE_SHA256:
        raise ValueError("The input must be the verified GitHub v1.3.1 release ZIP.")

    readme = Path(__file__).resolve().parents[1] / "docs" / "wordpress-org" / "readme.txt"
    directory_readme = readme.read_bytes().replace(b"\r\n", b"\n")
    if f"Stable tag: {DIRECTORY_VERSION}\n".encode() not in directory_readme:
        raise ValueError("Directory readme and plugin versions differ.")

    with zipfile.ZipFile(baseline) as source, zipfile.ZipFile(output, "x") as archive:
        migrated = migrate_php_domains(source, php)
        patch_review_php(migrated)
        migrated.update(externalize_jsx(source, esbuild))
        for item in source.infolist():
            if item.filename == UPDATER:
                continue
            data = migrated[item.filename] if item.filename in migrated else source.read(item)
            if item.filename == ENTRY:
                data = directory_entry(data)
            elif item.filename == README:
                data = directory_readme
            elif item.filename.endswith((".mo", ".po")) and item.filename.startswith(f"{SLUG}/languages/elementor-"):
                item.filename = item.filename.replace("/languages/elementor-", f"/languages/{SLUG}-")
            archive.writestr(item, data, compress_type=zipfile.ZIP_DEFLATED, compresslevel=8)

    with zipfile.ZipFile(output) as archive:
        if archive.testzip() or UPDATER in archive.namelist():
            raise ValueError("Submission ZIP verification failed.")
        print(f"{len(archive.namelist()):,} files, {output.stat().st_size:,} bytes")
    print(f"SHA-256 {hashlib.sha256(output.read_bytes()).hexdigest()}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("baseline", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--php", default="php", help="Path to the PHP 7.4+ CLI")
    parser.add_argument("--esbuild", default="esbuild", help=f"Path to esbuild {ESBUILD_VERSION}")
    args = parser.parse_args()
    build(args.baseline, args.output, args.php, args.esbuild)
