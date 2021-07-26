import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Settings() {

    return (
        <View style={styles.container}>
            <Text style={styles.desc}>
                Settings
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    desc: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic'
    }
})