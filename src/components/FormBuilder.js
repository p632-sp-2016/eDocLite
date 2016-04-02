import React, { PropTypes, Component } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
import { Button, Glyphicon, Grid, Col, Row } from 'react-bootstrap';
import ComponentContainer from '../components/ComponentContainer'
import styles from '../styles/styles.less';

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
 * This class represents the form being built. It acts as a drop target for various form components.
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

  /**
   * This function handles the SELECT_COMPONENT action. It facilitates editing component props.
   */
  handleSelect (key) {
    {this.props.onSelect(key)}

  };

  /**
   * This function deletes the clicked component from form builder.
   */
  remove(key){
    {this.props.onDelete(key)}
  };

  render() {

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
              {Object.keys(components.componentArray).map(key =>{
                    return(
                        <Row  key={key} onClick={this.handleSelect.bind(this, key)} style={{ background: key == components.selectedComponent ? 'lightblue' : 'whitesmoke', padding: '5px'}}>
                          <Glyphicon glyph="remove" id="delete-button" onClick={this.remove.bind(this, key)} style={{float: "right"}} />
                          <ComponentContainer component={components.componentArray[key]} key={key} />
                        </Row>
                    )
                  }
              )}
            </form>
          </Grid>
        </div>
    );
  }
}

export default Dustbin;
