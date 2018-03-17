<?php

namespace Drupal\ndewert\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class ExpertiseController.
 */
class ExpertiseController extends ControllerBase {

  /**
   * Index.
   *
   * @return string
   *   Return empty markup for Expertise page that is only composed of blocks.
   */
  public function index() {
    return [
      '#type' => 'markup',
      '#markup' => '',
    ];
  }

}
