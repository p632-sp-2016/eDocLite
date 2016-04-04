import React from 'react';
import UserForm from './UserForm';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class App extends React.Component {
    render() {
        return (
            <UserForm />
        );
    }
}
