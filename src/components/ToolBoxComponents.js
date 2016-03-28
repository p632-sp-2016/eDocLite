/**
 * Created by parikhv on 3/14/16.
 */
import React, { PropTypes } from 'react';
import { Input, Button, ButtonToolbar } from 'react-bootstrap';

/**
 *
 */
export const CP_ButtonGroup = () => {
   return (
       <ButtonToolbar>
           <Button bsStyle="primary" label="Button1">Button1</Button>
           <Button bsStyle="primary" label="Button2">Button2</Button>
           <Button bsStyle="primary" label="Button3">Button3</Button>
       </ButtonToolbar>
   )
};

/**
 *
 */
export const CP_Radio = () => {
   return (
     <div>
        <Input wrapperClassName="col-sm-offset-2 col-sm-2" defaultChecked />
        <Input wrapperClassName="col-sm-offset-2 col-sm-2" label="Input2" />
      </div>
   )
};

CP_Radio.defaultProps = {
  type: "radio",
  name: "radioButtonSet",
  label: "Input1"
};

/**
 *
 */
export const CP_TextBox = (props) => {
  return(
      <Input {...props} />
  )
};

CP_TextBox.defaultProps = {
  type: 'text',
  label: 'Text Box',
  placeholder: 'Some Text'
};

/**
 *
 */
export const CP_Button = () => {
    return (
         <Button bsStyle= "primary">Button</Button>
    )
};

CP_Button.defaultProps = {
  label: "Button"
};

/**
 *
 */
export const CP_TextArea = (props) => {
    return (
         <Input {...props}/>
    )
};

CP_TextArea.defaultProps = {
  type: "textarea",
  name: "description",
  placeholder: "This is a description",
  label: "Text Area"
};

/**
 *
 */
export const CP_Dropdown = () => {
    return (
      <Input type="select" label="DropDown_Menu">
        <option value="A">DropDown_A</option>
        <option value="B">DropDown_B</option>
        <option value="C">DropDown_C</option>
      </Input>
    )
};

/**
 *
 */
export const CP_Link = () => {
    return (
      <a>Google</a>
    )
};

CP_Link.defaultProps = {
  href: "http://www.google.com/",
  label: "Google"
};
