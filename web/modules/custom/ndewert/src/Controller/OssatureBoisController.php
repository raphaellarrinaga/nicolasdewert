<?php

namespace Drupal\ndewert\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class OssatureBoisController.
 */
class OssatureBoisController extends ControllerBase {

  /**
   * Index.
   *
   * @return string
   *   Return empty markup for Ossature Bois Controller page that is only composed of blocks.
   */
  public function index() {
    return [
      '#type' => 'markup',
      '#markup' => '',
    ];
  }

}
