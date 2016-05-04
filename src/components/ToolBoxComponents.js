/**
 * Created by parikhv on 3/14/16.
 */
import React from 'react';
import { Row, FormControls, Input, Button, ButtonToolbar, Col } from 'react-bootstrap';


/**
 * This represents the column width options for form components
 */

const componentWidthOptions = ["1", "2", "3", "4","5","6","7","8","9","10","11","12"];
/**
 * This represents the default column width for all the form components
 */

const defaultComponentWidth = "5";

const props = {
    getComponentWidth : () => (
    {
        value: defaultComponentWidth,
        options: componentWidthOptions
    }
    ),
    getStyle : () => (
    {
        value: "default",
        options: ["default", "danger", "info", "primary", "success", "warning"]
    }
    ),
    getSize : () => (
    {
        value: "small",
        options: ["default", "large", "small", "xsmall"]
    }
    ),
    getAlignment : () => (
    {
        value: "Vertical",
        options: ["Vertical", "Horizontal"]
    }
    ),
    getOptions : (opts) => (
        opts.map((opt) => {
            return ({
                label: opt,
                value: opt
            })
        })
    )
};
/**
 * This function provides the TextLabel component for toolbox.
 */
export const TextLabel = (props) => {
    return (
        <div className="form-horizontal">
            {props.elements.map((obj, objKey) => {
                return (
                    <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
                        <FormControls.Static {...obj} key={objKey} labelClassName="col-md-2" wrapperClassName="col-md-8"/>
                    </Col>
                );
            })}
        </div>
    );
};

TextLabel.defaultProps = {
    name: "TextLabel",
    elements: [
        {
            label: "Label",
            value: "Sample label",
            ComponentWidth: props.getComponentWidth()
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
    name: "ButtonGroup",
    elements:
        [...Array(2)].map((opt,optKey) => {
            return  (
            {
                label: "Button"+optKey,
                bsStyle: props.getStyle(),
                bsSize: props.getSize()
            }
            );
        })
    ,
    selectedElement: 0
};

/**
 * This function provides the RadioButton group component for toolbox.
 */

export const RadioButton = (props) => {
    return (
        <div>
            {props.elements.map((obj, objKey) => {
                const selectedWrapperClassVal = obj.alignment.value;
                let numberOfOptions = obj.options.length;
                let wrapperClass = 7;
                if(selectedWrapperClassVal == 'Horizontal'){
                    wrapperClass = 12/numberOfOptions;
                }
                return (
                    <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
                        <Input key={objKey} label={obj.label}>
                            <Row key={objKey}>
                                {obj.options.map( (opt, optKey) => {
                                    return (
                                        <Col key={optKey} md={Number.parseInt(wrapperClass)}>
                                            <input type="radio" value={opt.value}{...obj} key={optKey} /> { opt.label }
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Input>
                    </Col>
                );
            })}

        </div>
    );
};

RadioButton.defaultProps = {
    name: "RadioButton",
    elements: [
        {
            name: "RadioButtonSet",
            label: "RadioButtonSet",
            options:props.getOptions(["Yes", "No"]),
            bsSize: props.getSize(),
            alignment: props.getAlignment(),
            ComponentWidth :props.getComponentWidth()
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
    name: "TextBox",
    elements: [
        {
            label: 'Text Box',
            placeholder: 'Some Text',
            bsSize: props.getSize(),
            ComponentWidth : props.getComponentWidth()
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
                        <Button bsStyle={obj.bsStyle.value} key={objKey} bsSize={obj.bsSize.value}>{obj.children}</Button>
                    </Col>
                );
            })}
        </div>
    );
};

Btn.defaultProps = {
    name: "Btn",
    elements: [
        {
            children: "Button",
            bsStyle: props.getStyle(),
            bsSize: props.getSize(),
            ComponentWidth :props.getComponentWidth()
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
    name: "TextArea",
    elements: [
        {
            name: "description",
            placeholder: "This is a description",
            label: "Text Area",
            bsSize: props.getSize(),
            ComponentWidth :props.getComponentWidth()
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
    name: "Dropdown",
    elements: [
        {
            label: "Dropdown Menu",
            options:props.getOptions(["A", "B", "C"]),
            bsSize: props.getSize(),
            ComponentWidth : props.getComponentWidth()
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
    name: "Link",
    elements: [
        {
            label: "Link",
            href: "http://www.google.com/",
            children: "Google",
            ComponentWidth :props.getComponentWidth()
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
            {props.elements.map((obj, objKey) => {
                const selectedWrapperClassVal = obj.alignment.value;
                let numberOfOptions = obj.options.length;
                let wrapperClass = 7;
                if(selectedWrapperClassVal == 'Horizontal'){
                    wrapperClass = 12/numberOfOptions;
                }
                return (
                    <Col md={Number.parseInt(obj.ComponentWidth.value)} key={objKey}>
                        <Input key={objKey} label={obj.label}>
                            <Row key={objKey}>
                                {obj.options.map( (opt, optKey) => {
                                    return (
                                        <Col key={optKey} md={Number.parseInt(wrapperClass)}>
                                            <input type="checkbox" value={opt.value} {...obj} key={optKey} /> {opt.label}
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Input>
                    </Col>
                );
            })}
        </div>
    );
};

Checkbox.defaultProps = {
    name: "Checkbox",
    elements: [
        {
            options : props.getOptions(["CB1", "CB2", "CB3"]),
            label : "Check Box",
            alignment: props.getAlignment(),
            ComponentWidth :props.getComponentWidth()
        }
    ],
    selectedElement: 0
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
                                return  (<option value={optKey+startYear}  key={optKey}>{optKey+startYear}</option>);
                            })}
                        </Input>
                    </Col>
                );
            })}
        </div>
    );
};

yearComponent.defaultProps = {
    name: "YearComponent",
    elements: [
        {
            label: "Year Menu",
            bsSize: props.getSize(),
            startYear: "2016",
            numberOfYears: "10",
            ComponentWidth : props.getComponentWidth()
        }
    ],
    selectedElement: 0
};
