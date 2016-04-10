//import path from 'path';
//import Express from 'express';
var path = require('path');
var Express = require('express');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

var bundle = require('./dev-server.js');

var bodyParser = require('body-parser');

var jsonParser = bodyParser.text({ type: 'text/html' });

var app = Express();
var server;

var fs = require('fs');

var skeleton = require('./ComponentSkeleton.js');

var babel = require('babel-core');

const PATH_STYLES = path.resolve(__dirname, '../src/styles');
const PATH_DIST = path.resolve(__dirname, '../');

process.title = "eDocLite";

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

bundle();

//app.all('/assets/*', function(req, res) {
//    proxy.web(req, res, {
//        target: 'http://localhost:8080/'
//    });
//});

app.get('/', function (req, res)  {
    res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

var components = "";

app.post('/saveForm', jsonParser, function (req, res) {

    const reactComp = babel.transform(req.body, {presets: ['react']}).code;

    components += skeleton.header;
    components += req.body;
    //components += reactComp;
    components += skeleton.footer;

    fs.writeFile("../Form.js", components, function(err) {
        if (err) {
            return console.log(err);
        }
    });
    res.send("Got Components");
});

server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;

    console.log('Server is Listening at %s', port);
});
