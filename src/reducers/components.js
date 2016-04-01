/**
 * Created by parikhv on 3/9/16.
 */
import { handleActions, handleAction } from  'redux-actions';
import { Actions } from '../constants'

/**
 * This function assigns modified properties to a selected form component as specified by user.
 */
const editComp = ( componentArray, id, props ) => {
  return Object.keys(componentArray).map(key =>{
      if(key === id){
          return {...componentArray[key], props: props}
      } else{
          return componentArray[key];
      }
  }
)
};

/**
 * This function adds dragged component to form builder.
 */
const addComp = ( state = [], component, props ) => {
    let obj = {component, props};
    return [
      ...state,
      obj
    ];
};

/**
 * This function deletes clicked form component.
 */
const deleteComp = ( state = [], id ) => {
  return state.filter(function(comp){
    return state[id] !== comp;
  });
};

/**
 * This function handles creation and modification of form builder components.
 */
const components = handleActions({
    ADD_COMPONENT: (state, { type, payload: {id, component, props} }) => {
        return {...state, componentArray: addComp(state.componentArray, component, props)};
    },
    SELECT_COMPONENT: (state, { type, payload: id }) => {
        return {...state, selectedComponent:id.id};
    },
    EDIT_COMPONENT: (state, { type, payload: {id, props} }) => {
        return {...state, componentArray: editComp(state.componentArray, id, props)};
    },
    DELETE_COMPONENT: (state, { type, payload: id }) => {
        return {...state, componentArray: deleteComp(state.componentArray, id.id)}
    }
},  ({}));

export default components;
