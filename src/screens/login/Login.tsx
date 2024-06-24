import {
    Text,
    Box,
    Center,
    Button,
    ButtonText,
    Image,
    Heading,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Input,
    InputField,
    FormControlHelper,
    FormControlHelperText,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    AlertCircleIcon
} from '@gluestack-ui/themed';
const logoGesApp = require('../../../assets/images/logo-mini.jpg');

const Login = ({ navigation }: { navigation: any }) => {
    return (
        <Box justifyContent="flex-start" w="$full" alignItems='center' alignContent='center' h="100%">
            <Image
                size="xl" borderRadius="$sm"
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
                        <InputField type="text" defaultValue="" placeholder="Usuario o correo" />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                    </FormControlError>
                </FormControl>
                <FormControl
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    isRequired={true}
                >
                    <Input variant='underlined' >
                        <InputField type="password" defaultValue="" placeholder="Contraseña" />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                            La contraseña o el usuario son incorrectos
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <Button onPress={() => {
                    navigation.navigate('CreateAccount')
                }}
                    size="md" mt="$2" variant="solid" bgColor='$primary500' action="primary" isDisabled={false} isFocusVisible={false} >
                    <ButtonText>Iniciar sesión</ButtonText>
                </Button>
            </Box>
        </Box>
    )
}
export default Login;