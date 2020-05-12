import {
    PROFILE_UPDATE,
    ADMIN_PROFILE,
    ADMIN_SAVE_SUCCESS
  } from '../actions/types';
  
  const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    phone: ''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case PROFILE_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
      case ADMIN_PROFILE:
        return INITIAL_STATE;
      case ADMIN_SAVE_SUCCESS:
        return INITIAL_STATE;
      default:
        return state;
    }
  };