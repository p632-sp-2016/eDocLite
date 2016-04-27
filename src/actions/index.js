import 'babel-polyfill';
import { createAction } from 'redux-actions';
import { Actions } from '../constants';
import deepcopy from'deepcopy';

/**
 * this variable holds unique incremental ID for every todo item.
 */
let componentId = 0;

/**
 * This action creates and returns an object to add a new form element in the form builder.
 */
const payload = {

    getAddComponent: (component) => {

      return {
            id: componentId++,
            component,
            props: deepcopy(component.defaultProps)
        };
    },


    getSelectComponent: (id) => {
        return {
            id
        };
    },

    /**
     * This action creates and returns an object to modify the props of selected component as specified by user.
     */
    getEditComponent: (id, selectedElement, data) => {
        return {
            id: id,
            selectedElement,
            props: data
        };
    },

    /**
     * This action creates and returns an object to modify the props of selected component as specified by user.
     */
    getDeleteComponent: (id) => {
        return {
            id
        };
    },

    /**
    * This action returns an object representing the selected/clicked element for editing its props.
    */
    getSelectElement: (selectedComponent, selectedElement) => {
        return {
            selectedComponent,
            selectedElement
        };
    }
};
/**
 * Export constant ADD_COMPONENT Action.
 */
export const addCompnent = createAction(Actions.addComponent, payload.getAddComponent);
/**
 * Export constant SELECT_COMPONENT Action.
 */
export const selectComponent = createAction(Actions.selectComponent, payload.getSelectComponent);
/**
 * Export constant SELECT_ELEMENT Action.
 */
export const selectElement = createAction(Actions.selectElement, payload.getSelectElement);
/**
 * Export constant DELETE_COMPONENT Action.
 */
export const deleteComponent = createAction(Actions.deleteComponent, payload.getDeleteComponent);
/**
 * Export constant EDIT_COMPONENT Action.
 */
export const editComponent = createAction(Actions.editComponent, payload.getEditComponent);
/**
 * Export constant SAVE_FORM Action
 */
export const saveFormPOST = createAction(Actions.saveFormPOST, async components => {

        await fetch('/saveForm', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(components)
        }).then(
            data => console.log(data),
            error => console.log(error)
        );
});
