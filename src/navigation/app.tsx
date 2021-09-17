import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
function App() {
    const { Navigator, Screen } = createNativeStackNavigator();
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={Home} />
        </Navigator>
    )
}
export const AppNavigator = () => (
    <NavigationContainer>
        <App />
    </NavigationContainer>
);