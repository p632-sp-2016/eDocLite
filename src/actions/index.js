import 'babel-polyfill';
import { createAction } from 'redux-actions';
import { Actions } from '../constants';
import 'babel-polyfill';
import deepcopy from'deepcopy'


/**
 * this variable holds unique incremental ID for every todo item.
 */
let componentId = 0;

/**
 * This action creates and returns an object to add a new form element in the form builder.
 */
const payload = {
    /**
     * This action creates and returns an object to add a new form element in the form builder.
     */
    getAddComponent: (component) => {
      return {
            id: componentId++,
            component,
            props: deepcopy(component.defaultProps)
        };
    },

    /**
    * This action returns an object representing the selected/clicked element for editing its props.
    */
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

export const addCompnent = createAction(Actions.addComponent, payload.getAddComponent);

export const selectComponent = createAction(Actions.selectComponent, payload.getSelectComponent);

export const selectElement = createAction(Actions.selectElement, payload.getSelectElement);

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
                'Accept': 'text/html',
                'Content-Type': 'text/html'
            },
            body: components
        }).then(
            data => console.log(data),
            error => console.log(error)
        )

})
