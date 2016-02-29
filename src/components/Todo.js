import React, { PropTypes } from 'react'
import { ListGroupItem } from 'react-bootstrap';

/**
 * this function represents each todo item.
 */
const Todo = ({ onClick, completed, text }) => (
  <ListGroupItem
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </ListGroupItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
