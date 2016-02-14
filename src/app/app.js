import React from 'react';
import ReactDom from 'react-dom';
import Debug from 'debug';

import Form from './components/Form';

var debug = Debug('Hello World');

class App {
    constructor(options) {
        debug('Create app with Options', options);

        this.state = options.state;
    }

    render (element) {
        debug('Render app with state', this.state);

        var appRootElement = React.createElement(Form, {
            state: this.state
        });

        if (element) {
            debug('Render to DOM');
            ReactDom.render(appRootElement, element);
            return;
        }

        debug('Render to String');
        return ReactDom.renderToString(appRootElement);
    }

    renderToDOM (element) {
        if (!element) {
            return debug(new Error('App.renderToDOM: Element is required'));
        }

        this.render(element);
    }

    renderToString () {
        return this.render();
    }
}

export default App;