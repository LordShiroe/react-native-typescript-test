import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'

import { store } from './artifacts/redux/store'
import Component1 from './artifacts/components/Component1/Component1'
import Component2 from './artifacts/components/Component2/Component2'
import Component3 from './artifacts/components/Component3/Component3'
import Component4 from './artifacts/components/Component4/Component4'
import Component5 from './artifacts/components/Component5/Component5'
import { Component6 } from './artifacts/components/Component6/Component6'

const RootStack = createStackNavigator(
  {
    Home: Component6,
    Component1: Component1,
    Component2: Component2,
    Component3: Component3,
    Component4: Component4,
    Details: Component5,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

