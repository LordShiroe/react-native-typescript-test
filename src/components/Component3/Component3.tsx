import React, { Component } from 'react'
import { AppRegistry, Text, View, TextInput, Switch } from 'react-native'

interface Props { message: string }
interface State { textValue: string, switchValue: boolean }

export default class Component3 extends Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            textValue: 'hola',
            switchValue: false
        }
    }
    onChangeText(value) {
        this.setState({ textValue: value })
    }
    onSubmit() {
        console.log('Input Submitted')
    }
    onSwitchChange(value) {
        this.setState({ switchValue: value })
    }
    render() {
        return (
            <View>
                <Text>Component3</Text>
                <TextInput
                    placeholder='Enter Text'
                    value={this.state.textValue}
                    onChangeText={(value) => this.onChangeText(value)}
                    onSubmitEditing={this.onSubmit}
                />
                <Text>{this.state.textValue}</Text>
                <Switch value={this.state.switchValue} onValueChange={(value) => this.onSwitchChange(value)}></Switch>
            </View>
        )
    }
}

AppRegistry.registerComponent('Component3', () => Component3)