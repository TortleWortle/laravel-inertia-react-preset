<?php

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomeController extends Controller {

  public function index() {
    Inertia::render("home");
  }
}