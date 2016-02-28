import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Button, Input,Glyphicon} from 'react-bootstrap';

//let AddTodo = ({todo_text, dispatch }) => {
//    console.log(todo_text)
//    const submitTodoButton =  <Button bsStyle="primary" type="submit"><Glyphicon glyph="plus" /></Button>;
//
//    let input = {value: ""};
//
//    let handleChange = (event) => {
//        todo_text = event.target.value;
//        console.log(todo_text)
//    };
//
//    let todoSubmit = (event) => {
//        event.preventDefault();
//        if (!todo_text.trim()) {
//            return;
//        }
//        dispatch(addTodo(todo_text));
//        todo_text = "";
//        console.log(todo_text);
//    };
//
//    return (
//    <div>
//      <form onSubmit={todoSubmit}>
//        <Input bsSize="large" type="text" placeholder="Todo item..." onChange={handleChange} defaultValue={todo_text} buttonAfter={submitTodoButton} />
//      </form>
//    </div>
//    )
//};

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {
                value: ""
            }
        };
    }

    todoSubmit = (event) => {
        event.preventDefault();
        if (!this.state.input.value.trim()) {
            return;
        }
        this.props.dispatch(addTodo(this.state.input.value));
        this.setState({input: {value: ""}})
    };

    handleChange = (event) => {
        this.setState({input: {value: event.target.value}});
        //this.state.input.value = event.target.value;

    };

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
