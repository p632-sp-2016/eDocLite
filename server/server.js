//import path from 'path';
//import Express from 'express';
var path = require('path');
var Express = require('express');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

var bundle = require('./dev-server.js');

var app = Express();
var server;

const PATH_STYLES = path.resolve(__dirname, '../src/styles');
const PATH_DIST = path.resolve(__dirname, '../');

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

bundle();

app.all('/assets/*', function(req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080/'
    });
});

app.get('/', function (req, res)  {
    res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;

    console.log('Server is Listening at %s', port);
});
