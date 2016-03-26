/**
 * Created by parikhv on 3/14/16.
 */
import React from 'react';
import { Input, Button,  ButtonToolbar } from 'react-bootstrap';

export const CP_ButtonGroup = () => {
   return (
       <ButtonToolbar>
           <Button bsStyle="primary" label="Button1">Button1</Button>
           <Button bsStyle="primary" label="Button2">Button2</Button>
           <Button bsStyle="primary" label="Button3">Button3</Button>
       </ButtonToolbar>
   )
};

export const CP_Radio = () => {
   return (
     <div>
        <Input type="radio" name="radioButtonSet" wrapperClassName="col-sm-offset-2 col-sm-2" label="Input1" defaultChecked />
        <Input type="radio" name="radioButtonSet" wrapperClassName="col-sm-offset-2 col-sm-2" label="Input2" />
      </div>
   )
};

export const CP_TextBox = () => {
    return (
        <Input type="text" label="Text Box"/>
    )
};

export const CP_Button = () => {
    return (
         <Button bsStyle="primary" label="Button">Button</Button>

    )
};

export const CP_TextArea = () => {
    return (
         <Input type="textarea" name="description" value="This is a description" label="Text Area" />
    )
};


export const CP_Dropdown = () => {
    return (
      <Input type="select" label="DropDown_Menu">
        <option value="A">DropDown_A</option>
        <option value="B">DropDown_B</option>
        <option value="C">DropDown_C</option>
      </Input>

    )
};

export const CP_Link = () => {
    return (

      //  <a  bsStyle="primary" href="http://localhost:3000/">localhost</a>
      <a href="http://www.google.com/">Google</a>
    )
};
