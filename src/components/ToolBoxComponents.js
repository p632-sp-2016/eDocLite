/**
 * Created by parikhv on 3/14/16.
 */
import React from 'react';
import { Input, Button, ButtonToolbar } from 'react-bootstrap';

/**
 * This function provides the ButtonGroup component for toolbox.
 */
export const ButtonGroup = (props) => {
   return (
       <ButtonToolbar>
           <Button {...props} label="Button1">Button1</Button>
           <Button {...props} label="Button2">Button2</Button>
           <Button {...props} label="Button3">Button3</Button>
       </ButtonToolbar>
   );
};

ButtonGroup.defaultProps = {
    children: "Button",
    bsStyle: "primary",
    bsSize:""
};

/**
 * This function provides the Radio buttons component for toolbox.
 */
export const RadioButton = () => {
   return (
     <div>
        <Input wrapperClassName="col-sm-offset-2 col-sm-2" label= "Input1" defaultChecked />
        <Input wrapperClassName="col-sm-offset-2 col-sm-2" label="Input2" />
      </div>
   );
};

RadioButton.defaultProps = {
  type: "radio",
  name: "radioButtonSet"
};

/**
 * This function provides the text box component for toolbox.
 */
export const TextBox = (props) => {
  return(
      <Input type='text' {...props} />
  );
};

TextBox.defaultProps = {
  label: 'Text Box',
  placeholder: 'Some Text',
  bsSize:""
};

/**
 * This function provides the Button component for toolbox.
 */
export const Btn = (props) => {
    return (
         <Button {...props} />
    );
};

Btn.defaultProps = {
  children: "Button",
  bsStyle: "primary",
  bsSize: ""
};

/**
 * This function provides the text area component for toolbox.
 */
export const TextArea = (props) => {
    return (
         <Input type="textarea" {...props}/>
    );
};

TextArea.defaultProps = {
  name: "description",
  placeholder: "This is a description",
  label: "Text Area",
  bsSize:""
};

/**
 * This function provides the drop down component for toolbox.
 */
export const Dropdown = (props) => {
    return (
      <Input type="select" {...props}>
        <option value="A">DropDown_A</option>
        <option value="B">DropDown_B</option>
        <option value="C">DropDown_C</option>
      </Input>
    );
};

Dropdown.defaultProps = {
  label: "Dropdown Menu",
  bsSize:""
};

/**
 * This function provides the navigation link component for toolbox.
 */
export const Link = (props) => {
    return (
      <a {...props} />
    );
};

Link.defaultProps = {
  href: "http://www.google.com/",
  children: "Google"
};
