import {
    Box,
    Button,
    ButtonText,
    Image,
    Heading,
    FormControl,
    Input,
    InputField,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    AlertCircleIcon,
    useToast,
} from '@gluestack-ui/themed';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../utils/constants/firebase';
import React, { useEffect, useState } from 'react';
import { DURATION_TOAST_SUCCESS } from '../../utils/constants/constants';
import ReusableToast from '../../utils/components/ReusableToast';
import { Screens } from '../../enums/navigation/screens.enum';
const logoGesApp = require('../../../assets/images/logo-small.png');

const Login = ({ navigation }: { navigation: any }) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);

    const toast = useToast();

    const handleLogin = async () => {
        try {

            const user = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
            showToast();
            navigation.navigate(Screens.Home);

        } catch (error) {

            setErrorEmail(true);
            setErrorPassword(true);

        }

    };

    const showToast = () => {
        const newId = Math.random()
        toast.show({
            id: newId,
            placement: "top",
            duration: DURATION_TOAST_SUCCESS,
            render: ({ id }) => {
                return (
                    <ReusableToast
                        id={id}
                        action="success"
                        variant="accent"
                        title="Bienvenido!"
                        description="Inicio de sesión exitoso"
                    />
                )
            },
        })
    }

    return (
        <Box justifyContent="flex-start" w="$full" alignItems='center' alignContent='center' h="100%">
            <Image
                size="xl" $xs-borderRadius="$sm"
                source={logoGesApp}
                alt="GesApp"
                my="$10"
            />
            <Box justifyContent='center' alignContent='center' gap='$7' >
                <Heading bold size="2xl" alignSelf='flex-start' >
                    Inicia sesión
                </Heading>
                <FormControl
                    size="lg"
                    minWidth="$80"
                    maxHeight="$96"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    isRequired={true}
                >
                    <Input variant='underlined' >
                        <InputField type="text"
                            defaultValue=""
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="Usuario o correo"
                            autoCapitalize='none'
                            keyboardType='email-address'
                        />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                    </FormControlError>
                </FormControl>
                <FormControl
                    size="lg"
                    isDisabled={false}
                    isInvalid={errorPassword || errorEmail ? true : false}
                    isReadOnly={false}
                    isRequired={true}
                >
                    <Input variant='underlined' >
                        <InputField type="password"
                            defaultValue=""
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder="Contraseña"
                            autoCapitalize='none'
                            secureTextEntry={true}
                        />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                            La contraseña o el usuario son incorrectos
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <Button onPress={() => {
                    handleLogin();
                    // navigation.navigate(Screens.Home);
                }}
                    size="md" mt="$2" variant="solid" bgColor='$primary500' action="primary" isDisabled={false} isFocusVisible={false} >
                    <ButtonText>Iniciar sesión</ButtonText>
                </Button>
            </Box>
        </Box>
    )
}
export default Login;