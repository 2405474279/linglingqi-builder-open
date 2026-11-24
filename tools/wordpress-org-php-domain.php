<?php

// Build-time filter. Migrate only literal WordPress translation arguments.
$domain_arguments = [
	'__' => 1,
	'_e' => 1,
	'_x' => 2,
	'_ex' => 2,
	'_n' => 3,
	'_nx' => 4,
	'_n_noop' => 2,
	'_nx_noop' => 3,
	'esc_attr__' => 1,
	'esc_attr_e' => 1,
	'esc_attr_x' => 2,
	'esc_html__' => 1,
	'esc_html_e' => 1,
	'esc_html_x' => 2,
	'translate' => 1,
	'translate_with_gettext_context' => 2,
	'load_textdomain' => 0,
	'load_plugin_textdomain' => 0,
	'is_textdomain_loaded' => 0,
];

function migrate_domain( $source, $domain_arguments ) {
	$tokens = token_get_all( $source );
	$groups = [];
	$previous = '';
	$before_previous = '';
	$output = '';

	foreach ( $tokens as $index => $token ) {
		$text = is_array( $token ) ? $token[1] : $token;
		if ( is_array( $token ) && in_array( $token[0], [ T_COMMENT, T_DOC_COMMENT, T_WHITESPACE ], true ) ) {
			$output .= $text;
			continue;
		}

		if ( ! is_array( $token ) ) {
			switch ( $token ) {
				case '(':
					$method = in_array( $before_previous, [ '->', '?->', '::' ], true );
					$groups[] = [ $method ? null : ( $domain_arguments[ ltrim( $previous, '\\' ) ] ?? null ), 0 ];
					break;
				case '[':
				case '{':
					$groups[] = [ null, 0 ];
					break;
				case ')':
				case ']':
				case '}':
					array_pop( $groups );
					break;
				case ',':
					if ( $groups ) {
						++$groups[ count( $groups ) - 1 ][1];
					}
					break;
			}
		} elseif ( in_array( $token[0], [ T_CURLY_OPEN, T_DOLLAR_OPEN_CURLY_BRACES ], true ) ||
			( defined( 'T_ATTRIBUTE' ) && T_ATTRIBUTE === $token[0] ) ) {
			$groups[] = [ null, 0 ];
		} elseif ( T_CONSTANT_ENCAPSED_STRING === $token[0] && in_array( $text, [ "'elementor'", '"elementor"' ], true ) &&
			in_array( $previous, [ '(', ',' ], true ) && $groups ) {
			[ $domain_argument, $argument ] = end( $groups );
			if ( $domain_argument === $argument ) {
				$next = $index + 1;
				while ( is_array( $tokens[ $next ] ?? null ) &&
					in_array( $tokens[ $next ][0], [ T_COMMENT, T_DOC_COMMENT, T_WHITESPACE ], true ) ) {
					++$next;
				}
				if ( in_array( $tokens[ $next ] ?? null, [ ',', ')' ], true ) ) {
					$text = "'linglingqi-builder-open'";
				}
			}
		}

		$output .= $text;
		$before_previous = $previous;
		$previous = $text;
	}

	return $output;
}

while ( false !== ( $line = fgets( STDIN ) ) ) {
	$source = base64_decode( trim( $line ), true );
	if ( false === $source ) {
		exit( 1 );
	}
	echo base64_encode( migrate_domain( $source, $domain_arguments ) ) . PHP_EOL;
}
