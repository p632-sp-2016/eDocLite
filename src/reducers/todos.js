import { handleActions, handleAction } from  'redux-actions';
import { Actions } from '../constants'
/**
 * this function returns a todo item with initialized values or toggled status as selected by action.
 */
const todo = (state, { type, payload: { id, text, completed } }) => {
  switch (type) {
    case Actions.addTodo:
      return {
        id,
        text,
        completed: false
      };

    case Actions.moveTodo:
      return {
        id,
        text,
        completed
      };

    case Actions.toggleTodo:
      if (state.id !== id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };

    default:
      return state
  }
};

/**
 * this function handles creation and status of todo items.
 */
const todos = handleActions({
    ADD_TODO: (state, action) => ([
        ...state,
        todo(undefined, action)
    ]),

    MOVE_TODO: (state, action) => {
        state = state.filter(todo => (todo.id !== action.payload.id));

        const targetTodo = state.find(todo => (todo.id === action.payload.target_id));

        let targetTodoIndex = state.indexOf(targetTodo) + 1;

        state.splice(targetTodoIndex, 0, todo(undefined, action));

        return state;
    },

    TOGGLE_TODO: (state, action) => {
        return state.map(t =>
            todo(t, action)
        );
    }
},  ([]));

export default todos;
