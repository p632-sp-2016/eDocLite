/**
 * Created by parikhv on 4/1/16.
 */
import React, {  PropTypes, Component } from 'react';
import { Input, Button, ButtonToolbar} from 'react-bootstrap';
import {reduxForm} from 'redux-form';
import ComponentContainer from '../components/ComponentContainer'
import { connect } from 'react-redux'
import { editComponent } from '../actions'

/**
 * This class represents the editor panel redux form that is dynamically generated using component properties
 */
export default class EditForm extends Component {

    render() {
        const {fields, handleSubmit, dispatch, resetForm, selectedComponent } = this.props;

        if(selectedComponent != undefined){

            return (

                <div>
                    <form onSubmit={handleSubmit(data => {
                        dispatch(editComponent(selectedComponent, data));
                        resetForm();
                    })}
                    >

                        {Object.keys(fields).map(name => {
                            const value = fields[name];
                            return (
                                <div key={name}>
                                    <Input type="text" label={name} placeholder={fields[name].defaultValue} {...fields[name]} />
                                </div>
                            )
                        })}


                        <ButtonToolbar>
                            <Button type="submit" bsStyle="info">Save</Button>
                            <Button type="button" bsStyle="danger">Cancel</Button>
                        </ButtonToolbar>
                    </form>
                </div>
            );
        } else {
            return(<div />)
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

        if (id == null)
            return {};

        return {
            initialValues: state.components.componentArray[id].props
        }
    }
)(EditForm);


export default EditForm;
