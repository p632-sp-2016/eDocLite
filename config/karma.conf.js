/**
 * Created by parikhv on 2/6/16.
 */

var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['mocha'],
        'plugins' : [
            'karma-mocha',
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-babel-preprocessor',
            'karma-coverage',
            'karma-sourcemap-loader',
            'source-map'
        ],
        files: [
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']

        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            reporters: [
                {
                    type: 'text-summary'
                },
                {
                    type: 'html',
                    dir: path.join(__dirname, '../build/coverage')
                },
                {
                    type: 'lcovonly',
                    subdir: './../../'
                }
            ]
        },
        webpack:{
            devtool: 'inline-source-map',
            module: {
                preLoaders: [
                    { test: /\.js$/, loader: 'isparta', include: path.join(__dirname, '../src/'), exclude: [path.join(__dirname, '../test/')]}
                ],
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
