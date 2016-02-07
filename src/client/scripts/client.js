/**
 * Created by parikhv on 1/31/16.
 */
import Debug from 'debug';
import App from '../../app';

var attachElement = document.getElementById('form');

var state = "Demo";

var app;

Debug.enable('myApp*');

app = new App({
    state: state
});

app.renderToDOM(attachElement);