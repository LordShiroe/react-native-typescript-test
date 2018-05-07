import React, { Component } from 'react'
import { Text, View, AppRegistry } from 'react-native'
import StackNavigation from 'interfaces/NavigationProps'

interface Props { navigation: StackNavigation }
interface State { email: string, name: string }
export default class Component5 extends Component<Props, State> {
    constructor(props) {
        super(props)
        const user = this.props.navigation.getParam('user', {})
        console.log(this.props.navigation)
        this.state = {
            name: user.name,
            email: user.email
        }
    }
    render() {
        return (
            <View>
                <Text> {this.state.name} </Text>
                <Text> {this.state.email} </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('Component5', () => Component5)