import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'; 
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  UNSAFE_componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCTE-pW5JBWKssKyPqLw1tMpN3k2P9348k',
      authDomain: 'manager-66b3d.firebaseapp.com',
      databaseURL: 'https://manager-66b3d.firebaseio.com',
      projectId: 'manager-66b3d',
      storageBucket: 'manager-66b3d.appspot.com',
      messagingSenderId: '527750627407',
      appId: '1:527750627407:web:5e8feef74342f068396a3a',
      measurementId: 'G-J1DG1XPTJG'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;