import React, {  PropTypes, Component } from 'react';
import { Panel, PageHeader, Grid, ListGroupItem, ListGroup, Row, Col, Input, Button, Accordion, ButtonToolbar} from 'react-bootstrap';
import styles from '../styles/styles.less';
import {reduxForm} from 'redux-form';
import ComponentContainer from '../components/ComponentContainer'
import { connect } from 'react-redux'
import { editComponent } from '../actions'
export const fields = ['button', 'Label', 'Placeholder'];

/**
 * EditForm
 */
export default class EditForm extends Component {

    render() {
      const {fields: {button, Label, Placeholder, Link}, handleSubmit, dispatch, resetForm, components } = this.props;

      let x = 100;
      if(components.selectedComponent != undefined){
          x = components.selectedComponent.id;
      }
        return (
              <div>
              <form onSubmit={handleSubmit(data => {
                  console.log(data);
                  // dispatch(editComponent(x, data));
                  // resetForm();
              })}>
                    {x != 100 ?
                      <div>
                        <div>
                          <Input type="text" label="Label" {...Label} placeholder={components[x].component.defaultProps.label} />
                        </div>
                        {components[x].component.defaultProps.placeholder != undefined ?
                        <div>
                          <Input type="text" label="Placeholder" {...Placeholder} placeholder={components[x].component.defaultProps.placeholder} />
                        </div>:''
                        }

                        {components[x].component.defaultProps.href != undefined ?
                        <div>
                          <Input type="text" label="Link" {...Link} placeholder={components[x].component.defaultProps.href} />
                        </div>:''
                        }
                      </div>:''
                    }
                    <div>
                    <ButtonToolbar>
                      <Button type="submit" bsStyle="info">Refresh</Button>
                      <Button type="button" bsStyle="info">Save</Button>
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
    fields: ['Label', 'Placeholder', 'Link']
})(EditForm);

const mapStateToProps = (state) => {
    return {
        components: state.components
    }
};

EditForm = connect(mapStateToProps)(EditForm);

export default EditForm;
