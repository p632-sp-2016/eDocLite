import { createAction } from 'redux-actions';
import { Actions } from '../constants';


/**
 * this variable holds unique incremental ID for every todo item.
 */
let componentId = 0;

const payload = {
    /**
     * This action creates and returns an object to add a new form element in the form builder.
     */
    getAddComponent: (component) => {
      return {
            id: componentId++,
            component,
            props: component.defaultProps
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

export const editComponent = createAction(Actions.editComponent, payload.getEditComponent);
