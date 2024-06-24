import {
    GluestackUIProvider,
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
    AlertCircleIcon,
    Select,
    SelectTrigger,
    SelectInput,
    SelectIcon,
    ChevronDownIcon,
    SelectPortal,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicatorWrapper,
    SelectDragIndicator,
    SelectItem,
    Icon
} from '@gluestack-ui/themed';
const logoGesApp = require('../../../assets/images/logo-mini.jpg');

const CreateAccount = ({ navigation }: { navigation: any }) => {
    return (
        <Box justifyContent="flex-start" w="$full" alignItems='center' alignContent='center' h="100%">
            <Image
                size="xl" borderRadius="$sm"
                source={logoGesApp}
                alt="GesApp"
                my="$0"
            />
            <Box justifyContent='center' alignContent='center' gap='$7' >
                <Heading bold size="2xl" alignSelf='flex-start' >
                    Crea tu cuenta
                </Heading>
                <FormControl
                    size="lg"
                    minWidth="$80"
                    maxHeight="$96"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    isRequired={true}
                //  borderColor='$primary500'
                >
                    <Input variant='underlined'
                    >
                        <InputField type="text" defaultValue="" placeholder="Nombres" />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                            El nombre es obligatorio
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl
                    size="lg"
                    minWidth="$80"
                    maxHeight="$96"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    isRequired={true}
                // borderColor='$primary500'
                >
                    <Input variant='underlined'>
                        <InputField type="text" defaultValue="" placeholder="Apellidos" />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                            El apellido es obligatorio
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl
                    size="lg"
                    minWidth="$80"
                    maxHeight="$96"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    isRequired={true}
                // borderColor='$primary500'
                >
                    <Input variant='underlined'>
                        <InputField type="text" defaultValue="" placeholder="Correo" />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                            El correo es obligatorio
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl
                    size="lg"
                    minWidth="$80"
                    maxHeight="$96"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    isRequired={true}
                // borderColor='$primary500'
                >
                    <Input variant='underlined'>
                        <InputField type="text" defaultValue="" placeholder="Usuario" />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                            El usuario es obligatorio
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    isRequired={true}
                >
                    <Input variant='underlined'>
                        <InputField type="password" defaultValue="" placeholder="Contraseña" />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                            La contraseña es obligatoria
                        </FormControlErrorText>
                        <FormControlErrorText>
                            La contraseña debe tener al menos 6 caracteres
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>

                <Select>
                    <SelectTrigger variant="underlined" size="md" >
                        <SelectInput placeholder="Select option" />
                        <SelectIcon mr="$3">
                            <Icon as={ChevronDownIcon} />
                        </SelectIcon>
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                            <SelectDragIndicatorWrapper>
                                <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label="Presidente" value="president" />
                            <SelectItem label="Vicepresidente" value="vicepresident" />
                            <SelectItem label="Secretario" value="secretary" />
                            <SelectItem label="Tesorero" value="treasurer" />
                        </SelectContent>
                    </SelectPortal>
                </Select>

                <Button onPress={() => {
                    navigation.navigate('Welcome')
                }}
                    size="md" mt="$2" variant="solid" bgColor='$primary500' action="primary" isDisabled={false} isFocusVisible={false} >
                    <ButtonText>Crear cuenta</ButtonText>
                </Button>
            </Box>
        </Box>
    )
}
export default CreateAccount;