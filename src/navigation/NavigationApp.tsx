import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../screens/welcome/Welcome';
import { Box, Button, ButtonIcon, ButtonText, CalendarDaysIcon, Divider, GluestackUIProvider, HStack, Heading, Icon, MenuIcon, SettingsIcon, Text, VStack, useTheme }
    from '@gluestack-ui/themed';
import Login from '../screens/login/Login';
import Index from '../screens/home/Index';
import CreateAccount from '../screens/login/CreateAccount';
import { Screens } from '../enums/navigation/screens.enum';
import Admin from '../screens/admin-management/Admin';
import CreateEvent from '../screens/events-management/CreateEvent';
import FamiliesManagement from '../screens/families-management/FamiliesManagement';
import MembershipBook from '../screens/membership-book/Membership';
import Profile from '../screens/profile/Profile';
import UserManagement from '../screens/user-management/UserManagement';
import { CircleDollarSign, CircleUser, House, NotebookPen, User, Users, UsersRound } from 'lucide-react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationApp = () => {

    const HomeScreenWithDrawer = () => {
        return (
            <Drawer.Navigator
                drawerContent={props => (
                    <DrawerContentScrollView {...props}>
                        <Box justifyContent="flex-start" mt='$10' mb='$10' alignItems='center' >
                            <HStack gap='$2' alignItems='center'>
                                <Icon as={CircleUser} size='xl' />
                                <VStack>
                                    <Heading>Milthon Caicedo</Heading>
                                    <Text>miltoncaicedo23@gmail.com</Text>
                                </VStack>
                            </HStack>
                        </Box>
                        <DrawerItem
                            label={Screens.Home}
                            onPress={() => {
                                props.navigation.navigate(Screens.Home);
                            }}
                            icon={() => (
                                <Icon as={House} size='md' />
                            )}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label={Screens.Users}
                            onPress={() => {
                                props.navigation.navigate(Screens.Users);
                            }}
                            icon={() => (
                                <Icon as={Users} size='md' />
                            )}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label={Screens.Families}
                            onPress={() => {
                                props.navigation.navigate(Screens.Families);
                            }}
                            icon={() => (
                                <Icon as={UsersRound} size='md' />
                            )}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label='Crear evento'
                            onPress={() => {
                                props.navigation.navigate(Screens.CreateEvent);
                            }}
                            icon={() => (
                                <Icon as={CalendarDaysIcon} size='md' />
                            )}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label='Libro de socios'
                            onPress={() => {
                                props.navigation.navigate(Screens.MembershipBook);
                            }}
                            icon={() => (
                                <Icon as={NotebookPen} size='md' />
                            )}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label='Ajuste de cuentas'
                            onPress={() => {
                                props.navigation.navigate(Screens.Reckoning);
                            }}
                            icon={() => (
                                <Icon as={CircleDollarSign} size='md' />
                            )}
                        >
                        </DrawerItem>
                        <DrawerItem
                            label='Mi perfil'
                            onPress={() => {
                                props.navigation.navigate(Screens.Profile);
                            }}
                            icon={() => (
                                <Icon as={CircleUser} size='md' />
                            )}
                        >
                        </DrawerItem>
                        <Divider />
                        <DrawerItem
                            label={Screens.Admin}
                            onPress={() => {
                                props.navigation.navigate(Screens.Admin);
                            }}
                            icon={() => (
                                <Icon as={SettingsIcon} size='md' />
                            )}
                        >
                        </DrawerItem>
                    </DrawerContentScrollView>
                )}>
                <Drawer.Screen name='Eventos' component={Index} />
                <Drawer.Screen name={Screens.Admin} component={Admin} />
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
                    name={Screens.Login}
                    component={Login}
                    options={{ title: 'Iniciar sesión', headerShown: false }}
                />
                <Stack.Screen
                    name={Screens.Home}
                    component={HomeScreenWithDrawer}
                    options={{ title: Screens.Home, headerShown: false }}
                />
                <Stack.Screen
                    name={Screens.CreateAccount}
                    component={CreateAccount}
                    options={{ title: 'Crear cuenta', headerShown: true }}
                />
                <Stack.Screen
                    name={Screens.CreateEvent}
                    component={CreateEvent}
                    options={{ title: 'Crear evento', headerShown: true }}
                />
                <Stack.Screen
                    name={Screens.Families}
                    component={FamiliesManagement}
                    options={{ title: 'Gestión familias', headerShown: true }}
                />
                <Stack.Screen
                    name={Screens.MembershipBook}
                    component={MembershipBook}
                    options={{ title: 'Libro de socios', headerShown: true }}
                />
                <Stack.Screen
                    name={Screens.Profile}
                    component={Profile}
                    options={{ title: Screens.Profile, headerShown: true }}
                />
                <Stack.Screen
                    name={Screens.Reckoning}
                    component={Profile}
                    options={{ title: 'Ajuste de cuentas', headerShown: true }}
                />
                <Stack.Screen
                    name={Screens.Users}
                    component={UserManagement}
                    options={{ title: 'Gestión de usuarios', headerShown: true }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );

};
export default NavigationApp;
