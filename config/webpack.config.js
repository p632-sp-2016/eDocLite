/**
 * Created by parikhv on 1/30/16.
 */

var Webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, '../src/client/scripts/client.js'),
    ],
    output: {
        path: path.resolve(__dirname, '../assets'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
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
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()]
};
