import React, {PropTypes} from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Button, Input,Glyphicon} from 'react-bootstrap';
import { reduxForm } from 'redux-form';

/**
 * this class facilitates creation of new todo items.
 */
class AddTodo extends React.Component {

    /**
     * this function renders input text for creation of new todo items.
     */
    render = () => {

        const {fields: {text}, handleSubmit, dispatch, resetForm} = this.props;
        const submitTodoButton =  <Button bsStyle="primary" type="submit"><Glyphicon glyph="plus" /></Button>;
        

        return (
            <div>
                <form onSubmit={handleSubmit(data => {
                    dispatch(addTodo(data.text));
                    resetForm();
                })}>
                    <Input bsSize="large" type="text" placeholder="Todo item..." {...text}  buttonAfter={submitTodoButton} />
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
};

AddTodo = reduxForm({
    form: 'todo',
    fields: ['text']
})(AddTodo);

AddTodo = connect()(AddTodo);

export default AddTodo;
