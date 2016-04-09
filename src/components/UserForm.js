import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Panel, PageHeader, Grid, Row, Col, Accordion } from 'react-bootstrap';
import AddComponent from '../containers/AddComponent';
import ToolBox from './ToolBox';
import styles from '../styles/styles.less';
import EditFormContainer from './EditFormContainer';

/**
 * This class represents the main UI container for form builder application. It holds component toolbox, editor panel and builder form.
 */
@DragDropContext(HTML5Backend)
export default class UserForm extends Component {

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={6} md={3}>
                      <Row>
                        <Accordion className={styles.sidepanelstyle}>
                            <Panel bsStyle="primary" collapsible defaultExpanded header="Drag Source" className={styles.panelstyle}>
                                <ToolBox />
                            </Panel>
                            <Panel bsStyle="primary" collapsible defaultExpanded header="Edit Element" className={styles.panelstyle}>
                                <EditFormContainer />
                            </Panel>
                        </Accordion>
                      </Row>
                   </Col>
                   <Col xs={11} md={8}>
                      <PageHeader>eDocLite</PageHeader>
                      <AddComponent />
                   </Col>
                </Row>
            </Grid>
        );
    }
}

export default UserForm;
