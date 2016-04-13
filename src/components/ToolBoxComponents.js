/**
 * Created by parikhv on 3/14/16.
 */
import React from 'react';
import { FormControls, Select, Input, Button, ButtonToolbar,Label,Col } from 'react-bootstrap';


/**
 * This represents the column width options for form components
 */

const componentWidthOptions = ["1", "2", "3", "4","5","6","7","8","9","10","11","12"];
/**
 * This represents the default column width for all the form components
 */

const defaultComponentWidth = "5"
/**
 * This function provides the TextLabel component for toolbox.
 */
export const TextLabel = (props) => {
    return (
        <div className="form-horizontal">
            {props.elements.map((obj, objKey) => {
                return (
                <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
                <FormControls.Static {...obj} key={objKey} wrapperClassName="col-md-8"/>
                </Col>
                );
            })}
        </div>
    );
};

TextLabel.defaultProps = {
    elements: [
        {
            label: "Label",
            value: "Sample label",
            ComponentWidth :{
                value: defaultComponentWidth,
                options: componentWidthOptions
            }
        }
    ],
    selectedElement: 0
};

/**
 * This function provides the ButtonGroup component for toolbox.
 */
export const ButtonGroup = (props) => {
    return (
        <ButtonToolbar>
            {props.elements.map((obj, objKey) =>{
                return (
                       <Button bsStyle={obj.bsStyle.value} bsSize={obj.bsSize.value} key={objKey}>{obj.label}</Button>
                      );
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
    ],
    selectedElement: 0
};

export const RadioButton = (props) => {
    return (
        <div>
            {props.elements.map( (obj, objKey) => {
                return(
                  <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
                    <Input key={objKey} label={obj.label}>
                        {obj.options.map( (opt, optKey) => {
                            return (
                              <div key={optKey}>
                                <label key={optKey}>
                                  <input type="radio" value={opt.value}{...obj} key={optKey} /> { opt.label }
                                </label>
                              </div>
                            );
                        })}
                   </Input>
                  </Col>
                );
            })}

        </div>
    );
};

RadioButton.defaultProps = {
    elements: [
        {
            name: "RadioButtonSet",
            label: "RadioButtonSet",
            options:[
                {
                  label:"A",
                  value:"AA"
                },
                {
                  label:"B",
                   value:"BB"
                },
                {
                   label:"C",
                   value:"CC"
                }
            ],
            bsSize: {
                value: "large",
                options: ["default", "large", "small", "xsmall"]
            },
            wrapperClassName:"col-sm-offset-2 col-sm-2",
            ComponentWidth :{
                value: defaultComponentWidth,
                options: componentWidthOptions
            }
        }
    ],
    selectedElement: 0

};

/**
 * This function provides the text box component for toolbox.
 */
 export const TextBox = (props) => {
     return(
         <div>
             {props.elements.map( (obj, objKey) => {

                 return(
                   <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
                   <Input type='text' {...obj} bsSize={obj.bsSize.value} key={objKey} />
                   </Col>
               );
             })}
           </div>
     );
 };

 TextBox.defaultProps = {
     elements: [
         {
             label: 'Text Box',
             placeholder: 'Some Text',
             bsSize: {
                 value: "medium",
                 options: ["default", "large", "medium", "small"]
             },
             ComponentWidth :{
                 value: defaultComponentWidth,
                 options: componentWidthOptions
             },
         }
     ],

     selectedElement: 0

 };

/**
 * This function provides the Button component for toolbox.
 */
export const Btn = (props) => {
    return (
        <div>
            {props.elements.map( (obj, objKey) => {
                return (
                  <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
                  <Button bsStyle={obj.bsStyle.value} key={objKey} > {obj.children} </Button>
                  </Col>
                );
            })}
        </div>
    );
};

Btn.defaultProps = {
    elements: [
        {
            children: "Button",
            bsStyle: {
                value: "default",
                options: ["default", "danger", "info", "primary", "success", "warning"]
            },
            bsSize: {
                value: "small",
                options: ["default", "large", "small", "xsmall"]
            },
            ComponentWidth :{
                value: defaultComponentWidth,
                options: componentWidthOptions
            }
        }
    ],
    selectedElement: 0

};

/**
 * This function provides the text area component for toolbox.
 */
export const TextArea = (props) => {
    return (
        <div>
            {props.elements.map( (obj, objKey) => {
                return (
                     <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
                     <Input type="textarea" {...obj} key={objKey} bsSize={obj.bsSize.value}/>
                     </Col>);
            })}
        </div>

    );
};

TextArea.defaultProps = {
    elements: [
        {
            name: "description",
            placeholder: "This is a description",
            label: "Text Area",
            bsSize: {
                value: "default",
                options: ["default", "large", "medium", "small"]
            },
            ComponentWidth :{
                value: defaultComponentWidth,
                options: componentWidthOptions
            }

        }
    ],
    selectedElement: 0
};

/**
 * This function provides the drop down component for toolbox.
 */
export const Dropdown = (props) => {
    return (
        <div>
            {props.elements.map( (obj, objKey) => {
                return (
                  <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
                  <Input type="select" {...obj} key={objKey} bsSize={obj.bsSize.value}>
                    {obj.options.map((opt,optKey) => {
                        return  (<option value={opt.value} key={optKey}>{opt.label}</option>);
                    })}
                  </Input>
                  </Col>
              );
            })}
        </div>

    );
};

Dropdown.defaultProps = {
    elements: [
        {
            label: "Dropdown Menu",
            options:[
                {
                  label:"A",
                  value:"AA"
                },
                {
                  label:"B",
                   value:"BB"
                },
                {
                   label:"C",
                   value:"CC"
                }
            ],
            bsSize: {
                value: "medium",
                options: ["default", "large", "medium", "small"]
            },
            ComponentWidth :{
                value: defaultComponentWidth,
                options: componentWidthOptions
            }

        }
    ],
    selectedElement: 0
};

/**
 * This function provides the navigation link component for toolbox.
 */
export const Link = (props) => {
    return (
    <div>
        {props.elements.map( (obj, objKey) => {
            return(
              <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
              <a {...obj} key={objKey} />
              </Col>
                );
        })}
    </div>
);
};

Link.defaultProps = {
    elements: [
        {
            label: "Link",
            href: "http://www.google.com/",
            children: "Google",
            ComponentWidth :{
                value: defaultComponentWidth,
                options: componentWidthOptions
            }
        }
    ],
    selectedElement: 0

};

/**
 * This function provides the checkbox component for toolbox.
 */

export const Checkbox = (props) => {

    return (
    <div>
        {props.elements.map( (obj, objKey) => {

            return (
                    <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
                    <Input key={objKey}>
                      <h3><Label>{obj.textLabel}</Label></h3>
                          {obj.options.map( (opt, optKey) => {
                              return <div key={optKey}><Input type="checkbox"  {...obj}  label={opt.label} value={opt.value} checked readOnly /></div>
                           })}
                    </Input>
                    </Col>
            );
        })}

    </div>
  )
}

Checkbox.defaultProps = {
  elements: [
      {
        options:[
            {
              label:"Checkbox1",
              value:"AA"
            },
            {
              label:"Checkbox2",
               value:"BB"
            },
            {
               label:"Checkbox3",
               value:"CC"
            }
        ],
        textLabel : "CheckboxLabel",
        ComponentWidth :{
            value: defaultComponentWidth,
            options: componentWidthOptions
        }
      }
  ],
  selectedElement: 0,
};


/**
 * This function provides the year component for toolbox.
 */
export const yearComponent = (props) => {


return (
    <div>
        {props.elements.map( (obj, objKey) => {
            let startYear = Number.parseInt(obj.startYear);
            let numberOfYears = Number.parseInt(obj.numberOfYears);
            return (
                <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
                <Input type="select" {...obj} bsSize={obj.bsSize.value} key={objKey}>
                    {[...Array(numberOfYears)].map((opt,optKey) => {
                        return  (<option value={optKey+startYear}  key={optKey}>{optKey+startYear}</option>)
                    })}
                </Input>
                </Col>
            );
        })}
    </div>
  )
};

yearComponent.defaultProps = {
    elements: [
        {
            label: "Year Menu",
            bsSize: {
                value: "medium",
                options: ["default", "large", "small", "xsmall"]
            },
            startYear: "2016",
            numberOfYears: "10",
            ComponentWidth :{
                value: defaultComponentWidth,
                options: componentWidthOptions
            }
        }
    ],
    selectedElement: 0
};
