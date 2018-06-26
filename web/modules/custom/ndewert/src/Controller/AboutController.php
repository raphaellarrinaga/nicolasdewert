<?php

namespace Drupal\ndewert\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class AboutController.
 */
class AboutController extends ControllerBase {

  /**
   * Index.
   *
   * @return string
   *   Return empty markup for About page that is only composed of blocks.
   */
  public function index() {
    return [
      '#type' => 'markup',
      '#markup' => '',
    ];
  }

}
