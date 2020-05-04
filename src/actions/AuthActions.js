import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CREATE_ACCOUNT,
  CREATE_ACC_SUCCESS
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

export const createAccount = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_ACCOUNT });
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => createAccSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

const createAccSuccess = (dispatch, user) => {
  dispatch({
    type: CREATE_ACC_SUCCESS,
    payload: user
  });

  Actions.main();
};

//navigate to Create Screen
export const goToCreateAcc = () => {
  return Actions.createAccont();
}

//navigate to Login screen
export const goToLogin = () => {
  return Actions.login();
}