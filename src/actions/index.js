/**
 * this variable holds unique incremental ID for every todo item.
 */
let nextTodoId = 0;

/**
 * this function returns an object to add a new item to todo list.
 */
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
};

/**
 * this function returns an object to set the visibility filter for the todo list.
 */
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

/**
 * this function returns an object to change the state of todo item.
 */
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
