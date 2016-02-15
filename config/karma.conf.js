/**
 * Created by parikhv on 2/6/16.
 */

var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['mocha'],
        'plugins' : [
            'karma-mocha',
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-babel-preprocessor'
        ],
        files: [
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack']

        },
        reporters: ['dots'],
        webpack:{
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
