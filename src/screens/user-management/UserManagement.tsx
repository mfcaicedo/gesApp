import React, { useState, useEffect } from "react";
import {
    Box, Heading, Text, HStack, Card, MailIcon, PhoneIcon, Icon, Avatar, AvatarFallbackText, AvatarImage,
    AvatarBadge, AddIcon, Button, ButtonIcon
} from "@gluestack-ui/themed";
import { ScrollView } from "react-native";
import { Screens } from "../../enums/navigation/screens.enum";
import { UserList } from "../../models/user-management/userModel";
import userService from "../../services/user-management/userService";
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

    useEffect(() => {

        getAllUsers();

    }, []);

    return (
        <Box justifyContent="flex-start" h='$full' mx="$2" my="$2">
            <Text>
                A continuación, podrás gestionar los usuarios de tu comunidad!
            </Text>
            <HStack justifyContent="space-between" my='$2'>
                <Heading mt='$2'>
                    Listado de usuarios
                </Heading>
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
            </HStack>
            <ScrollView>
                {
                    users.map((user, index) => (
                        <CardUser
                            key={index}
                            user={user}
                            onDelete={() => { }}
                            onEdit={() => { }}
                            onView={() => { }}
                        />
                    ))
                }
            </ScrollView>
        </Box>
    )

}

const CardUser = ({ user, onDelete, onEdit, onView }: { user: UserList, onDelete: any, onEdit: any, onView: any }) => {
    return (
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
    )
}

export default UserManagement;

