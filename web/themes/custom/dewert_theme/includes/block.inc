<?php

use Drupal\Core\Render\Markup;

/**
 * @file
 * Theme and preprocess functions for block.
 */

/**
 * Implements hook_theme_suggestions_block_alter().
 */
/*
function dewert_theme_theme_suggestions_block_alter(array &$suggestions, array $variables) {
  // Set bare blocks template
  $plugin_id = $variables['elements']['#base_plugin_id'];
  $bare_blocks = array(
                      "system_branding_block",
                      );
  if (in_array($plugin_id, $bare_blocks)) {
    $suggestions[] = 'block__bare';
  }
}
*/

/**
 * Returns an a pattern
 * @todo comment
 */
// function setPattern($content_type_title, $content_type_url='') {
//   $label = [
//     '#type' => 'pattern',
//     '#id' => 'teaser',
//     '#fields' => [
//       'title' => $content_type_title,
//       'image' => '<img src="https://nosrc.io/150x150" alt="" />',
//       'place' => $content_type_url
//     ]
//   ];
//   \Drupal::service('renderer')->render($label);
//   return $label;
// }

// $variables["items"][0]["content"] = setContentTypeLabel($element[0]["#title"]." ".$variables["bundle"], $element[0]["#url"]);


/**
 * Implements hook_preprocess_block().
 */

function dewert_theme_preprocess_block(&$variables) {
  $elements = $variables['elements'];

  // Target derivative ID
  // Useful for custom blocks placed with context module
  $plugin_id = $variables['derivative_plugin_id'];
  switch ($plugin_id) {
    // case 'ac658fb3-4c73-49ba-945c-6bac0fd43fa0':
    //   // Section Expertise
    //   // $elements['content']['field_intro']
    //   // $elements['content']['field_link']
    //   // $elements['content']['body']
    //   // $variables['label'];
    //   $variables['content'] = setPattern(
    //     $variables['label'],
    //     $elements['content']['field_intro']
    //   );
    //   break;
    // case '37032c38-5533-47e8-aedc-941d7e97659f':
    //   // Section Ossature bois
    //   break;
    // case 'works-block_1':
    //   // Works
    //   break;
    case '10808380-e0b0-4f4e-86dc-0168461221bf':
      $variables['title_attributes']['class'][] = 'section-title';
      break;
   default:
      break;
  }

  // Add class for a specific block
  // $block_id = $variables['elements']['#id'];
  // switch ($block_id) {
  //   case '':
  //     $variables['attributes']['class'][] = '';
  //     break;
  //  default:
  //     break;
  // }

  // Block class for custom block bundles.
  // @see https://www.drupal.org/node/2724333
  if (isset($variables['elements']['content']['#block_content'])) {
    $variables['attributes']['class'][] = 'block--'. $variables['elements']['content']['#block_content']->bundle();
  }
}
