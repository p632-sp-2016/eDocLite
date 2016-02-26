import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Button} from 'react-bootstrap';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input placeholder="Todo item..." ref={node => {
          input = node
        }} />
        <Button bsStyle="primary" type="submit">Add Todo</Button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
