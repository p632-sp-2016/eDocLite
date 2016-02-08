/**
 * Created by parikhv on 2/6/16.
 */

var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        'plugins' : [
            'karma-mocha',
            'karma-webpack',
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-opera-launcher',
            'karma-ie-launcher'
        ],
        files: [
            'tests.webpack.js'
        ],
        preprocessors: {
            //'tests.webpack.js': ['webpack', 'sourcemap']
            'tests.webpack.js': ['webpack']

        },
        reporters: ['dots'],
        webpack:{
            //devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' }
                ]
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};
