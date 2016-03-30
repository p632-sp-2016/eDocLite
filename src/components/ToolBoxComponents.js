/**
 * Created by parikhv on 3/14/16.
 */
import React, { PropTypes } from 'react';
import { Input, Button, ButtonToolbar } from 'react-bootstrap';

/**
 *
 */
export const CP_ButtonGroup = (props) => {
   return (
       <ButtonToolbar>
           <Button {...props} label="Button1">Button1</Button>
           <Button {...props} label="Button2">Button2</Button>
           <Button {...props} label="Button3">Button3</Button>
       </ButtonToolbar>
   )
};

CP_ButtonGroup.defaultProps = {
  bsStyle: "primary",
};

/**
 *
 */
export const CP_Radio = (props) => {
   return (
     <div>
        <Input wrapperClassName="col-sm-offset-2 col-sm-2" label= "Input1" defaultChecked />
        <Input wrapperClassName="col-sm-offset-2 col-sm-2" label="Input2" />
      </div>
   )
};

CP_Radio.defaultProps = {
  type: "radio",
  name: "radioButtonSet"
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
export const CP_Button = (props) => {
    return (
         <Button {...props} />
    )
};

CP_Button.defaultProps = {
  children: "Button",
  bsStyle: "primary"
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
export const CP_Dropdown = (props) => {
    return (
      <Input {...props}>
        <option value="A">DropDown_A</option>
        <option value="B">DropDown_B</option>
        <option value="C">DropDown_C</option>
      </Input>
    )
};

CP_Dropdown.defaultProps = {
  type: "select",
  label: "Dropdown Menu"
};

/**
 *
 */
export const CP_Link = (props) => {
    return (
      <a {...props} />
    )
};

CP_Link.defaultProps = {
  href: "http://www.google.com/",
  children: "Google"
};
