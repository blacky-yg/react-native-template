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
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text>Catalog</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text>Quote</Text>
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
        justifyContent: 'center'
    },
    button: {
        padding: 20
    }
})