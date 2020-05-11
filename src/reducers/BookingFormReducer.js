import {
    BOOKING_UPDATE,
    BOOKING_CREATE,
    BOOKING_SAVE_SUCCESS
  } from '../actions/types';
  
  const INITIAL_STATE = {
    bookingTitle: '',
    checkin: '',
    checkout: ''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case BOOKING_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
      case BOOKING_CREATE:
        return INITIAL_STATE;
      case BOOKING_SAVE_SUCCESS:
        return INITIAL_STATE;
      default:
        return state;
    }
  };