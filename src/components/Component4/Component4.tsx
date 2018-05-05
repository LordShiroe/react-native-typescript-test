import React, { Component } from 'react'
import { Text, View, AppRegistry, ListView, ListViewDataSource, StyleSheet } from 'react-native'

const users = [
    { name: 'Andrea' },
    { name: 'Freddy' },
    { name: 'Guillen' },
    { name: 'Carlos' }
]

interface Props { }
interface State { userDataSource: ListViewDataSource }
export default class Component4 extends Component<Props, State> {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            userDataSource: ds.cloneWithRows(users)
        }
    }

    renderRow(user) {
        console.log(this.state)
        return (
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}</Text>
            </View>)
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