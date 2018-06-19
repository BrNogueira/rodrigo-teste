import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/screens/login/login';


let AppNavigator = createStackNavigator(
  
  {
    Login: {
      screen: Login
    }
  },

  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }

);

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
