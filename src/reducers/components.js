/**
 * Created by parikhv on 3/9/16.
 */
import { handleActions, handleAction } from  'redux-actions';
import { Actions } from '../constants'
/**
 * this function returns a todo item with initialized values or toggled status as selected by action.
 */
const component = (state, { type, payload: {id, component, props} }) => {
    switch (type) {
        case Actions.addComponent:
            return payload;
        default:
            return state
    }
};

/**
 * this function handles creation and status of todo items.
 */
const components = handleActions({
    ADD_COMPONENT: (state, { type, payload: {id, component, props} }) => {
        state[id] = {component, props};

        return state;
    }
},  ([]));

export default components;
