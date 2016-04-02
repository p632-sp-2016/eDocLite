import { createAction } from 'redux-actions';
import { Actions } from '../constants';


/**
 * this variable holds unique incremental ID for every todo item.
 */
let nextTodoId = 0;
let componentId = 0;

const payload = {
  /**
   * This action creates and returns an object to add a new todo item.
   */
    getAddTodo: (text) => {
        return {
            id: nextTodoId++,
            text
        };
    },

    /**
     * This action creates and returns an object to drag an existing todo item to a new position.
     */
    getMoveTodo: (sourceTodo, targetTodo) => {
        return {
            id: sourceTodo.id,
            text: sourceTodo.text,
            completed: sourceTodo.completed,
            target_id: targetTodo.id
        }
    },

    /**
     * This action returns an object representing current visibility filter.
     */
    getVisibilityFilter: (filter) => {
        return {
            filter
        }
    },

    /**
     * This action returns an object representing the todo item to be toggled.
     */
    getToggleTodo: (id) => {
        return {
            id
        }
    },

    /**
     * This action creates and returns an object to add a new form element in the form builder.
     */
    getAddComponent: (component) => {
      return {
            id: componentId++,
            component,
            props: component.defaultProps
        }
    },

    /**
    * This action returns an object representing the selected/clicked element for editing its props.
    */
    getSelectComponent: (id) => {
        return {
            id
        }
    },

    /**
     * This action creates and returns an object to modify the props of selected component as specified by user.
     */
    getEditComponent: (id, data) => {
        return {
            id: id,
            props: data
        }
    },

    /**
     * This action creates and returns an object to modify the props of selected component as specified by user.
     */
    getDeleteComponent: (id) => {
        return {
            id
        }
    }
};

export const addCompnent = createAction(Actions.addComponent, payload.getAddComponent);

export const selectComponent = createAction(Actions.selectComponent, payload.getSelectComponent);

export const deleteComponent = createAction(Actions.deleteComponent, payload.getDeleteComponent);

export const editComponent = createAction(Actions.editComponent, payload.getEditComponent);

export const addTodo = createAction(Actions.addTodo, payload.getAddTodo);

export const moveTodo = createAction(Actions.moveTodo, payload.getMoveTodo);

export const toggleTodo = createAction(Actions.toggleTodo, payload.getToggleTodo);

export const setVisibilityFilter = createAction(Actions.visibilityFilter, payload.getVisibilityFilter);
