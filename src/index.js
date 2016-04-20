/**
 * Created by parikhv on 1/31/16.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import createLogger from 'redux-logger';
import { Actions } from './constants';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';

const isUserDefinedAction = (action) => {
  let result = false;
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

let store = createStore(todoApp, applyMiddleware(logger), applyMiddleware(thunk));
var todoElement = document.getElementById('todo');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="saveForm"/>
      </Route>
    </Router>
  </Provider>, todoElement
);
