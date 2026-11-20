<?php
namespace Elementor\Modules\Promotions\Controls;

use Elementor\Base_Control;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Promotion_Control extends Base_Control {
	const CONTROL_TYPE = 'promotion';
	public function get_type() { return self::CONTROL_TYPE; }
	public function content_template() {}
}
