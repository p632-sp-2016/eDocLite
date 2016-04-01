import { combineReducers } from 'redux'
import components from './components'
import { reducer as todoReducer } from 'redux-form'


/**
 * this function combines multiple reducers into one.
 */
const todoApp = combineReducers({
  components,
  form: todoReducer
});

export default todoApp
