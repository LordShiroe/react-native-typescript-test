import React, { Component } from 'react'
import { Text, View, TextInput, Switch } from 'react-native'
import { connect } from 'react-redux'
import { updateColor } from 'actions/uiActions'

interface Props { message: string, color: string, changeColor: ((color: string) => void) }
interface State { textValue: string, switchValue: boolean }

class Component3 extends Component<Props, State> {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            switchValue: this.props.color === '#f4f4f4' ? true : false,
            textValue: 'hola'
        }
    }
    onChangeText(value) {
        this.setState({ textValue: value })
    }
    onSubmit() {
        console.log('Input Submitted')
    }
    onSwitchChange(value: boolean) {
        this.setState({ switchValue: value })
        const color = value ? '#f4f4f4' : '#acd123'
        this.props.changeColor(color)
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

const mapStateToProps = (state) => {
    return {
        color: state.ui.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeColor: (color: string) => {
            dispatch(updateColor(color))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component3)