import { Actions, Filters } from '../constants';
import { handleActions } from 'redux-actions';

/**
 * this function returns selected visibility filter.
 */
const visibilityFilter = handleActions({
  SET_VISIBILITY_FILTER : (state, action) => {
    return action.payload.filter;
  }
}, ( Filters.showAll ));

export default visibilityFilter;
