<?php

namespace TortleWortle\InertiaReactPreset;

use Illuminate\Foundation\Console\PresetCommand;
use Illuminate\Support\ServiceProvider;

class InertiaReactServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        PresetCommand::macro("inertia_react", function($command) {
            Preset::install();
            $command->info("Preset installed successfully.\nDon't forget to run:\nnpm install && npm run dev");
        });
    }
}
