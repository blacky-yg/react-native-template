import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return (<AppLoading />);
    } else {
        return (
            <NavigationContainer style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
                <Stack.Navigator initialRouteName="Home" headerMode="screen">
                    <Stack.Screen name="Home" component={Home} options={{
                        header: () => <Header headerTitle="Home" />
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}