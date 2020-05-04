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
      apiKey: "AIzaSyCCactH-1DrppalOmd-GtqYnTCVpgR8Jpw",
      authDomain: "tgs-app-46963.firebaseapp.com",
      databaseURL: "https://tgs-app-46963.firebaseio.com",
      projectId: "tgs-app-46963",
      storageBucket: "tgs-app-46963.appspot.com",
      messagingSenderId: "288210351987",
      appId: "1:288210351987:web:5aa278b5a29c9f39217706"
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