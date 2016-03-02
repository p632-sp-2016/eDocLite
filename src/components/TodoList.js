import React, { PropTypes } from 'react';
import Todo from './Todo';
import { ListGroup } from 'react-bootstrap';
import { DropTarget } from 'react-dnd';
import { moveTodo } from '../actions';

class TodoList extends React.Component {
    render() {

        const { todos, onTodoClick, onDragMove } = this.props;
        return (
            <div>
                <ListGroup>
                    {todos.map(todo =>
                        <Todo
                            key={todo.id}
                            {...todo}
                            onClick={() => onTodoClick(todo.id)}
                            onDragMove = {(sourceProp, targetProp) => onDragMove(sourceProp, targetProp)}
                        />
                    )}
                </ListGroup>
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
//export default DropTarget("Todo", todoTarget, collect)(TodoList);