import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/**
 * this function combines multiple reducers into one.
 */
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp
