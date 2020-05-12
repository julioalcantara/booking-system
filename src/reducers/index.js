import  { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BookingFormReducer from './BookingFormReducer';
import BookingReducer from './BookingReducer';
import ProfileReducer from './ProfileReducer';
import ProfileFormReducer from './ProfileFormReducer';
import AdminFormReducer from './AdminFormReducer';
import AdminReducer from './AdminReducer';

export default combineReducers ({
   auth: AuthReducer,
   profileForm: ProfileFormReducer,
   profiles: ProfileReducer,
   bookingForm: BookingFormReducer,
   bookings: BookingReducer,
   adminForm: AdminFormReducer,
   admins: AdminReducer
});