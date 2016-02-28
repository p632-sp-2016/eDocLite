/**
 * Created by parikhv on 1/31/16.
 */
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Debug from 'debug';
import Form from './components/Form';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'


let store = createStore(todoApp)
var attachElement = document.getElementById('form');
var todoElement = document.getElementById('todo');

//ReactDOM.render(<Form />, attachElement);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, todoElement
);
