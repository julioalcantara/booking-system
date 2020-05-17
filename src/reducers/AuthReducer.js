import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_FAIL,
    CREATE_ACCOUNT,
    CREATE_ACC_SUCCESS,
    LOGIN_ADMIN,
    CREATE_ADMIN,
    LOGIN_ADMIN_SUCCESS,
    CREATE_ADMIN_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    admin: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:  
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED: 
            return { ...state, password: action.payload };
        case LOGIN_ADMIN:
            return {...state, loading: true, error: ''}
        case CREATE_ACCOUNT:
            return {...state, loading: true, error: ''}
        case CREATE_ADMIN:
            return {...state, loading: true, error: ''}
        case LOGIN_ADMIN_SUCCESS: 
            return { ...state, ...INITIAL_STATE, admin: action.payload, error: '', loading: false }; 
        case CREATE_ACC_SUCCESS: 
            return { ...state, ...INITIAL_STATE, user: action.payload, error: '', loading: false };
        case CREATE_ADMIN_SUCCESS: 
            return { ...state, ...INITIAL_STATE, admin: action.payload, error: '', loading: false };
        case LOGIN_USER_FAIL: 
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        default:
            return state;
    }
};