<?php

/**
 * @file
 * Theme and preprocess functions for page.
 */

/**
 * Implements HOOK_preprocess_page_title().
 */
function dewert_theme_preprocess_page_title(&$variables) {
  $route_name = \Drupal::routeMatch()->getRouteName();

  if(null != $route_name && $route_name == "ndewert.expertise_controller_index") {
    $variables['title_attributes']['class'][] = "visually-hidden";
  }
}

/**
 * Implements HOOK_preprocess_page().
 */
/*
function dewert_theme_preprocess_page(&$variables) {
  // Define a page template accessible logo path variable
  $variables['logopath'] = '/' . drupal_get_path('theme','dewert_theme') . '/logo.svg';
}
*/

/**
 * Implements HOOK_theme_suggestions_page_alter().
 */
/*
function dewert_theme_theme_suggestions_page_alter
(array &$suggestions, array $variables) {
  // Add custom template suggestion for specific nodes pages
  if ($node = \Drupal::routeMatch()->getParameter('node')) {
    $content_type = $node->bundle();
    $suggestions[] = 'page__'.$content_type;
  }
}
*/
