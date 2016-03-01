/**
 * this function returns a todo item with initialized values or toggled status as selected by action.
 */
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'MOVE_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: action.completed
      };

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
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
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];

    case 'MOVE_TODO':
        state = state.filter(todo => (todo.id !== action.id));

        const targetTodo = state.filter(todo => (todo.id === action.target_id));

        const findTodo = (todo) => {
            return todo.id === action.target_id;
        };

        const targetTodoIndex = state.indexOf(state.find(findTodo));

        state.splice(targetTodoIndex, 0, todo(undefined, action));

      return state;

    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state
  }
};

export default todos;
