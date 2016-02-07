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
            'karma-mocha', 'karma-webpack'
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