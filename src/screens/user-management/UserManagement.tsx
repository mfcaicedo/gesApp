import React, { useState, useEffect } from "react";
import {
    Box, Heading, Text, HStack, Card, MailIcon, PhoneIcon, Icon, Avatar, AvatarFallbackText, AvatarImage,
    AvatarBadge, AddIcon, Button, ButtonIcon, FormControl, Input, InputField, SearchIcon, TrashIcon
} from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";
import { Screens } from "../../enums/navigation/screens.enum";
import { UserList } from "../../models/user-management/userModel";
import userService from "../../services/user-management/userService";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
const userIcono = require("../../../assets/images/user-icono.png");

const UserManagement = ({ navigation }: { navigation: any }) => {

    const [users, setUsers] = useState<UserList[]>([]);

    const getAllUsers = async () => {

        const unsubscribe = userService.getAllUsers((users: UserList[]) => {
            setUsers(users);
        });

        return () => {
            unsubscribe();
        }

    }

    const handleDelete = async (user: UserList) => {

        console.log('Eliminando usuario: ', user);

        // await userService.deleteUser(user.uid);

    }

    const handleViewUser = async (user: UserList) => {

        console.log('Visualizando usuario: ', user);

        // navigation.navigate(Screens.ViewUser, { user });

    }

    useEffect(() => {

        getAllUsers();

    }, []);

    return (
        <Box justifyContent="flex-start" h='$full' mx="$2" my="$2">
            <Text>
                A continuación, podrás gestionar los usuarios de tu comunidad!
            </Text>
            <Box my='$2'>
                <SearchComponent navigation={navigation} />
            </Box>
            <HStack justifyContent="space-between" my='$2'>
                <Heading mt='$2'>
                    Listado de usuarios
                </Heading>
            </HStack>

            <ScrollView>
                {
                    users.map((user, index) => (
                        <CardUser
                            key={index}
                            index={index}
                            user={user}
                            onDelete={handleDelete}
                            onEdit={() => { }}
                            onView={handleViewUser}
                        />
                    ))
                }
            </ScrollView>
        </Box>
    )

}

const CardUser = ({ index, user, onDelete, onEdit, onView }: { index: number, user: UserList, onDelete: any, onEdit: any, onView: any }) => {
    return (
        <GestureHandlerRootView>
            <Swipeable key={index} renderRightActions={() =>
                <Box w='$16' bg='$red500' justifyContent='center' alignItems='center' >
                    <Icon as={TrashIcon} size="xl" color='$white' />
                </Box>
            }
                onSwipeableOpen={() => onDelete(user)}>
                <TouchableOpacity key={index} onPress={() => onView(user)}>
                    <Card size="lg" justifyContent='flex-start' flexDirection='row' mt='$1'
                        w='$full' variant="elevated" >
                        <Box gap='$2' w='$full'>
                            <HStack gap='$2' alignItems="center">
                                <Avatar size="lg">
                                    <AvatarFallbackText>{user.nombre}</AvatarFallbackText>
                                    <AvatarImage
                                        source={userIcono}
                                        alt="Foto de perfil"
                                    />
                                    {/* <AvatarBadge /> */}
                                </Avatar>
                                <Box>
                                    <Heading size="md" >
                                        {user.nombre} {user.apellido}
                                    </Heading>
                                    <HStack alignItems="center" gap='$1'>
                                        <Icon as={PhoneIcon} size='xs' />
                                        <Text >{user.telefono}</Text>
                                    </HStack>
                                    <HStack alignItems="center" gap='$1'>
                                        <Icon as={MailIcon} size='xs' />
                                        <Text >{user.email ?? 'Sin email'}</Text>
                                    </HStack>
                                </Box>

                            </HStack>
                        </Box>
                    </Card>
                </TouchableOpacity>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

const SearchComponent = ({ navigation }: { navigation: any }) => {

    const [search, setSearch] = useState<string>('');

    return (
        <Box justifyContent='space-between'>
            <Box justifyContent='space-between' flexDirection='row' borderColor='$blueGray500' gap='$1'
                alignItems='center'>
                <FormControl
                    size="sm"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    isRequired={true}
                    w='82%'
                >
                    <Input variant='rounded' alignItems='center' px='$2'>
                        <Icon as={SearchIcon} size="lg" color='$coolGray400' px='$0' mx='$0' />
                        <InputField type="text"
                            defaultValue=""
                            value={search}
                            onChangeText={(text) => setSearch(text)}
                            placeholder="Buscar usuario"
                            autoCapitalize='sentences'
                            keyboardType='web-search'
                        />
                    </Input>
                </FormControl>
                <Button
                    size="md"
                    variant="solid"
                    rounded="$full"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={() => navigation.navigate(Screens.CreateUser)}
                >
                    <ButtonIcon color='$white' as={AddIcon} size='lg' />
                </Button>
            </Box>
        </Box>
    )
}

export default UserManagement;

