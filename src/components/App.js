import React from 'react'
import UserForm from './UserForm'
import { Grid, Row, Col} from 'react-bootstrap';
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
