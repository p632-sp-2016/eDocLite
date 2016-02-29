import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Button, Input,Glyphicon} from 'react-bootstrap';

/**
 * this class facilitates creation of new todo items.
 */
class AddTodo extends React.Component {
    /**
     * Class constructor
     */
    constructor(props) {
        super(props);
        /**
         * @param input
         */
        this.state = {
            input: {
                value: ""
            }
        };
    }

    /**
     * this function dispatches user input for creation of todo item.
     */
    todoSubmit = (event) => {
        event.preventDefault();
        if (!this.state.input.value.trim()) {
            return;
        }
        this.props.dispatch(addTodo(this.state.input.value));
        this.setState({input: {value: ""}})
    };

    /**
     * this is the handleChange method for todo item
     */
    handleChange = (event) => {
        this.setState({input: {value: event.target.value}});
        //this.state.input.value = event.target.value;

    };

    /**
     * this function renders input text for creation of new todo items.
     */
    render = () => {
        const submitTodoButton =  <Button bsStyle="primary" type="submit"><Glyphicon glyph="plus" /></Button>;

        return (
            <div>
                <form onSubmit={this.todoSubmit.bind(this)}>
                    <Input bsSize="large" type="text" placeholder="Todo item..." ref="input"  value={this.state.input.value} onChange={ this.handleChange.bind(this) } buttonAfter={submitTodoButton} />
                </form>
            </div>
        )
    }
}

AddTodo = connect()(AddTodo);

export default AddTodo;
