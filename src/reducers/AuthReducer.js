import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:  
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED: 
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return {...state, loading: true, error: ''}
        case LOGIN_USER_SUCESS: 
            return { ...state, ...INITIAL_STATE, user: action.payload, error: '', loading: false };
        case LOGIN_USER_FAIL: 
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        default:
            return state;
    }
};