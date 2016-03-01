import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Panel, PageHeader, Grid } from 'react-bootstrap';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class App extends React.Component {
    render() {
        return (
            <Grid>
                <PageHeader>
                eDocLite   <small>Simple TODO Application</small>
                </PageHeader>
                <Panel header="Todo Box" bsStyle="info">
                    <AddTodo todo_text=""/>
                    <VisibleTodoList />
                    <Footer />
                </Panel>
            </Grid>
        );
    }
}

