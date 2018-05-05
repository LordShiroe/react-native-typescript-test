import React, { Component } from 'react'
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native'

interface Props { message: string }
interface State { name: string, lastName: string, showName: boolean }
export default class Component2 extends Component<Props, State> {
    constructor(props) {
        super(props)
    }

    onPress() {
        console.log('Presionado')
    }

    render() {
        return (
            <View>
                <View style={styles.myView}>
                    <Text style={styles.myText}>Hola Andrea</Text>
                </View>
                <View style={styles.container}>
                    <TouchableHighlight style={styles.box1} onPress={this.onPress} underlayColor='blue'>
                        <View ><Text>View 1</Text></View>
                    </TouchableHighlight>
                    <View style={styles.box2}><Text>View 2</Text></View>
                    <View style={styles.box3}><Text style={{ color: 'white' }}>View 3</Text></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: '#000000'
    },
    myText: {
        color: 'blue'
    },
    container: {
        flexDirection: 'row',
        height: 100
    },
    box1: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    box2: {
        flex: 1,
        backgroundColor: 'red'
    },
    box3: {
        flex: 1,
        backgroundColor: 'purple'
    }
})

AppRegistry.registerComponent('Component2', () => Component2)