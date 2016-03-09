import React, { PropTypes } from 'react'
import { ListGroupItem } from 'react-bootstrap';
import { DragSource, DropTarget } from 'react-dnd';
import { DragDrop } from '../constants';

const builderComponentSource = {
  beginDrag(sourceProps) {
    return sourceProps;
  }
};

const builderComponentTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if(sourceId !== targetId) {
      targetProps.onDragMove(sourceProps, targetProps);
    }
  }
};

@DragSource(DragDrop.item, builderComponentSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
// @DropTarget(DragDrop.item, builderComponentTarget, (connect) => ({
//   connectDropTarget: connect.dropTarget()
// }))

class BuilderComponents extends React.Component {
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
          text1
        </ListGroupItem>
        <ListGroupItem
            onClick={onClick}
            style={{
          textDecoration: completed ? 'line-through' : 'none', opacity: isDragging ? 0.5 : 1, cursor: 'move'
        }}
        >
          text2
        </ListGroupItem>
        </div>
    ))
  }
}

BuilderComponents.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default BuilderComponents;
////export  {DropTarget("Todo", todoTarget, collectTarget)(Todo);
//export default DragSource("Todo", todoSource, collectSource)(Todo);
