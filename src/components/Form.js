/**
 * Created by parikhv on 1/31/16.
 */


import React from 'react';
import styles from '../styles/styles.less';
import classNames from 'classnames';
import { ButtonGroup, DropdownButton, MenuItem, Jumbotron, Button, Input, Accordion, Panel, Nav, NavDropdown, Navbar, NavItem, NavbarBrand, NavbarHeader, NavbarCollapse, NavbarToggle} from 'react-bootstrap';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Form extends React.Component {


    constructor () {
        super();
        this.state = {
            username: ''
        };
    }

    shouldComponentUpdate() {
        return PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    handleClick() {
      //alert('Clicked');
      signInFormClass = classNames('input-group', 'pull-right');
    }

    render () {
        let signInFormClass = classNames('input-group');

        return <div className="container">

        <Navbar inverse fluid="true">
          <Navbar.Header>
           <Navbar.Brand>
             <a href="#">Home</a>
           </Navbar.Brand>
           <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
           <Nav>
             <NavItem eventKey={1} href="#">My Forms</NavItem>
             <NavItem eventKey={2} href="#">Account</NavItem>
             <NavDropdown eventKey={3} title="Actions" id="basic-nav-dropdown">
               <MenuItem eventKey={3.1}>Action 1</MenuItem>
               <MenuItem eventKey={3.2}>Action 2</MenuItem>
               <MenuItem eventKey={3.3}>Action 3</MenuItem>
               <MenuItem divider />
               <MenuItem eventKey={3.3}>Customize</MenuItem>
             </NavDropdown>
           </Nav>
           <Nav pullRight>
             <NavItem eventKey={1} href="#">Logout</NavItem>
           </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron>
           <h1>Welcome to eDocLite!</h1>
           <p>This is a simple web form builder application. Happy Building.</p>
           <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>

        <Accordion>
         <Panel header="Item 1" eventKey="1">
          Details of 1.
         </Panel>
         <Panel header="Item 2" eventKey="2">
          Details of 2.
         </Panel>
         <Panel header="Item 3" eventKey="3">
          Details of 3.
         </Panel>
        </Accordion>

        <ButtonGroup onClick={this.handleClick}>
          <Button bsStyle="default">Left</Button>
          <Button bsStyle="default">Right</Button>
        </ButtonGroup>

        <br></br>
        <br></br>

        <div className={signInFormClass}>
          <Input type="text" label="Username" name="username" placeholder="Enter Username..." addonAfter="@edl.com"/>
          <Button bsStyle="primary">Sign In</Button>
        </div>

        <br></br>
        <br></br>

        <h3>{this.state.username}</h3>
        </div>;
    }

    handleChange (e) {
        if (e.key === 'Enter') {
            //console.log(e.target.value);
            this.setState({username:e.target.value+"@edl.com"});
        }
    }
}

//Form.propTypes = {
//    state: React.PropTypes.object.isRequired
//};

module.exports =  Form;
