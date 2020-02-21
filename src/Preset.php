<?php

namespace TortleWortle\InertiaReactPreset;

use Illuminate\Foundation\Console\Presets\Preset as LaravelPreset;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Arr;

class Preset extends LaravelPreset
{
  public static function install()
  {
    // Remove default sass
    static::cleanSass();

    // Update package.json with stuff needed
    static::updatePackages();

    // Update some service providers to add inertia features
    static::updateServiceProviders();

    // Also does tailwind.config.js and .babelrc
    static::setupMix();

    // remove default views + add base layout
    static::updateViews();

    // replace css
    static::updateCSS();

    // replace js
    static::updateScripts();

    // replace auth controllers
    static::setupControllers();

    // replace route file to contain some inertia stuff
    static::setupRoutes();
  }


  public static function setupRoutes()
  {
    copy(__DIR__ . "/stubs/routes/web.php", base_path('/routes/web.php'));
  }

  public static function setupControllers()
  {
    copy(__DIR__ . "/stubs/controllers/auth/ConfirmPasswordController.php", base_path('/app/Http/Controllers/Auth/ConfirmPasswordController.php'));
    copy(__DIR__ . "/stubs/controllers/auth/ForgotPasswordController.php", base_path('/app/Http/Controllers/Auth/ForgotPasswordController.php'));
    copy(__DIR__ . "/stubs/controllers/auth/LoginController.php", base_path('/app/Http/Controllers/Auth/LoginController.php'));
    copy(__DIR__ . "/stubs/controllers/auth/RegisterController.php", base_path('/app/Http/Controllers/Auth/RegisterController.php'));
    copy(__DIR__ . "/stubs/controllers/auth/ResetPasswordController.php", base_path('/app/Http/Controllers/Auth/ResetPasswordController.php'));
    copy(__DIR__ . "/stubs/controllers/HomeController.php", base_path('/app/Http/Controllers/HomeController.php'));
  }

  public static function cleanSass()
  {
    File::cleanDirectory(resource_path("sass"));
    File::deleteDirectory(resource_path("sass"));
  }

  public static function updateScripts()
  {
    File::cleanDirectory(resource_path(("js")));
    File::copyDirectory(__DIR__ . "/stubs/resources/js", base_path("/resources/js"));
  }

  public static function updateViews()
  {
    File::cleanDirectory(resource_path(("views")));
    File::copyDirectory(__DIR__ . "/stubs/resources/views", base_path("/resources/views"));
  }

  public static function updateCSS()
  {
    File::cleanDirectory(resource_path(("css")));
    File::copyDirectory(__DIR__ . "/stubs/resources/css", base_path("/resources/css"));
  }

  public static function updatePackageArray(array $packages)
  {
    return [
      '@babel/preset-react' => '^7.0.0',
      "@babel/plugin-syntax-dynamic-import" => "^7.8.3",
      "@inertiajs/inertia" => "^0.1.7",
      "@inertiajs/inertia-react" => "^0.1.4",
      'react' => '^16.12.0',
      'react-dom' => '^16.12.0',
      "browser-sync" => "^2.26.7",
      "browser-sync-webpack-plugin" => "^2.0.1",
      'laravel-mix-tailwind' => '^0.1.0',
      'tailwindcss' => '^1.2.0',
      "laravel-mix-purgecss" => "^5.0.0-rc.1",
    ] + Arr::except($packages, ["lodash", "sass-loader", "sass", "axios"]);
  }

  public static function setupMix()
  {
    // Read contents of the webpack stub
    $contents = file_get_contents(__DIR__ . "/stubs/webpack.mix.js");

    // Replace %VALET_URL% with the default valet url
    $splat = explode("/", base_path());
    $base_url = $splat[array_key_last($splat)];
    $url = strtolower($base_url . ".test");
    $contents = str_replace("%VALET_URL%", $url, $contents);

    File::put(base_path('webpack.mix.js'), $contents);
    copy(__DIR__ . "/stubs/tailwind.config.js", base_path('tailwind.config.js'));
    copy(__DIR__ . "/stubs/.babelrc", base_path('.babelrc'));
  }

  public static function updateServiceProviders()
  {
    copy(__DIR__ . "/stubs/providers/AppServiceProvider.php", base_path('app/Providers/AppServiceProvider.php'));
  }
}
