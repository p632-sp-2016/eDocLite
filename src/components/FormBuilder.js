import React, { PropTypes, Component } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
import { Glyphicon, Grid, Row, Button, Col } from 'react-bootstrap';
import ComponentContainer from '../components/ComponentContainer';
import styles from '../styles/styles.less';
import ReactDOMServer from 'react-dom/server';


const boxTarget = {
  hover() {

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
    {this.props.onSelect(key);}
  }

  /**
   * This function deletes the clicked component from form builder.
   */
  remove(key){
    {this.props.onDelete(key);}
  }

  submitForm(components) {
    const componentArr = components.componentArray;

    let html = "";
    Object.keys(componentArr).map(key => {
        html += ReactDOMServer.renderToString(React.createElement(componentArr[key].component, componentArr[key].props));
    });
    console.log(html);
    this.props.onSubmitForm(html);
  }

  render() {

    const { canDrop, isOver, connectDropTarget, components } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
        <div>
          <Col style={{ padding: '20px'}}>
          <Row className={isActive? styles.dusbinstyle: styles.dusbinstyleover} style={{ padding: '40px'}}>
            {isActive ?
                'Release to drop' :
                'Drag a box here'
            }

            <form>
              {Object.keys(components.componentArray).map(key =>{
                    return(
                      <Row key={key} style={{ background: key == components.selectedComponent ? 'lightblue' : 'whitesmoke', padding: '5px'}}>
                        <Glyphicon glyph="remove" id="delete-button" onClick={this.remove.bind(this, key)} style={{float: "right", zIndex: '3'}} />

                        <Row key={key} onClick={this.handleSelect.bind(this, key)} >
                          <ComponentContainer component={components.componentArray[key]} key={key} />
                        </Row>
                      </Row>
                    );
                  }
              )}
              <Button onClick={this.submitForm.bind(this, components)} bsStyle="info"> Save Form </Button>
            </form>
          </Row>
          </Col>
        </div>
    );
  }
}

export default Dustbin;
