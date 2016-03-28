import React, {  PropTypes, Component } from 'react';
import { Panel, PageHeader, Grid, ListGroupItem, ListGroup, Row, Col, Input, Button, Accordion, ButtonToolbar} from 'react-bootstrap';
import styles from '../styles/styles.less';
import {reduxForm} from 'redux-form';
import ComponentContainer from '../components/ComponentContainer'
export const fields = ['text'];

export default class EditForm extends Component {

    render() {
      const {fields: {text}, handleSubmit, dispatch, resetForm, components} = this.props;
      console.log('EDITFORM', this.props);
        return (
              <div>
                  <form onSubmit={handleSubmit(data => {})}>
                    <div>
                      <div>
                        <Input type="text" label="Text" placeholder="" />
                      </div>
                    </div>
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
    fields
})(EditForm);

export default EditForm;
