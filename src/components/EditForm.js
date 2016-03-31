import React, {  PropTypes, Component } from 'react';
import { Panel, Grid, Row, Col, Input, Button, ButtonToolbar} from 'react-bootstrap';
import styles from '../styles/styles.less';
import {reduxForm} from 'redux-form';
import ComponentContainer from '../components/ComponentContainer'
import { connect } from 'react-redux'
import { editComponent } from '../actions'

/**
 * This class represents the editor panel redux form. It allows the user to modify properties of selected component.
 */
export default class EditForm extends Component {
    
    render() {
      const {fields: {button, label, placeholder, href, children}, handleSubmit, dispatch, resetForm, component, selectedComponent } = this.props;

        return (

              <div>
              <form onSubmit={handleSubmit(data => {
                if(data.label != undefined || data.children != undefined){
                  dispatch(editComponent(selectedComponent, data));
                }
                resetForm();
              })}>

              {component != undefined?

                      <div>
                        {component.component.defaultProps.label != undefined ?
                          <div>
                            <Input type="text" label="Label" {...label} placeholder={component.component.defaultProps.label} />
                          </div>:''
                        }

                        {component.component.defaultProps.children != undefined ?
                          <div>
                            <Input type="text" label="Label" {...children} placeholder={component.component.defaultProps.children} />
                          </div>:''
                        }

                        {component.component.defaultProps.placeholder != undefined ?
                          <div>
                            <Input type="text" label="Placeholder" {...placeholder} placeholder={component.component.defaultProps.placeholder} />
                          </div>:''
                        }

                        {component.component.defaultProps.href != undefined ?
                          <div>
                            <Input type="text" label="Link" {...href} placeholder={component.component.defaultProps.href} />
                          </div>:''
                        }
                    </div>:''
                  }
                  <ButtonToolbar>
                    <Button type="submit" bsStyle="info">Save</Button>
                    <Button type="button" bsStyle="danger">Cancel</Button>
                  </ButtonToolbar>
                  </form>
              </div>
        );
    }
}

EditForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
};

EditForm = reduxForm({
    form: 'simple',
    fields: ['label', 'placeholder', 'href', 'children']
})(EditForm);

const mapStateToProps = (state) => {

    if(state.components.selectedComponent != undefined){
      return {
        component: state.components[state.components.selectedComponent.id],
        selectedComponent : state.components.selectedComponent
      }
    }else{
      return {}
    }
};

EditForm = connect(mapStateToProps)(EditForm);

export default EditForm;
