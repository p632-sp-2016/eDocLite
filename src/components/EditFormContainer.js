import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm} from 'redux-form';
import EditForm from './EditForm';
import { selectElement } from '../actions';
import { DropdownButton, MenuItem } from 'react-bootstrap';

/**
 * This class represents the container for editor panel redux form. It generates form for editing compnent properties dynamically.
 */
export default class EditFormContainer extends Component {

    compSelectionHandler = (key) =>{
      this.props.dispatch(selectElement(this.props.selectedComponent, key));
    };

    render() {
        const {component, selectedComponent } = this.props;
        if (selectedComponent != -1) {
            return (

                <div>
                {component.props.elements != undefined ?
                    <DropdownButton title="Selected Component" id="selectedElement">
                      {component.props.elements.map((obj, key) => {
                          return (<MenuItem value={obj.label} key={key} onClick={this.compSelectionHandler.bind(this, key)}>{obj.label}</MenuItem>);
                      })}
                    </DropdownButton>
                  :''}

                    {component.props.selectedElement != undefined ?
                      <EditForm fields={ Object.keys(component.props.elements[component.props.selectedElement]) } selectedComponent={ selectedComponent } selectedElement={ component.props.selectedElement }/>
                      :''
                    }
                </div>
            );
        }
        else {
            return (<div />);
        }

    }
}


/**
 * Returns the selected component and selected component id
 */
const mapStateToProps = (state) => {
    if(state.components.selectedComponent != undefined){
      return {
        component: state.components.componentArray[state.components.selectedComponent],
        selectedComponent : state.components.selectedComponent
      };
    }else{
      return {component: {}, selectedComponent: -1};
    }
};

EditFormContainer = connect(mapStateToProps)(EditFormContainer);

EditFormContainer = reduxForm({
        form: 'containerForm',
        fields: ['selectedElement']
    }
)(EditFormContainer);
export default EditFormContainer;
