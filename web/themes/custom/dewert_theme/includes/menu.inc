<?php

/**
 * @file
 * Theme and preprocess functions for menu.
 */

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function dewert_theme_theme_suggestions_menu_alter(array &$suggestions, array $variables) {
  // Remove the block and replace dashes with underscores in the block ID to
  // use for the hook name.
  if (isset($variables['attributes']['block'])) {
    $hook = str_replace(array('block-', '-'), array('', '_'), $variables['attributes']['block']);
    $block = \Drupal\block\Entity\Block::load($hook);
    $region = $block->getRegion();
    $suggestions[] = $variables['theme_hook_original'] . '__' . $region . '__' . $hook;
  }
}
