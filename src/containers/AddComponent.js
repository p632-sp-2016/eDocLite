/**
 * Created by parikhv on 3/9/16.
 */
import { connect } from 'react-redux'
import { addCompnent } from '../actions'
import FormBuilder from '../components/FormBuilder'

/**
 * this function returns todo item list that belong to selected filter.
 */
const mapStateToProps = (state) => {
    return {
        components: state.components
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDragMove: (component) => {
            dispatch(addCompnent(component));
        }
    }
};

const AddComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormBuilder);

export default AddComponent;
