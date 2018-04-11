<?php
use Drupal\image\Entity\ImageStyle;
/**
 * @file
 * Theme and preprocess functions for views.
 */

/**
 * Returns a button primary pattern
 * @todo comment
 */
function setButtonPrimaryPattern($title, $url='') {
  $element = [
    '#type' => 'pattern',
    '#id' => 'hero',
    '#fields' => [
      'slogan' => $title,
      'image' => $url,
    ]
  ];

  \Drupal::service('renderer')->render($element);
  return $element;
}

/**
 * Implements template_preprocess_views_view().
 */

function dewert_theme_preprocess_views_view(&$variables){
  // $view = $variables['view'];

  // if ($variables['id'] == "materials" && $variables['display_id'] == "block_1"){
  //   $items = [];

  //   foreach ($variables['rows'][0]['#rows'] as $row) {
  //     $node = $row['#node'];
  //     $body = $node->get('body')->value;
  //     $image = $node->get('field_image')->value;
  //     $image_url = $node->field_image;
  //     $title = $node->getTitle();
  //     $items[] = setButtonPrimaryPattern($title, $image);
  //   }

  //   $variables['custom_rows'] = $items;
  // }
}
