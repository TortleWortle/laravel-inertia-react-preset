const mix = require('laravel-mix');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css')
    .tailwind('./tailwind.config.js')
    .webpackConfig({
        output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    })
    .purgeCss()
    .version();

// https://browsersync.io/docs/options/
mix.browserSync({
    proxy: '%VALET_URL%',
    ws: false
});