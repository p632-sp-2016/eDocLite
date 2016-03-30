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
      const {fields: {button, label, placeholder, href, children}, handleSubmit, dispatch, resetForm, components } = this.props;

      let id = undefined;
      if(components.selectedComponent != undefined){
          id = components.selectedComponent.id;
      }
        return (
              <div>
              <form onSubmit={handleSubmit(data => {
                  dispatch(editComponent(id, data));
              })}>
                    {id != undefined ?
                      <div>
                        {components[id].component.defaultProps.label != undefined ?
                          <div>
                            <Input type="text" label="Label" {...label} placeholder={components[id].component.defaultProps.label} />
                          </div>:''
                        }

                        {components[id].component.defaultProps.children != undefined ?
                          <div>
                            <Input type="text" label="Label" {...children} placeholder={components[id].component.defaultProps.children} />
                          </div>:''
                        }

                        {components[id].component.defaultProps.placeholder != undefined ?
                          <div>
                            <Input type="text" label="Placeholder" {...placeholder} placeholder={components[id].component.defaultProps.placeholder} />
                          </div>:''
                        }

                        {components[id].component.defaultProps.href != undefined ?
                          <div>
                            <Input type="text" label="Link" {...href} placeholder={components[id].component.defaultProps.href} />
                          </div>:''
                        }

                        {components[id].component != undefined ?
                          <div>
                            <ComponentContainer component={components[id]} />
                          </div>:''
                        }
                      </div>:''
                    }
                    <div>
                      <ButtonToolbar>
                        <Button type="submit" bsStyle="info">Save</Button>
                        <Button type="button" bsStyle="danger">Cancel</Button>
                      </ButtonToolbar>
                    </div>
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
    return {
        components: state.components
    }
};

EditForm = connect(mapStateToProps)(EditForm);

export default EditForm;
