import { createAction } from 'redux-actions';
import { Actions } from '../constants';

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
            props: component.defaultProps
        };
    },


    getSelectComponent: (id) => {
        return {
            id
        };
    },

  /**
   * This action creates and
   * @returns an object to modify the props of selected component as specified by user.
   */
    getEditComponent: (id, data) => {
        return {
            id: id,
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
 * Export constant DELETE_COMPONENT Action.
 */
export const deleteComponent = createAction(Actions.deleteComponent, payload.getDeleteComponent);
/**
 * Export constant DELETE_COMPONENT Action.
 */
export const editComponent = createAction(Actions.editComponent, payload.getEditComponent);
