
import { YellowBox } from 'react-native';
import _ from 'lodash';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    BOOKING_UPDATE,
    BOOKING_CREATE,
    BOOKINGS_FETCH_SUCCESS,
    BOOKING_SAVE_SUCCESS
} from './types';

export const bookingUpdate = ({ prop, value }) => {
  return {
    type:BOOKING_UPDATE,
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

export const bookingCreate = ({ bookingTitle, checkin, checkout }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/bookings`)
    .push({ bookingTitle, checkin, checkout })
    .then(() => {
      dispatch({ type: BOOKING_CREATE })
      Actions.pop();
    }); 
  }
};

export const bookingsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/bookings`)
    .on('value', snapshot => {
      dispatch({ type: BOOKINGS_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const bookingsFetchAll = () => {
  
  return (dispatch) => {
    firebase.database().ref('/users/bookings')
    .on('value', snapshot => {
      dispatch({ type: BOOKINGS_FETCH_SUCCESS, payload: snapshot.val() });
    });
  }; 
};
 

export const bookingSave = ({ bookingTitle, checkin, checkout, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/bookings/${uid}`)
      .set({ bookingTitle, checkin, checkout })
      .then(() => {
        dispatch({ type: BOOKING_SAVE_SUCCESS })
        Actions.bookingList({ type: 'reset' })
      });
  };
};

export const bookingDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/bookings/${uid}`)
      .remove()
      .then(() => {
        Actions.bookingList({ type: 'reset' });
      });
  };
};

