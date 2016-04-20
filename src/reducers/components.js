/**
 * Created by parikhv on 3/9/16.
 */
import { handleActions } from  'redux-actions';

/**
 * This function assigns modified properties to a selected form component as specified by user.
 */
const editComp = ( component, selectedElement, props ) => {
    component.props.elements[selectedElement] = props;
    return {...component, props: {...component.props, elements: [...component.props.elements ] }};
};

/**
 * This function adds dragged component to form builder.
 */
const addComp = ( state = {}, id, component, props ) => {
    return {...state, [id]: {component, props}};
};

/**
 * This function deletes clicked form component.
 */
const deleteComp = ( state = {}, id ) => {
    delete state[id];
    return {...state};
};

const selectElement = ( state = {}, selectedElement ) => {
    return {...state, props: {...state.props, selectedElement: selectedElement}};
};

/**
 * This function handles creation and modification of form builder components
 */
const components = handleActions({
    ADD_COMPONENT: (state, { payload: {id, component, props} }) => {
        return {...state, componentArray: addComp(state.componentArray, id, component, props), selectedComponent: -1};
    },
    SELECT_COMPONENT: (state, { payload: id }) => {
        // Selects a component if not selected or unselects the component if already selected
        if (id.id === state.selectedComponent)
            return {...state, selectedComponent: -1};
        else
            return {...state, selectedComponent:id.id};
    },
    EDIT_COMPONENT: (state, { payload: {id, selectedElement, props} }) => {
        return {...state, componentArray: {...state.componentArray, [id]: editComp(state.componentArray[id], selectedElement, props)}};
    },
    DELETE_COMPONENT: (state, { payload: id }) => {
      if (id.id === state.selectedComponent)
        return {...state, componentArray: deleteComp(state.componentArray, id.id), selectedComponent: -1};
      else
        return {...state, componentArray: deleteComp(state.componentArray, id.id)};
    },
    SELECT_ELEMENT: (state, { payload: {selectedComponent, selectedElement} }) => {
        return {...state, componentArray: {...state.componentArray, [selectedComponent]: selectElement(state.componentArray[selectedComponent], selectedElement)}};
    }
},  ({}));

export default components;
