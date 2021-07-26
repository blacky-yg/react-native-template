import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from '../assets/icon.png';

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Image source={logo} style={styles.logoImg}/>
            <View>
                <Text style={styles.logoDesc}>{props.headerTitle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        alignContent: 'center',
        justifyContent: 'center'
    },
    logoImg: {
        width: 35,
        height: 35
    },
    logoDesc: {
        fontFamily: 'OpenSans'
    }
});