import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../screens/welcome/Welcome';
import { Button, ButtonIcon, ButtonText, GluestackUIProvider, MenuIcon, Text, useTheme } from '@gluestack-ui/themed';
import Login from '../screens/login/Login';
import Index from '../screens/home/Index';
import CreateAccount from '../screens/login/CreateAccount';
import { Box } from 'lucide-react-native';
import { Screens } from '../enums/navigation/screens.enum';
import { Screen } from 'react-native-screens';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationApp = () => {

    const HomeScreenWithDrawer = () => {
        return (
            <Drawer.Navigator
                drawerContent={props => (
                    <DrawerContentScrollView {...props}>
                        <Text>Hello</Text>
                        <DrawerItem
                            label={Screens.Home}
                            onPress={() => {
                                props.navigation.navigate(Screens.Home);
                            }}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label={Screens.Home}
                            onPress={() => {
                                props.navigation.navigate(Screens.Home);
                            }}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label={Screens.Home}
                            onPress={() => {
                                props.navigation.navigate(Screens.Home);
                            }}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label={Screens.Home}
                            onPress={() => {
                                props.navigation.navigate(Screens.Home);
                            }}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label={Screens.Home}
                            onPress={() => {
                                props.navigation.navigate(Screens.Home);
                            }}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label={Screens.Home}
                            onPress={() => {
                                props.navigation.navigate(Screens.Home);
                            }}
                        >
                        </DrawerItem>
                    </DrawerContentScrollView>
                )}>
                <Drawer.Screen name="Ejemplo" component={Index} />
            </Drawer.Navigator>
        );
    }

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName={Screens.Welcome}>
                <Stack.Screen
                    name={Screens.Welcome}
                    component={Welcome}
                    options={{ title: '', headerShown: false }}
                />
                <Stack.Screen
                    name='Iniciar sesión'
                    component={Login}
                    options={{ title: Screens.Login, headerShown: false }}
                />
                <Stack.Screen
                    name='Crear cuenta'
                    component={CreateAccount}
                    options={{ title: Screens.CreateAccount, headerShown: false }}
                />
                <Stack.Screen
                    name={Screens.Home}
                    component={HomeScreenWithDrawer}
                    options={{ title: Screens.Home, headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );

};
export default NavigationApp;
