import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Panel, PageHeader, Grid, ListGroupItem, ListGroup, Row, Col} from 'react-bootstrap';
import Dustbin from './Dustbin';
import Box from './Box';
import styles from '../styles/styles.less';

@DragDropContext(HTML5Backend)
export default class UserForm extends Component {
  render() {
    return (
      // <div>
      //   <div style={{ overflow: 'hidden', clear: 'both' }}>
      //     <Dustbin />
      //   </div>
      //   <div style={{ overflow: 'hidden', clear: 'both' }}>
      //     <Box name='Glass' />
      //     <Box name='Banana' />
      //     <Box name='Paper' />
      //   </div>
      // </div>,
      <Grid>
        <Row>
          <Col xs={8} md={6}>
          <Panel bsStyle="primary" collapsible defaultExpanded header="Drag Source" className={styles.panelstyle}>
          <Box name='Text Input'/>
          <Box name='Dropdown' />
          <Box name='Button' />
          </Panel>
          </Col>
          <Col xs={10} md={6}>
          <Panel header="Drop Form" bsStyle="primary">
          <Dustbin />
          </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
