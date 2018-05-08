import React, { Component } from 'react'
import { Text, View, ListView, ListViewDataSource, StyleSheet, TouchableHighlight } from 'react-native'
import StackNavigation from 'interfaces/NavigationProps'
import { connect } from 'react-redux'
import User from 'interfaces/User'
import { fetchUsers } from 'actions/entityActions'

interface Props { navigation: StackNavigation, colorStyle: { row: object }, users: User[], fetchUsers: (() => void) }
interface State { userDataSource: ListViewDataSource }
class Component4 extends Component<Props, State> {

    constructor(props) {
        super(props)
        this.props.fetchUsers()
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            userDataSource: ds.cloneWithRows(this.props.users)
        }
        console.log(this.props)
    }

    onPress(user) {
        this.props.navigation.navigate('Details', { user: user })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.users) {
            this.setState({
                userDataSource: this.state.userDataSource.cloneWithRows(nextProps.users)
            })
        }
    }

    renderRow(user) {
        console.log(this.props)
        return (
            <TouchableHighlight onPress={() => this.onPress(user)}>
                <View style={styles.row}>
                    <Text style={[styles.rowText, this.props.colorStyle.row]}>{user.name}: {user.email}</Text>
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
        backgroundColor: '#202124',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
})
const mapStateToProps = (state) => {
    return {
        colorStyle: StyleSheet.create({
            row: { color: state.ui.color }
        }),
        users: state.entities.users
    }
}
export default connect(mapStateToProps, { fetchUsers })(Component4)