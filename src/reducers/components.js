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
        case Actions.selectComponent:
            return payload;
        default:
            return state
    }
};

/**
 * This function assigns modified properties to a selected form component as specified by user.
 */
const editProperties = ( state, props ) => {
    return {
      ...state,
      label: props.label,
      placeholder: props.placeholder,
      children: props.children,
      href: props.href
    };
};

/**
 * This function handles creation and modification of form builder components.
 */
const components = handleActions({
    ADD_COMPONENT: (state, { type, payload: {id, component, props} }) => {
        state[id] = {component, props};
        return state;
    },
    SELECT_COMPONENT: (state, { type, payload: id }) => {
        state['selectedComponent'] = id;
        return state;
    },
    EDIT_COMPONENT: (state, { type, payload: {id, props} }) => {

        if(id != undefined){
          id = id.id;
          if(state[id] != undefined){
            state[id].component.defaultProps =  editProperties(state[id].component.defaultProps, props);
          }
      }

      return state;
    },
    DELETE_COMPONENT: (state, { type, payload: id }) => {
      return state.filter(function(comp){
        return state[id.id] !== comp;
      });
    }
},  ([]));

export default components;
