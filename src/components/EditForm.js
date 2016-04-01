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

      if(selectedComponent != undefined){

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
                        {component.props.label != undefined ?
                          <div>
                            <Input type="text" label="Label" {...label} placeholder={component.props.label} />
                          </div>:''
                        }

                        {component.props.children != undefined ?
                          <div>
                            <Input type="text" label="Label" {...children} placeholder={component.props.children} />
                          </div>:''
                        }

                        {component.props.placeholder != undefined ?
                          <div>
                            <Input type="text" label="Placeholder" {...placeholder} placeholder={component.props.placeholder} />
                          </div>:''
                        }

                        {component.props.href != undefined ?
                          <div>
                            <Input type="text" label="Link" {...href} placeholder={component.props.href} />
                          </div>:''
                        }

                        <ButtonToolbar>
                          <Button type="submit" bsStyle="info">Save</Button>
                          <Button type="button" bsStyle="danger">Cancel</Button>
                        </ButtonToolbar>
                    </div>:''
                  }

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
    form: 'simple',
    fields: ['label', 'placeholder', 'href', 'children']
})(EditForm);

const mapStateToProps = (state) => {
    if(state.components.selectedComponent != undefined){
      return {
        component: state.components.componentArray[state.components.selectedComponent],
        selectedComponent : state.components.selectedComponent
      }
    }else{
      return {}
    }
};

EditForm = connect(mapStateToProps)(EditForm);

export default EditForm;
