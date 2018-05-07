import React, { Component } from 'react'
import { Text, View, AppRegistry, ListView, ListViewDataSource, StyleSheet, TouchableHighlight } from 'react-native'
import StackNavigation from 'interfaces/NavigationProps'

interface Props { navigation: StackNavigation }
interface State { userDataSource: ListViewDataSource }
export default class Component4 extends Component<Props, State> {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            userDataSource: ds
        }
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(res)
                })
            })
    }

    onPress(user) {
        this.props.navigation.navigate('Details', { user: user })
    }

    renderRow(user) {
        return (
            <TouchableHighlight onPress={() => this.onPress(user)}>
                <View style={styles.row}>
                    <Text style={styles.rowText}>{user.name}: {user.email}</Text>
                </View>
            </TouchableHighlight>)
    }

    render() {
        return (
            <ListView dataSource={this.state.userDataSource} renderRow={(user) => this.renderRow(user)} />

        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
})

AppRegistry.registerComponent('Component4', () => Component4)