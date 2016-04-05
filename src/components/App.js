import React from 'react';
import UserForm from './UserForm';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
/**
* 
* This class is the entry point for the form builder application
*/
export default class App extends React.Component {
    render() {
        return (
            <UserForm />
        );
    }
}
