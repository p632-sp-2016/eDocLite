import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import components from './components'
import { reducer as todoReducer } from 'redux-form'


/**
 * this function combines multiple reducers into one.
 */
const todoApp = combineReducers({
  todos,
  visibilityFilter,
  components,
  form: todoReducer
});

export default todoApp
