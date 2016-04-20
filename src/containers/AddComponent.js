/**
 * Created by parikhv on 3/9/16.
 */
import { connect } from 'react-redux';
import { addCompnent, selectComponent, deleteComponent, saveFormPOST } from '../actions';
import FormBuilder from '../components/FormBuilder';

/**
 * this function returns todo item list that belong to selected filter.
 */
const mapStateToProps = (state) => {
    if(state.components.componentArray === undefined){
        return {components: {componentArray : {}}};
    }else{
        return {components: state.components};
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDragMove: (component) => {
            dispatch(addCompnent(component));
        },
        onSelect: (key) => {
            dispatch(selectComponent(key));
        },
        onDelete: (key) => {
            dispatch(deleteComponent(key));
        },
        onSubmitForm: (components) => {
            dispatch(saveFormPOST(components));
        }
    };
};

const AddComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormBuilder);



/**
 * Export default AddComponent.
 */
export default AddComponent;
