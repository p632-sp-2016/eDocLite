import React, { PropTypes, Component } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
import { Grid, Col } from 'react-bootstrap';
import ComponentContainer from '../components/ComponentContainer'
import styles from '../styles/styles.less';
import classNames from 'classnames';
import { selectComponent } from '../actions'
import UserForm from './UserForm'

const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left'
};
const st = {
  background : 'blue'
};
const boxTarget = {
  hover(props, monitor) {

  },
  canDrop() {
    return true;
  },
  drop(targetProps, monitor) {
    targetProps.onDragMove(monitor.getItem().component);
  }

};

/**
 * Dustbin
 */
@DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
export default class Dustbin extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    onDragMove: PropTypes.func.isRequired
  };

  handleSelect (key) {
      {this.props.onSelect(key)}
  };

  render() {

    const dustbinst = {
      background: 'green'
    };

    const { canDrop, isOver, connectDropTarget, components } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div>
        <Grid className={isActive? styles.dusbinstyle: styles.dusbinstyleover}>
          {isActive ?
            'Release to drop' :
            'Drag a box here'
          }

          <form>
            {Object.keys(components).map(key =>
              <Grid onClick={this.handleSelect.bind(this, key)} key={key}>
                <ComponentContainer component={components[key]} />
              </Grid>
            )}
          </form>
        </Grid>
      </div>
  );
  }
}

export default Dustbin;
