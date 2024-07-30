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
} from "@gluestack-ui/themed";
import { ScrollView } from "react-native";
import { Screens } from "../../enums/navigation/screens.enum";
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from "react-native-safe-area-context";

import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const CreateUser = ({ navigation }: { navigation: any }) => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('El nombre es obligatorio'),
        lastName: Yup.string().required('El apellido es obligatorio'),
        identificationType: Yup.string().required('El tipo de identificación es obligatorio'),
        identificationNumber: Yup.string().required('El número de identificación es obligatorio'),
        phone: Yup.string().min(10, 'El número de teléfono debe tener al menos 10 caracteres'),
        email: Yup.string().email('El correo no es válido'),
        address: Yup.string().min(3, 'La dirección debe tener al menos 3 caracteres'),
    });

    const { values, isSubmitting, setFieldValue, errors, touched, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            identificationType: '',
            identificationNumber: '',
            phone: '',
            email: '',
            address: '',
            birthdate: new Date(),
            role: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log("los valores", values);
            // navigation.navigate(Screens.Home);
        }
    });

    return (
        <Box justifyContent='center' alignContent='center' gap='$7' m='$2'>
            <Text>
                Completa los siguientes campos para crear el usuario
                {JSON.stringify(errors)}
            </Text>
            <FormControl
                size="lg"
                minWidth="$80"
                maxHeight="$96"
                isDisabled={false}
                isInvalid={errors.name !== '' ? true : false}
                isReadOnly={false}
                isRequired={true}
            >
                <Input variant='underlined'
                >
                    <InputField type="text" value={values.name}
                        onChangeText={(text) => setFieldValue('name', text)}
                        defaultValue="" placeholder="Nombres" />
                </Input>
                {errors.name && (
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
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
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

            <Select isInvalid={errors.identificationType !== '' ? true : false} isRequired={true}
                onValueChange={(value) => setFieldValue('identificationType', value)}>
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
                        <SelectItem label="Tarjeta Identidad" value="tarjetaIdentidad" />
                        <SelectItem label="Pasaporte" value="passport" />
                    </SelectContent>
                </SelectPortal>
                {errors.identificationType && (
                    <Text>
                        {errors.identificationType}
                    </Text>
                )}
            </Select>
            <FormControl
                size="lg"
                minWidth="$80"
                maxHeight="$96"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
            >
                <Input variant='underlined'>
                    <InputField type="text" defaultValue=""
                        placeholder="Número identificación"
                        keyboardType='numeric' />
                </Input>
                <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                        El número de identificación es obligatorio
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
            >
                <Input variant='underlined'>
                    <InputField type="text" defaultValue=""
                        placeholder="Teléfono o celular"
                        keyboardType='numeric' />
                </Input>
                <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                        No se permiten caracteres especiales
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
                    <InputField type="text" defaultValue="" placeholder="Correo" />
                </Input>
                <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                        Ingrese un correo válido
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
                    <InputField type="text" defaultValue="" placeholder="Dirección" />
                </Input>
                <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                        La dirección debe tener al memos 3 caracteres
                    </FormControlErrorText>
                </FormControlError>
            </FormControl>

            {/* <DateTimerPickerGeneric /> */}

            <Button onPress={
                handleSubmit
            } // navigation.navigate(Screens.Home);
                size="md" mt="$2" variant="solid" bgColor='$primary500' action="primary" isDisabled={false} isFocusVisible={false} >
                <ButtonText>Crear cuenta</ButtonText>
            </Button>
        </Box>
    );
}

export const DateTimerPickerGeneric = () => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = ({ event, selectedDate }: { event: any, selectedDate: any }) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: string) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <SafeAreaView>
            <Button
                size="md"
                variant="link"
                rounded="$full"
                action="default"
                isDisabled={false}
                isFocusVisible={false}
                onPress={showDatepicker}
            >
                <ButtonText color='$blueGray400' >Seleccionar fecha de nacimiento</ButtonText>
                <ButtonIcon color='$black' as={CalendarDaysIcon} size='md' />
            </Button>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </SafeAreaView>
    );
};

export default CreateUser;