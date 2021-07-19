import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>My Home component</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})