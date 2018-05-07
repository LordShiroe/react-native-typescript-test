import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { ButtonBox } from './ButtonBox'
import { ApplicationStyles, Colors, Metrics, Fonts } from 'theme'
import StackNavigation from 'interfaces/NavigationProps'

interface Props { navigation: StackNavigation }
export class Component6 extends Component<Props> {
    openComponent1 = () => {
        this.props.navigation.navigate('Component1')
    }

    openComponent2 = () => {
        this.props.navigation.navigate('Component2')
    }

    openComponent3 = () => {
        this.props.navigation.navigate('Component3')
    }

    openComponent4 = () => {
        this.props.navigation.navigate('Component4')
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
                    <Text style={styles.sectionText}>
                        Pantalla inicial. Abajo todos los botones.
                    </Text>
                    <View style={styles.buttonsContainer}>
                        <ButtonBox color={Colors.snow} size={50} onPress={this.openComponent1}
                            style={styles.usageButton} icon={'apple'} text='Component1' />
                        <ButtonBox color={Colors.snow} size={50} onPress={this.openComponent2}
                            style={styles.usageButton} icon={'amazon'} text='Component2' />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <ButtonBox color={Colors.snow} size={50} onPress={this.openComponent3}
                            style={styles.apiButton} icon={'facebook'} text='Component3' />
                        <ButtonBox color={Colors.snow} size={50} onPress={this.openComponent4}
                            icon={'github'} text='Component4' />
                    </View>
                </ScrollView>
                <View style={styles.banner}>
                    <Text style={styles.bannerLabel}>Made with ❤️ by Caos Starter Project Solutions</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        marginBottom: 36,
        paddingTop: Metrics.section
    },
    logo: {
        height: Metrics.images.logo,
        width: Metrics.images.logo,
        resizeMode: 'contain',
        marginTop: Metrics.doubleBaseMargin
    },
    buttonsContainer: {
        flexDirection: 'row',
        flex: 1
    },
    centered: {
        alignItems: 'center'
    },
    componentButton: {
        borderColor: Colors.border,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1
    },
    apiButton: {
        borderColor: Colors.border,
        borderRightWidth: 1,
        borderBottomWidth: 1
    },
    usageButton: {
        borderColor: Colors.border,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    deviceButton: {
        borderColor: Colors.border,
        borderRightWidth: 1,
        borderTopWidth: 1
    },
    sectionText: {
        textAlign: 'center',
        fontFamily: Fonts.type.base,
        fontSize: 14,
        marginHorizontal: Metrics.baseMargin,
        lineHeight: 30,
        marginVertical: Metrics.doubleBaseMargin,
        color: Colors.fire
    },
    banner: {
        position: 'absolute',
        width: Metrics.screenWidth,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        height: 36
    },
    bannerLabel: {
        ...Fonts.style.h5,
        fontSize: 12,
        color: Colors.snow
    }
})
