import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../pages/detail';
import Home from '../pages/home';
function App() {
    const { Navigator, Screen } = createNativeStackNavigator();
    return (
        <Navigator>
            <Screen name="StarWar Characters" component={Home} />
            <Screen name="Detail" component={Detail} />
        </Navigator>
    )
}
export const AppNavigator = () => (
    <NavigationContainer>
        <App />
    </NavigationContainer>
);