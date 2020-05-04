import {
    PROFILE_UPDATE,
    PROFILE_CREATE,
    PROFILE_SAVE_SUCCESS
  } from '../actions/types';
  
  const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    phone: '',
    tattooStyle: ''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case PROFILE_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
      case PROFILE_CREATE:
        return INITIAL_STATE;
      case PROFILE_SAVE_SUCCESS:
        return INITIAL_STATE;
      default:
        return state;
    }
  };