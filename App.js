import firebase from 'firebase';
import React, {Component } from 'react';
import { AppRegistry,View, Text, Button } from 'react-native';
import login from './src/Components/login.js';
import cadastro from './src/Components/cadastro.js';

export default props => (
	<login />
	)
class App extends Component {

 componentWillMount() {

  var config = {
    apiKey: "AIzaSyAbs8u69hfY2tQJrEXYSltpVg_eK6KL-cI",
    authDomain: "rodrigo-teste-f06c4.firebaseapp.com",
    databaseURL: "https://rodrigo-teste-f06c4.firebaseio.com",
    projectId: "rodrigo-teste-f06c4",
    storageBucket: "rodrigo-teste-f06c4.appspot.com",
    messagingSenderId: "507200939512"
  };

  firebase.initializeApp(config);
}

AppRegistry.registerComponent ('rodrigo-teste', => App);