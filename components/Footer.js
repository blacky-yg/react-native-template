import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as RootNavigation from './RouteNavigation';

export default function Footer() {
    return (
        <View style={styles.footer}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Home')}
            >
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Catalog')}
            >
                <Text style={styles.text}>Catalog</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Settings')}
            >
                <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Profile')}
            >
                <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#f4511e',
    },
    button: {
        padding: 25
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})