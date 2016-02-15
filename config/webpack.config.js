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
            }

        ]
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()]
};
