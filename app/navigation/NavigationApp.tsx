import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/home/Index';
import Login from '../screens/login/Login';
import CreateAccount from '../screens/login/CreateAccount';

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
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="CreateAccount"
                    component={CreateAccount}
                    options={{ title: 'Crea tu cuenta' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default NavigationApp;