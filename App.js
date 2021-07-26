import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import Footer from './components/Footer'
import Profile  from './components/Profile';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Settings from './components/Settings';
import { navigationRef } from './components/RouteNavigation';

const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return (<AppLoading />);
    } else {
        return (
            <NavigationContainer
                style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
                ref={navigationRef}
            >

                <Stack.Navigator initialRouteName="Home" headerMode="screen">

                    <Stack.Screen name="Home" component={Home} options={{
                        header: () => <Header headerTitle="Home" />
                    }}/>

                    <Stack.Screen name="Catalog" component={Catalog} options={{
                        header: () => <Header headerTitle="Catalog" />
                    }}/>

                    <Stack.Screen name="Settings" component={Settings} options={{
                        header: () => <Header headerTitle="Settings" />
                    }}/>

                    <Stack.Screen name="Profile" component={Profile} options={{
                        header: () => <Header headerTitle="Profile" />
                    }}/>

                </Stack.Navigator>

                <Footer />
            </NavigationContainer>
        );
    }
}