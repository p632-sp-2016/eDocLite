import React, {  PropTypes, Component } from 'react';
import { Panel, Grid, Row, Col, Input, Button, ButtonToolbar} from 'react-bootstrap';
import styles from '../styles/styles.less';
import {reduxForm} from 'redux-form';
import ComponentContainer from '../components/ComponentContainer'
import { connect } from 'react-redux'
import { editComponent } from '../actions'

/**
 * EditForm
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
                      <Grid>
                        {components[id].component.defaultProps.label != undefined ?
                          <Grid>
                            <Input type="text" label="Label" {...label} placeholder={components[id].component.defaultProps.label} />
                          </Grid>:''
                        }

                        {components[id].component.defaultProps.children != undefined ?
                          <Grid>
                            <Input type="text" label="Label" {...children} placeholder={components[id].component.defaultProps.children} />
                          </Grid>:''
                        }

                        {components[id].component.defaultProps.placeholder != undefined ?
                          <Grid>
                            <Input type="text" label="Placeholder" {...placeholder} placeholder={components[id].component.defaultProps.placeholder} />
                          </Grid>:''
                        }

                        {components[id].component.defaultProps.href != undefined ?
                          <Grid>
                            <Input type="text" label="Link" {...href} placeholder={components[id].component.defaultProps.href} />
                          </Grid>:''
                        }

                        {components[id].component != undefined ?
                          <ComponentContainer component={components[id]} />:''
                        }
                      </Grid>:''
                    }
                    <Grid>
                      <ButtonToolbar>
                        <Button type="submit" bsStyle="info">Save</Button>
                        <Button type="button" bsStyle="danger">Cancel</Button>
                      </ButtonToolbar>
                    </Grid>
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
