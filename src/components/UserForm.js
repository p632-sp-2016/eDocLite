import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Panel, PageHeader, Grid, ListGroupItem, ListGroup, Row, Col, Input, Button, Accordion } from 'react-bootstrap';
import AddComponent from '../containers/AddComponent';
import ToolBox from './ToolBox';
import styles from '../styles/styles.less';


@DragDropContext(HTML5Backend)
export default class UserForm extends Component {
    render() {
        return (

            <Grid fluid>
                <Row>
                    <Col xs={4} md={3}>
                      <Row>
                        <Accordion className={styles.sidepanelstyle}>
                            <Panel bsStyle="primary" collapsible defaultExpanded header="Drag Source" className={styles.panelstyle}>
                                <ToolBox />
                            </Panel>
                        </Accordion>
                      </Row>
                   </Col>
                   <Col xs={6} md={4} col-md-push-mdPush={5}>
                      <PageHeader>eDocLite</PageHeader>
                      <AddComponent />
                   </Col>
                </Row>
            </Grid>
        );
    }
}
