
import { YellowBox } from 'react-native';
import _ from 'lodash';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    PROFILE_UPDATE,
    PROFILE_CREATE,
    PROFILES_FETCH_SUCCESS,
    PROFILE_SAVE_SUCCESS,
    ADMIN_PROFILE,
    ADMIN_FETCH_PROFILE,
    ADMIN_SAVE_SUCCESS,
    ADMIN_UPDATE
} from './types';

export const profileUpdate = ({ prop, value }) => {
  return {
    type:PROFILE_UPDATE,
    payload: { prop, value }
  };  
};

export const adminUpdate = ({ prop, value }) => {
  return {
    type:ADMIN_UPDATE,
    payload: { prop, value }
  };  
};

//Ignoring yellow warnings
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export const profileCreate = ({ firstName, lastName, phone, tattooStyle }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profiles`)
    .push({ firstName, lastName, phone, tattooStyle })
    .then(() => {
      dispatch({ type: PROFILE_CREATE })
      Actions.profile();
    });
  }
};

export const adminCreateProfile = ({ afirstName, alastName, aphone }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/admins/${currentUser.uid}/adminProfiles`)
    .push({ afirstName, alastName, aphone })
    .then(() => {
      dispatch({ type: ADMIN_PROFILE })
      Actions.pop()
    });
  }
};

export const profilesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profiles`)
    .on('value', snapshot => {
      dispatch({ type: PROFILES_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const adminProfilesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/admins/${currentUser.uid}/adminProfiles`)
    .on('value', snapshot => {
      dispatch({ type: ADMIN_FETCH_PROFILE, payload: snapshot.val() });
    });
  };
};

export const profileSave = ({ firstName, lastName, phone, tattooStyle, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profiles/${uid}`)
      .set({ firstName, lastName, phone, tattooStyle })
      .then(() => {
        dispatch({ type: PROFILE_SAVE_SUCCESS })
        Actions.profile({ type: 'reset' });
      });
  };
};

export const adminProfileSave = ({ afirstName, alastName, aphone, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/admins/${currentUser.uid}/adminProfiles/${uid}`)
      .set({ afirstName, alastName, aphone })
      .then(() => {
        dispatch({ type: ADMIN_SAVE_SUCCESS })
        Actions.adminList({ type: 'reset' });
      });
  };
};

export const profileDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/profiles/${uid}`)
      .remove()
      .then(() => {
        Actions.profile({ type: 'reset' });
      });
  };
};

export const adminDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/admins/${currentUser.uid}/adminProfiles/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: ADMIN_SAVE_SUCCESS })
        Actions.adminList({ type: 'reset' });
      });
  };
};