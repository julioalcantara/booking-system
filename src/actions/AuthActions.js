import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_ADMIN,
  CREATE_ACCOUNT,
  CREATE_ADMIN,
  CREATE_ACC_SUCCESS,
  CREATE_ADMIN_SUCCESS,
  LOGIN_ADMIN_SUCCESS,
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
    dispatch({ type: CREATE_ACCOUNT});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

export const loginAdmin = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_ADMIN });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(admin => loginAdmimnSuccess(dispatch, admin))
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

export const createAdmin = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_ADMIN });
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(admin => createAdminSuccess(dispatch, admin))
        .catch(() => loginUserFail(dispatch));
  };
};

export const logOut = () => {
  return (
    firebase.auth().signOut()
    .then (Actions.auth())
  );
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: CREATE_ACC_SUCCESS,
    payload: user
  });

  Actions.profile();
};

const loginAdmimnSuccess = (dispatch, admin) => {
  dispatch({
    type: LOGIN_ADMIN_SUCCESS,
    payload: admin
  });

  Actions.admin_main();
};

const createAccSuccess = (dispatch, user) => {
  dispatch({
    type: CREATE_ACC_SUCCESS,
    payload: user
  });

  Actions.main();
};

const createAdminSuccess = (dispatch, admin) => {
  dispatch({
    type: CREATE_ADMIN_SUCCESS,
    payload: admin
  });

  Actions.admin_main();
};
