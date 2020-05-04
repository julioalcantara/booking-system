import  { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import ProfileReducer from './ProfileReducer';
import ProfileFormReducer from './ProfileFormReducer';

export default combineReducers ({
   auth: AuthReducer,
   profileForm: ProfileFormReducer,
   profiles: ProfileReducer,
   employeeForm: EmployeeFormReducer,
   employees: EmployeeReducer
});