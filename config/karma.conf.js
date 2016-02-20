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
                    { test: /\.js$/, loader: 'babel-loader' },
                    {
                        test: /\.less$/,
                        exclude: /node_modules/,
                        loader: 'style!css!less'
                    },
                    { test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
                    { test: /\.ttf(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
                    { test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
                    { test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
                ]
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};
