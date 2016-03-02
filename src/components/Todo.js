import React, { PropTypes } from 'react'
import { ListGroupItem } from 'react-bootstrap';
import { DragSource, DropTarget } from 'react-dnd';
import { DragDrop } from '../constants';

const todoSource = {
  beginDrag(sourceProps) {
    return sourceProps;
  }
};

const todoTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if(sourceId !== targetId) {
      targetProps.onDragMove(sourceProps, targetProps);
    }
  }
};

@DragSource(DragDrop.item, todoSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
@DropTarget(DragDrop.item, todoTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))

class Todo extends React.Component {
  render() {
    const { connectDragSource, connectDropTarget, isDragging, onClick, completed, text } = this.props;

    return connectDragSource(connectDropTarget(
        <div>
          <ListGroupItem
              onClick={onClick}
              style={{
            textDecoration: completed ? 'line-through' : 'none', opacity: isDragging ? 0.5 : 1, cursor: 'move'
          }}
          >
            {text}
          </ListGroupItem>
        </div>
    ))
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
////export  {DropTarget("Todo", todoTarget, collectTarget)(Todo);
//export default DragSource("Todo", todoSource, collectSource)(Todo);

