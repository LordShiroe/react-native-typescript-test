import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'

interface Props { message: string }
interface State { name: string, lastName: string, showName: boolean }
export default class Component1 extends Component<Props, State> {

  static defaultProps = {
    message: 'Hola a todos'
  }

  constructor(props) {
    super(props)
    this.state = {
      name: 'Brad',
      lastName: 'Travesy',
      showName: true
    }
  }
  render() {
    console.log('hola mundo')
    const name = this.state.showName ? `${this.state.name} ${this.state.lastName}` : 'Sin nombre'
    return (
      <View>
        <Text>{this.props.message} What's your name? </Text>
        <Text>{name}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('Component1', () => Component1)