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
} from "@gluestack-ui/themed";
import { Platform, ScrollView } from "react-native";
import { Screens } from "../../enums/navigation/screens.enum";
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from "react-native-safe-area-context";
import userService from "../../services/user-management/userService";

import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { UserRequest } from "../../models/user-management/userModel";

const CreateUser = ({ navigation }: { navigation: any }) => {

    const [show, setShow] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('El nombre es obligatorio'),
        lastName: Yup.string().required('El apellido es obligatorio'),
        identificationType: Yup.string().required('El tipo de identificación es obligatorio'),
        identificationNumber: Yup.string().required('El número de identificación es obligatorio'),
        phone: Yup.string().min(10, 'El número de teléfono debe tener al menos 10 caracteres'),
        email: Yup.string().email('El correo no es válido'),
        role: Yup.string().required('El rol es obligatorio'),
        gender: Yup.string().required('El género es obligatorio'),
    });

    const { values, isSubmitting, setFieldValue, errors, touched, handleSubmit, handleChange, handleBlur, setFieldTouched } = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            identificationType: '',
            identificationNumber: '',
            phone: '',
            email: '',
            address: '',
            birthdate: new Date(),
            urlPhoto: '',
            role: '',
            country: 'Colombia',
            department: 'Cauca',
            city: 'Bolívar',
            gender: '',
            disability: '',
            civilStatus: '',
            job: '',

        },
        validationSchema: validationSchema,
        onSubmit: values => {
            // console.log("los valores", values);
            const userRequest: UserRequest = {
                ...values
            }
            createUser(values);
        }
    });

    const createUser = async (values: UserRequest) => {
        await userService.saveUser(values);

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
                        isInvalid={touched.name && !!errors.name}
                        isReadOnly={false}
                        isRequired={true}
                    >
                        <Input variant='underlined'
                        >
                            <InputField type="text" value={values.name}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                defaultValue="" placeholder="Nombres" />
                        </Input>
                        {touched.name && errors.name && (
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    {errors.name}
                                </FormControlErrorText>
                            </FormControlError>
                        )}
                    </FormControl>
                    <FormControl
                        size="lg"
                        isDisabled={false}
                        isInvalid={touched.lastName && !!errors.lastName}
                        isReadOnly={false}
                        isRequired={true}
                    >
                        <Input variant='underlined'>
                            <InputField type="text"
                                value={values.lastName}
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                defaultValue="" placeholder="Apellidos" />
                        </Input>
                        {touched.lastName && errors.lastName && (
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    {errors.lastName}
                                </FormControlErrorText>
                            </FormControlError>
                        )}
                    </FormControl>

                    <Select isInvalid={touched.identificationType && !!errors.identificationType} isRequired={true}
                        onValueChange={(value) => setFieldValue('identificationType', value)}
                        // onClose={() => setFieldTouched('identificationType', true)}
                        selectedValue={values.identificationType}
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
                        {touched.identificationType && errors.identificationType && (
                            <Box flexDirection="row" gap="$1">
                                <Icon color="$red700" as={AlertCircleIcon} />
                                <Text color="$red700">
                                    {errors.identificationType}
                                </Text>
                            </Box>
                        )}
                    </Select>
                    <FormControl
                        size="lg"
                        minWidth="$80"
                        maxHeight="$96"
                        isDisabled={false}
                        isInvalid={touched.identificationNumber && !!errors.identificationNumber}
                        isReadOnly={false}
                        isRequired={true}
                    >
                        <Input variant='underlined'>
                            <InputField type="text"
                                value={values.identificationNumber}
                                onChangeText={handleChange('identificationNumber')}
                                onBlur={handleBlur('identificationNumber')}
                                defaultValue=""
                                placeholder="Número identificación"
                                keyboardType='numeric' />
                        </Input>
                        {touched.identificationNumber && errors.identificationNumber && (
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    {errors.identificationNumber}
                                </FormControlErrorText>
                            </FormControlError>
                        )}
                    </FormControl>
                    <FormControl
                        size="lg"
                        minWidth="$80"
                        maxHeight="$96"
                        isDisabled={false}
                        isInvalid={touched.phone && !!errors.phone}
                        isReadOnly={false}
                        isRequired={true}
                    >
                        <Input variant='underlined'>
                            <InputField type="text"
                                value={values.phone}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                defaultValue=""
                                placeholder="Teléfono o celular"
                                keyboardType='numeric' />
                        </Input>
                        {touched.phone && errors.phone && (
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    {errors.phone}
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
                                value={values.address}
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
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
                                value={values.job}
                                onChangeText={handleChange('job')}
                                onBlur={handleBlur('job')}
                                defaultValue="" placeholder="Trabajo actual" />
                        </Input>
                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                {errors.job}
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>

                    <FormControl
                        size="lg"
                        minWidth="$80"
                        maxHeight="$96"
                        isDisabled={false}
                        isInvalid={touched.birthdate && !!errors.birthdate}
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
                            value={values.birthdate}
                            mode='date'
                            is24Hour={true}
                            onChange={(event, selectedDate) => {
                                const currentDate = selectedDate || values.birthdate
                                const localDate = new Date(
                                    currentDate.getFullYear(),
                                    currentDate.getMonth(),
                                    currentDate.getDate(),
                                )
                                setShow(false)
                                setFieldValue('birthdate', localDate)
                                setFieldTouched('birthdate', true)
                            }}
                            maximumDate={new Date()}
                            minimumDate={new Date(1920, 1, 1)}
                            timeZoneName="America/Bogota"

                        />
                        )}
                    </FormControl>

                    <Select isInvalid={touched.role && !!errors.role} isRequired={true}
                        onValueChange={(value) => setFieldValue('role', value)}
                        // onClose={() => setFieldTouched('role', true)}
                        selectedValue={values.role}
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
                        {touched.role && errors.role && (
                            <Box flexDirection="row" gap="$1">
                                <Icon color="$red700" as={AlertCircleIcon} />
                                <Text color="$red700">
                                    {errors.role}
                                </Text>
                            </Box>
                        )}
                    </Select>

                    <Select isInvalid={touched.gender && !!errors.gender} isRequired={true}
                        onValueChange={(value) => setFieldValue('gender', value)}
                        // onClose={() => setFieldTouched('gender', true)}
                        selectedValue={values.gender}
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
                        {touched.gender && errors.gender && (
                            <Box flexDirection="row" gap="$1">
                                <Icon color="$red700" as={AlertCircleIcon} />
                                <Text color="$red700">
                                    {errors.gender}
                                </Text>
                            </Box>
                        )}
                    </Select>

                    <Select isInvalid={touched.civilStatus && !!errors.civilStatus} isRequired={true}
                        onValueChange={(value) => setFieldValue('civilStatus', value)}
                        onClose={() => setFieldTouched('civilStatus', true)}
                        selectedValue={values.civilStatus}
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
                        {touched.civilStatus && errors.civilStatus && (
                            <Box flexDirection="row" gap="$1">
                                <Icon color="$red700" as={AlertCircleIcon} />
                                <Text color="$red700">
                                    {errors.civilStatus}
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