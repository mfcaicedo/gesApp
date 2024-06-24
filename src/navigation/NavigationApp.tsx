import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/welcome/Welcome';
import { Button, ButtonIcon, ButtonText, GluestackUIProvider, MenuIcon, useTheme } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Login from '../screens/login/Login';
import Index from '../screens/home/Index';
import CreateAccount from '../screens/login/CreateAccount';

const Stack = createNativeStackNavigator();

const NavigationApp = () => {

    const CustomHeaderMenu = ({ navigation }: { navigation: any }) => {
        return (
            <GluestackUIProvider config={config} >
                <Button
                    pr='$8'
                    size="xl"
                    variant="link"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={() => console.log('menu')}
                >
                    <ButtonIcon color='$white' as={MenuIcon} />
                </Button>
            </GluestackUIProvider>
        );
    };

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ title: '', headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login', headerShown: false }}
                />
                <Stack.Screen
                    name="CreateAccount"
                    component={CreateAccount}
                    options={{ title: 'Crear cuenta' }}
                />
                <Stack.Screen
                    name="Home"
                    component={Index}
                    options={
                        { 
                            title: 'Compras', 
                            headerBackVisible: false,
                            headerLeft: (props) => <CustomHeaderMenu navigation={Stack.Navigator}  />,
                            headerStyle: {
                                backgroundColor: '#00293F',
                            },
                            headerTintColor: '#ffffff',
                    }
                    }
                />

            </Stack.Navigator>
        </NavigationContainer>
    );

};
export default NavigationApp;
