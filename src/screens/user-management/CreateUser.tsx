import React, { useState } from "react";
import {
    Box, Heading, Text, HStack, Card, MailIcon, PhoneIcon, Icon, Avatar, AvatarFallbackText, AvatarImage,
    AvatarBadge, AddIcon, Button, ButtonIcon,
    ButtonText,
    Image,
    FormControl,
    Input,
    InputField,
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
    CalendarDaysIcon,
    KeyboardAvoidingView,
    useToast,
} from "@gluestack-ui/themed";
import { Platform, ScrollView } from "react-native";
import { Screens } from "../../enums/navigation/screens.enum";
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from "react-native-safe-area-context";
import userService from "../../services/user-management/userService";

import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { UserRequest } from "../../models/user-management/userModel";
import ReusableToast from "../../utils/components/ReusableToast";
import { DURATION_TOAST_SUCCESS } from "../../utils/constants/constants";
import { ToastProps } from "../../models/toast/toastPropsModel";
import { UserState } from "../../enums/user-management/userState.enum";

const CreateUser = ({ navigation }: { navigation: any }) => {

    const toast = useToast();
    const [show, setShow] = useState(false);
    let toastProps: ToastProps = {} as ToastProps;

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre es obligatorio'),
        apellido: Yup.string().required('El apellido es obligatorio'),
        tipoIdentificacion: Yup.string().required('El tipo de identificación es obligatorio'),
        numeroIdentificacion: Yup.string().required('El número de identificación es obligatorio'),
        telefono: Yup.string().min(10, 'El número de teléfono debe tener al menos 10 caracteres'),
        email: Yup.string().email('El correo no es válido'),
        rol: Yup.string().required('El rol es obligatorio'),
        genero: Yup.string().required('El género es obligatorio'),
    });

    const { values, isSubmitting, setFieldValue, errors, touched, handleSubmit, handleChange, handleBlur, setFieldTouched } = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            tipoIdentificacion: '',
            numeroIdentificacion: '',
            telefono: '',
            email: '',
            direccion: '',
            fechaNacimiento: new Date(),
            urlFoto: '',
            rol: '',
            pais: 'Colombia',
            departamento: 'Cauca',
            ciudad: 'Bolívar',
            genero: '',
            discapacidad: '',
            estadoCivil: '',
            ocupacion: '',
            estado: UserState.ENABLED,

        },
        validationSchema: validationSchema,
        onSubmit: async values => {

            const userRequest: UserRequest = {
                ...values
            }
            await createUser(userRequest);
        }
    });

    const createUser = async (userRequest: UserRequest) => {
        
        await userService.saveUser(userRequest).then((response) => {

            toastProps = {
                action: "success",
                variant: "accent",
                placement: "top",
                title: "Usuario creado! ",
                description: "El usuario se ha creado correctamente",
            }
            showToast(toastProps);
            navigation.navigate(Screens.Users);

        }).catch((error) => {

            toastProps = {
                action: "error",
                variant: "accent",
                placement: "top",
                title: "Error! ",
                description: "Ha ocurrido un error al crear el usuario. Por favor intente nuevamente",
            }
            showToast(toastProps);

            console.log("Error al crear el usuario", error);
            
        });

    }

    const showToast = (toastProps: ToastProps) => {
        
        const newId = Math.random()
        toast.show({
            id: newId,
            placement: toastProps.placement,
            duration: DURATION_TOAST_SUCCESS,
            render: ({ id }) => {
                return (
                    <ReusableToast
                        id={id}
                        action={toastProps.action}
                        variant={toastProps.variant}
                        title={toastProps.title}
                        description={toastProps.description}
                    />
                )
            },
        })

    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
            <ScrollView>
                <Box justifyContent='center' alignContent='center' gap='$7' m='$2' h='$full' pb='$3'>
                    <Text>
                        Completa los siguientes campos para crear el usuario
                    </Text>
                    <FormControl
                        size="lg"
                        minWidth="$80"
                        maxHeight="$96"
                        isDisabled={false}
                        isInvalid={touched.nombre && !!errors.nombre}
                        isReadOnly={false}
                        isRequired={true}
                    >
                        <Input variant='underlined'
                        >
                            <InputField type="text" value={values.nombre}
                                onChangeText={handleChange('nombre')}
                                onBlur={handleBlur('nombre')}
                                defaultValue="" placeholder="Nombres" />
                        </Input>
                        {touched.nombre && errors.nombre && (
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    {errors.nombre}
                                </FormControlErrorText>
                            </FormControlError>
                        )}
                    </FormControl>
                    <FormControl
                        size="lg"
                        isDisabled={false}
                        isInvalid={touched.apellido && !!errors.apellido}
                        isReadOnly={false}
                        isRequired={true}
                    >
                        <Input variant='underlined'>
                            <InputField type="text"
                                value={values.apellido}
                                onChangeText={handleChange('apellido')}
                                onBlur={handleBlur('apellido')}
                                defaultValue="" placeholder="Apellidos" />
                        </Input>
                        {touched.apellido && errors.apellido && (
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    {errors.apellido}
                                </FormControlErrorText>
                            </FormControlError>
                        )}
                    </FormControl>

                    <Select isInvalid={touched.tipoIdentificacion && !!errors.tipoIdentificacion} isRequired={true}
                        onValueChange={(value) => setFieldValue('tipoIdentificacion', value)}
                        // onClose={() => setFieldTouched('tipoIdentificacion', true)}
                        selectedValue={values.tipoIdentificacion}
                    >
                        <SelectTrigger variant="underlined" size="md" >
                            <SelectInput placeholder="Tipo de identificación" />
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
                                <SelectItem label="Cedula" value="cedula" />
                                <SelectItem label="Foráneo" value="tarjetaIdentidad" />
                                <SelectItem label="Pasaporte" value="pasaporte" />
                            </SelectContent>
                        </SelectPortal>
                        {touched.tipoIdentificacion && errors.tipoIdentificacion && (
                            <Box flexDirection="row" gap="$1">
                                <Icon color="$red700" as={AlertCircleIcon} />
                                <Text color="$red700">
                                    {errors.tipoIdentificacion}
                                </Text>
                            </Box>
                        )}
                    </Select>
                    <FormControl
                        size="lg"
                        minWidth="$80"
                        maxHeight="$96"
                        isDisabled={false}
                        isInvalid={touched.numeroIdentificacion && !!errors.numeroIdentificacion}
                        isReadOnly={false}
                        isRequired={true}
                    >
                        <Input variant='underlined'>
                            <InputField type="text"
                                value={values.numeroIdentificacion}
                                onChangeText={handleChange('numeroIdentificacion')}
                                onBlur={handleBlur('numeroIdentificacion')}
                                defaultValue=""
                                placeholder="Número identificación"
                                keyboardType='numeric' />
                        </Input>
                        {touched.numeroIdentificacion && errors.numeroIdentificacion && (
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    {errors.numeroIdentificacion}
                                </FormControlErrorText>
                            </FormControlError>
                        )}
                    </FormControl>
                    <FormControl
                        size="lg"
                        minWidth="$80"
                        maxHeight="$96"
                        isDisabled={false}
                        isInvalid={touched.telefono && !!errors.telefono}
                        isReadOnly={false}
                        isRequired={true}
                    >
                        <Input variant='underlined'>
                            <InputField type="text"
                                value={values.telefono}
                                onChangeText={handleChange('telefono')}
                                onBlur={handleBlur('telefono')}
                                defaultValue=""
                                placeholder="Teléfono o celular"
                                keyboardType='numeric' />
                        </Input>
                        {touched.telefono && errors.telefono && (
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    {errors.telefono}
                                </FormControlErrorText>
                            </FormControlError>
                        )}
                    </FormControl>
                    <FormControl
                        size="lg"
                        minWidth="$80"
                        maxHeight="$96"
                        isDisabled={false}
                        isInvalid={touched.email && !!errors.email}
                        isReadOnly={false}
                        isRequired={false}
                    >
                        <Input variant='underlined'>
                            <InputField type="text"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                defaultValue="" placeholder="Correo"
                                keyboardType="email-address"
                                autoCapitalize='none'
                            />
                        </Input>
                        {touched.email && errors.email && (
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    {errors.email}
                                </FormControlErrorText>
                            </FormControlError>
                        )}
                    </FormControl>
                    <FormControl
                        size="lg"
                        minWidth="$80"
                        maxHeight="$96"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                        isRequired={false}
                    >
                        <Input variant='underlined'>
                            <InputField type="text"
                                value={values.direccion}
                                onChangeText={handleChange('direccion')}
                                onBlur={handleBlur('direccion')}
                                defaultValue="" placeholder="Dirección" />
                        </Input>
                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                La dirección debe tener al memos 3 caracteres
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
                        isRequired={false}
                    >
                        <Input variant='underlined'>
                            <InputField type="text"
                                value={values.ocupacion}
                                onChangeText={handleChange('ocupacion')}
                                onBlur={handleBlur('ocupacion')}
                                defaultValue="" placeholder="Trabajo actual" />
                        </Input>
                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                {errors.ocupacion}
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>

                    <FormControl
                        size="lg"
                        minWidth="$80"
                        maxHeight="$96"
                        isDisabled={false}
                        isInvalid={touched.fechaNacimiento && !!errors.fechaNacimiento}
                        isReadOnly={false}
                        isRequired={false}
                    >
                        <Input variant='underlined'>
                            <Button
                                size="md"
                                variant="link"
                                rounded="$full"
                                action="default"
                                isDisabled={false}
                                isFocusVisible={false}
                                onPress={() => setShow(true)}
                                width='100%'
                            >
                                <Box justifyContent="space-between" flexDirection="row" gap='$40'>
                                    <ButtonText color='$blueGray400'>Seleccionar fecha de nacimiento
                                    </ButtonText>
                                    <Box>
                                        <ButtonIcon color='$black' as={CalendarDaysIcon} size='md' />
                                    </Box>
                                </Box>
                            </Button>
                        </Input>
                        {show && (<DateTimePicker
                            testID="dateTimePicker"
                            value={values.fechaNacimiento}
                            mode='date'
                            is24Hour={true}
                            onChange={(event, selectedDate) => {
                                const currentDate = selectedDate || values.fechaNacimiento
                                const localDate = new Date(
                                    currentDate.getFullYear(),
                                    currentDate.getMonth(),
                                    currentDate.getDate(),
                                )
                                setShow(false)
                                setFieldValue('fechaNacimiento', localDate)
                                setFieldTouched('fechaNacimiento', true)
                            }}
                            maximumDate={new Date()}
                            minimumDate={new Date(1920, 1, 1)}
                            timeZoneName="America/Bogota"

                        />
                        )}
                    </FormControl>

                    <Select isInvalid={touched.rol && !!errors.rol} isRequired={true}
                        onValueChange={(value) => setFieldValue('rol', value)}
                        // onClose={() => setFieldTouched('rol', true)}
                        selectedValue={values.rol}
                    >
                        <SelectTrigger variant="underlined" size="md" >
                            <SelectInput placeholder="Seleccione el rol" />
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
                                <SelectItem label="Residente" value="residente" />
                                <SelectItem label="Foraneo" value="foraneo" />
                                <SelectItem label="Visitante" value="visitante" />
                            </SelectContent>
                        </SelectPortal>
                        {touched.rol && errors.rol && (
                            <Box flexDirection="row" gap="$1">
                                <Icon color="$red700" as={AlertCircleIcon} />
                                <Text color="$red700">
                                    {errors.rol}
                                </Text>
                            </Box>
                        )}
                    </Select>

                    <Select isInvalid={touched.genero && !!errors.genero} isRequired={true}
                        onValueChange={(value) => setFieldValue('genero', value)}
                        // onClose={() => setFieldTouched('genero', true)}
                        selectedValue={values.genero}
                    >
                        <SelectTrigger variant="underlined" size="md" >
                            <SelectInput placeholder="Seleccione su género" />
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
                                <SelectItem label="Masculino" value="masculino" />
                                <SelectItem label="Feminino" value="femenino" />
                            </SelectContent>
                        </SelectPortal>
                        {touched.genero && errors.genero && (
                            <Box flexDirection="row" gap="$1">
                                <Icon color="$red700" as={AlertCircleIcon} />
                                <Text color="$red700">
                                    {errors.genero}
                                </Text>
                            </Box>
                        )}
                    </Select>

                    <Select isInvalid={touched.estadoCivil && !!errors.estadoCivil} isRequired={true}
                        onValueChange={(value) => setFieldValue('estadoCivil', value)}
                        onClose={() => setFieldTouched('estadoCivil', true)}
                        selectedValue={values.estadoCivil}
                    >
                        <SelectTrigger variant="underlined" size="md" >
                            <SelectInput placeholder="Seleccione su estado civil" />
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
                                <SelectItem label="Soltero(a)" value="soltero" />
                                <SelectItem label="Casado(a)" value="casado" />
                                <SelectItem label="Union libre" value="unionLibre" />
                                <SelectItem label="Divorsiado(a)" value="divorsiado" />
                            </SelectContent>
                        </SelectPortal>
                        {touched.estadoCivil && errors.estadoCivil && (
                            <Box flexDirection="row" gap="$1">
                                <Icon color="$red700" as={AlertCircleIcon} />
                                <Text color="$red700">
                                    {errors.estadoCivil}
                                </Text>
                            </Box>
                        )}
                    </Select>

                    <Button onPress={
                        handleSubmit
                    } // navigation.navigate(Screens.Home);
                        size="md" mt="$2" variant="solid" bgColor='$primary500' action="primary" isDisabled={false} isFocusVisible={false} >
                        <ButtonText>Crear usuario</ButtonText>
                    </Button>

                </Box>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}

export default CreateUser;