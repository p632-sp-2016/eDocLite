/**
 * Created by parikhv on 1/31/16.
 */
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Debug from 'debug';
import Form from './components/Form';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import createLogger from 'redux-logger';
import { Actions } from './constants'

const isUserDefinedAction = (action) => {
  let result = false
  Object.keys(Actions).forEach(key => {
    if(action.type === Actions[key]){
      result = true;
    }
  });
  return result;
};

const logger = createLogger({
  predicate: (getState, action) => isUserDefinedAction(action)
});

let store = createStore(todoApp, applyMiddleware(logger));
var todoElement = document.getElementById('todo');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, todoElement
);
