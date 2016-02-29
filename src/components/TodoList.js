import React, { PropTypes } from 'react';
import Todo from './Todo';
import { ListGroup } from 'react-bootstrap';

/**
 * this function holds all the todo items as a list.
 */
const TodoList = ({ todos, onTodoClick }) => (
  <ListGroup>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ListGroup>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
