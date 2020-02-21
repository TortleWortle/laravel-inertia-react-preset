<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Should probably move this to it's own service provider in the future.
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });

        // Too lazy to write so borrowed this from https://github.com/ravenberg/laravel-inertia-react-preset/blob/master/src/stubs/providers/InertiaServiceProvider.stub
        Inertia::share([
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'name' => Auth::user()->name,
                        'email' => Auth::user()->email,
                    ] : null,
                ];
            },
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'status' => Session::get('status')
                ];
            },
            'errors' => function () {
                return Session::has('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
        ]);
    }
}
