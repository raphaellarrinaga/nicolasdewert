<?php

/**
 * @file
 * Theme functions for Hops.
 */

/**
 * Get theme functionalities.
 */
function dewert_theme_get_theme(&$variables) {
  dewert_theme_add_libraries($variables);
}

/**
 * Add libraries.
 */
function dewert_theme_add_libraries(&$variables) {
  $typekit_id = theme_get_setting('typekit_id');
  if (!empty($typekit_id)) {
    $variables['typekit_id'] = theme_get_setting('typekit_id');
  }
}
