// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-10-31 using
// generator-karma 0.8.3

module.exports = function(config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine-jquery','jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/**/**/*.html',
            'src/**/*.js',
            'test/**/*.spec.js'
        ], 

        preprocessors: {
            'src/**/**/*.js': 'coverage',
            'src/ANWB.formfields.module/templates/*.html': 'ng-html2js'
        },

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
        ],

        // Which plugins to enable
        plugins: [
            // 'karma-junit-reporter',
            // 'karma-chrome-launcher',
            // 'karma-firefox-launcher',
            // 'karma-opera-launcher',
            // 'karma-ie-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine-jquery',
            'karma-jasmine',
            'karma-coverage'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_DEBUG,



        reporters: ['coverage','progress'],

        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};
