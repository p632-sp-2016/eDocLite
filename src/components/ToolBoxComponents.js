/**
 * Created by parikhv on 3/14/16.
 */
import React from 'react';
import { FormControls, Select, Input, Button, ButtonToolbar } from 'react-bootstrap';

/**
 * This function provides the TextLabel component for toolbox.
 */
export const TextLabel = (props) => {
   return (
     <div className="form-horizontal">
       <FormControls.Static {...props} wrapperClassName="col-md-8"/>
     </div>
   );
};

TextLabel.defaultProps = {
    value: "Sample label"
};

/**
 * This function provides the ButtonGroup component for toolbox.
 */
export const ButtonGroup = (props) => {
   return (
       <ButtonToolbar>
           {props.elements.map((obj, key) =>{
             return (<Button bsStyle={obj.bsStyle.value} bsSize={obj.bsSize.value} key={key}>{obj.label}</Button>)
           })}
       </ButtonToolbar>
   );
};

ButtonGroup.defaultProps = {
  elements: [
    {
      label: "Button1",
      bsStyle: {
        value: "default",
        options: ["default", "danger", "info", "primary", "success", "warning"]
      },
      bsSize: {
        value: "small",
        options: ["default", "large", "small", "xsmall"]
      }
    },
    {
      label: "Button2",
      bsStyle: {
        value: "danger",
        options: ["default", "danger", "info", "primary", "success", "warning"]
      },
      bsSize: {
        value: "large",
        options: ["default", "large", "small", "xsmall"]
      }
    }
 ]
};

/**
 * This function provides the Radio buttons component for toolbox.
 */
// export const RadioButton = (props) => {
//    return (
//      <div>
//         <Input type="radio" name="radioButtonSet" label={props.label_1} {...props} />
//         <Input type="radio" name="radioButtonSet" label={props.label_2} {...props} />
//      </div>
//    );
// };

export const RadioButton = (props) => {
   return (
     <div>
        <Input label="Radio" {...props}>
          <div><label><input type="radio" {...props}/> {props.label_1}</label></div>
          <div><label><input type="radio" {...props}/> {props.label_2}</label></div>
        </Input>
     </div>
   );
};

RadioButton.defaultProps = {
    label: "Radio",
    label_1: "Option1",
    label_2: "Option2",
    name: ""
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
        <option value={props.label_1}>{props.label_1}</option>
        <option value={props.label_2}>{props.label_2}</option>
        <option value={props.label_3}>{props.label_3}</option>
      </Input>
    );
};

Dropdown.defaultProps = {
  label: "Dropdown Menu",
  label_1: "Drop 1",
  label_2: "Drop 2",
  label_3: "Drop 3",
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
