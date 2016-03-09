import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import UserForm from './UserForm'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Panel, PageHeader, Grid, ListGroupItem, ListGroup, Row, Col} from 'react-bootstrap';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import styles from '../styles/styles.less';

@DragDropContext(HTML5Backend)
export default class App extends React.Component {
    render() {
        return (
            // <Grid>
            //     <PageHeader>
            //     eDocLite   <small>Simple TODO Application</small>
            //     </PageHeader>
            //     <Panel header="Todo Box" bsStyle="info">
            //         <AddTodo/>
            //         <VisibleTodoList />
            //         <Footer />
            //     </Panel>
            // </Grid>,
            // <Grid>
            //   <Row>
            //     <Col xs={6} md={4}>
            //     <Panel bsStyle="warning" collapsible defaultExpanded header="Drag Source">
            //      <AddTodo/>
            //       <VisibleTodoList />
            //     </Panel>
            //     </Col>
            //     <Col xs={10} md={6}>
            //     <Panel header="Drop Form" bsStyle="warning">
            //     <UserForm />
            //     </Panel>
            //     </Col>
            //   </Row>
            // </Grid>
<UserForm />

        );
    }
}
