import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import {
  Text,
  View
} from 'react-native'

interface Props { message: string }

export default class Component1 extends Component<Props> {
  render() {
    return (
      <View>
        <Text>{this.props.message} What's your name?</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('Component1', () => Component1)