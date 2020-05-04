
import { YellowBox } from 'react-native';
import _ from 'lodash';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    PROFILE_UPDATE,
    PROFILE_CREATE,
    PROFILES_FETCH_SUCCESS,
    PROFILE_SAVE_SUCCESS
} from './types';

export const profileUpdate = ({ prop, value }) => {
  return {
    type:PROFILE_UPDATE,
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

export const profileSave = ({ firstName, lastName, phone, tattooStyle, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profiles/${uid}`)
      .set({ firstName, lastName, phone, tattooStyle })
      .then(() => {
        dispatch({ type: PROFILE_SAVE_SUCCESS })
        Actions.profileList({ type: 'reset' });
      });
  };
};

export const profileDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/profiles/${uid}`)
      .remove()
      .then(() => {
        Actions.profileList({ type: 'reset' });
      });
  };
};
