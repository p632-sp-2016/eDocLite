/**
 * Created by parikhv on 4/1/16.
 */
import React, {  PropTypes, Component } from 'react';
import { Input, Button, ButtonToolbar} from 'react-bootstrap';
import {reduxForm} from 'redux-form';
import { editComponent } from '../actions';
import * as ToolBoxComponents from './ToolBoxComponents';
import ComponentContainer from './ComponentContainer';

/**
 * This class represents the editor panel redux form that is dynamically generated using component properties
 */
export default class EditForm extends Component {
    render() {
        const {fields, handleSubmit, dispatch, resetForm, selectedComponent, selectedElement} = this.props;
        console.log("VRAJ", fields);
        if(selectedComponent != undefined){

            return (

                <div>
                    <form onSubmit={handleSubmit(data => {
                        dispatch(editComponent(selectedComponent, selectedElement, data));
                        resetForm();
                    })}
                    >

                        {Object.keys(fields).map(name => {
                            return (
                                <div key={name}>
                                {name == 'bsSize'?
                                    <Input type="select" label={name} placeholder={fields[name].defaultValue} {...fields[name]}>
                                      <option value="">Default</option>
                                      <option value="large">Large</option>
                                      <option value="small">Small</option>
                                      <option value="xsmall">X-Small</option>
                                    </Input>:
                                    name.startsWith('bsStyle')?
                                        <Input type="select" label={name} placeholder={fields[name].defaultValue} {...fields[name]}>
                                          <option value="default">Default</option>
                                          <option value="danger">Danger</option>
                                          <option value="info">Info</option>
                                          <option value="primary">Primary</option>
                                          <option value="success">Success</option>
                                          <option value="warning">Warning</option>
                                        </Input>:
                                        <Input type="text" label={name} placeholder={fields[name].defaultValue} {...fields[name]} />
                                }
                                </div>
                            );
                        })}


                        <ButtonToolbar>
                            <Button type="submit" bsStyle="info">Save</Button>
                            <Button type="button" bsStyle="danger">Cancel</Button>
                        </ButtonToolbar>
                    </form>
                </div>
            );
        } else {
            return(<div />);
        }
    }
}

EditForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
};

EditForm = reduxForm({
        form: 'simple'
    },
    // Initializes the state of the form to the initial value of the component properties
    state => {
        const id = state.components.selectedComponent;
        const selectedElement = state.components.componentArray[id].props.selectedElement;

        if (id == null)
            return {};

        return {
            initialValues: state.components.componentArray[id].props.elements[selectedElement]
        };
    }
)(EditForm);


export default EditForm;
