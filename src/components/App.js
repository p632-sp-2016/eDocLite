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
            <UserForm />

        );
    }
}
