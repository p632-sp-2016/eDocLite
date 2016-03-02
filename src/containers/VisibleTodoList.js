import { connect } from 'react-redux'
import { toggleTodo, moveTodo } from '../actions'
import TodoList from '../components/TodoList'

/**
 * this function returns todo item list that belong to selected filter.
 */
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.payload.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.payload.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onDragMove: (sourceTodo, targetTodo) => {
      dispatch(moveTodo(sourceTodo, targetTodo));
    }
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList
