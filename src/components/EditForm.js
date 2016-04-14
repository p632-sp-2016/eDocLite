/**
 * Created by parikhv on 4/1/16.
 */
import React, {  PropTypes, Component } from 'react';
import { Input, Button, ButtonToolbar} from 'react-bootstrap';
import {reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { editComponent, selectComponent } from '../actions';
import TagEditor from './TagEditor';
import * as ToolBoxComponents from './ToolBoxComponents';
import ComponentContainer from './ComponentContainer';
import EditList from './EditList';

/**
 * This class represents the editor panel redux form that is dynamically generated using component properties
 */
class EditForm extends Component {

    handleCancel = () => {
        this.props.dispatch(selectComponent(-1));
    };

    render() {
        const {fields, handleSubmit, dispatch, resetForm, selectedComponent, selectedElement} = this.props;

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
                                    {
                                        (name === 'options') ?
                                            <TagEditor fields={['tags', 'val','label']}
                                                       initialTags={fields[name].initialValue}/>
                                            :
                                            (name == 'bsSize' || name == 'bsStyle' || name == 'ComponentWidth' || name == 'alignment') ?

                                                <EditList { ...fields[name] } options={fields[name].initialValue.options} name={name} value={fields[name].initialValue.value} />
                                                :
                                                <Input type="text" label={name} {...fields[name]} />
                                    }

                                </div>
                            );
                        })}


                        <ButtonToolbar>
                            <Button type="submit" bsStyle="info">Save</Button>
                            <Button type="button" bsStyle="danger" onClick={this.handleCancel.bind(this)}>Cancel</Button>
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
