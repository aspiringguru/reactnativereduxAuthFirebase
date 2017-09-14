import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

//next line picks up './components/common/index.js' since file not nominated.
import { Header } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {
  //lifecycle method automatically invoked inside component
  //get keys from firebase web setup.
  componentWillMount() {
  firebase.initializeApp({
    apiKey: 'AIzaSyDD9XUTdpPgsdQ3hyFKBYwqraLa6idhE9Y',
    authDomain: 'authentication-400e3.firebaseapp.com',
    databaseURL: 'https://authentication-400e3.firebaseio.com',
    projectId: 'authentication-400e3',
    storageBucket: 'authentication-400e3.appspot.com',
    messagingSenderId: '1014665929951'
  });
}


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
        <LoginForm/>
      </View>
    );
  }
}

export default App;
