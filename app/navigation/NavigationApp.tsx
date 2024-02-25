import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/home';

const Stack = createNativeStackNavigator();

const NavigationApp = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen
                    name="Welcome"
                    component={Index}
                    options={{ title: '' }}
                />
                {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default NavigationApp;