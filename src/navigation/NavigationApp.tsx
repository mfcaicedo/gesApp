import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../screens/welcome/Welcome';
import { Button, ButtonIcon, ButtonText, GluestackUIProvider, MenuIcon, Text, useTheme } from '@gluestack-ui/themed';
import Login from '../screens/login/Login';
import Index from '../screens/home/Index';
import CreateAccount from '../screens/login/CreateAccount';
import { Box } from 'lucide-react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationApp = () => {

    const HomeScreenWithDrawer = () => {
        return (
            <Drawer.Navigator initialRouteName='Home'
                // drawerContent={(props) => <CustomDrawerContent {...props} />}
                drawerContent={() => (
                    <Box>
                        <Text>Hello</Text>
                    </Box>
                )}
            >
                <Drawer.Screen name="Home" component={Index} />
            </Drawer.Navigator>
        );
    }

    const CustomHeaderMenu = ({ navigation }: { navigation: any }) => {
        return (
            <Button
                pr='$8'
                size="xl"
                variant="link"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => console.log('menu pressed')}
            >
                <ButtonIcon color='$white' as={MenuIcon} />
            </Button>
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
                    component={HomeScreenWithDrawer}
                // options={
                //     {
                //         title: 'Eventos',
                //         headerBackVisible: false,
                //         headerLeft: (props) => <CustomHeaderMenu navigation={Stack.Navigator} />,
                //         headerStyle: {
                //             backgroundColor: '#0077E6',
                //         },
                //         headerTintColor: '#ffffff',
                //     }
                // }
                />

            </Stack.Navigator>
        </NavigationContainer>
    );

};
export default NavigationApp;
