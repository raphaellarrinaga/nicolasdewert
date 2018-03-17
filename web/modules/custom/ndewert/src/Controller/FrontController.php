<?php

namespace Drupal\ndewert\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class FrontController.
 */
class FrontController extends ControllerBase {

  /**
   * Index.
   *
   * @return string
   *   Return empty markup for front page that is only composed of blocks.
   */
  public function index() {
    return [
      '#type' => 'markup',
      '#markup' => '',
    ];
  }

}
