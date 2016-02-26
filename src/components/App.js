import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {Panel} from 'react-bootstrap';

const App = () => (
  <div className="container">
  <Panel header="Todo Box" bsStyle="info">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Panel>
  </div>
)

export default App
