//import path from 'path';
//import Express from 'express';
var path = require('path');
var Express = require('express');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

var bundle = require('./dev-server.js');

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

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

var createComponent = function(component) {
    var componentTag = "\t\t\t\t";

    var props = component.props;

    componentTag += "<" + props.name;

    for(var id in props) {
        if (id === "elements" || id === "selectedElement")
            componentTag += " " + id + "=" + "{" + JSON.stringify(props[id]) + "}";
        else
            componentTag += " " + id + "=" + JSON.stringify(props[id]);
    }

    componentTag += " /> \n";

    return componentTag;
};

app.post('/saveForm', jsonParser, function (req, res) {
    var components = req.body;

    var componentTags = "";

    componentTags += skeleton.header;
    for (var id in components) {
        var component = components[id];

        componentTags += createComponent(component);
    };
    componentTags += skeleton.footer;

    fs.writeFile("../forms/form.js", componentTags, function(err) {
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
