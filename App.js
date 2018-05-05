import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Component1 from './artifacts/components/Component1/Component1'
import Component2 from './artifacts/components/Component2/Component2'
import Component3 from './artifacts/components/Component3/Component3'
import Component4 from './artifacts/components/Component4/Component4'

export default class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
