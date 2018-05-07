import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Metrics, Colors, Fonts } from 'theme'

interface Props {
    onPress: any,
    icon: string,
    style?: object,
    size: number,
    color: string,
    text: string
}
export class ButtonBox extends React.Component<Props> {
    render() {
        return (
            <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
                <Icon name={this.props.icon}
                    style={styles.image}
                    size={this.props.size}
                    color={this.props.color}
                ></Icon>
                <Text style={styles.label}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Metrics.screenWidth / 2,
        aspectRatio: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.eggplant
    },
    image: {
        width: Metrics.icons.xl,
        height: Metrics.icons.xl,
        margin: Metrics.baseMargin,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        ...Fonts.style.h2,
        fontSize: 14,
        color: Colors.text
    }
})
