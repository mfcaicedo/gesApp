import React, { useState } from 'react';
import {
    Text, Box, Card, Center, Button, ButtonText, Image, Heading, FormControl, Input, InputField,
    FormControlError, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon, useToast, SearchIcon, Icon, ButtonIcon,
    AddIcon, HStack, CalendarDaysIcon, ClockIcon, BellIcon
} from '@gluestack-ui/themed';
import { Users } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
const logoGesApp = require('../../../assets/images/logo-grande.jpg');

const Index = ({ navigation }: { navigation: any }) => {

    const handlePressEvent = () => {
        console.log('press event');
        navigation.openDrawer();
    }

    return (
        <Box justifyContent="flex-start" h="100%" mx="$2" my="$2">
            <Box>
                <SearchComponent />
            </Box>
            <Box mt='$2'>
                <Text bold>
                    Tus eventos
                </Text>
                <TouchableOpacity onPress={handlePressEvent}>
                    <Card size="lg" justifyContent='flex-start' flexDirection='row' mt='$1'
                        w='$full' variant="elevated" bgColor='$primary500'>
                        <Box gap='$2' w='$full'>
                            <Heading size="md" color='$white'>
                                Reunión JAC
                            </Heading>
                            <Text color='$white'>Reunión de caracter obligatorio</Text>
                            <Box justifyContent='space-between' flexDirection='row'>
                                <HStack gap='$1'>
                                    <Icon as={CalendarDaysIcon} size="md" color='$white' />
                                    <Text color='$white'>01 - Oct - 2024</Text>
                                </HStack>
                                <HStack gap='$1'>
                                    <Icon as={ClockIcon} size="md" color='$white' />
                                    <Text color='$white'>02:00 PM - 04:00 PM </Text>
                                </HStack>
                            </Box>
                            <Box justifyContent='space-between' flexDirection='row'>
                                <HStack gap='$1'>
                                    <Icon as={BellIcon} size="md" color='$white' />
                                    <Text color='$white'>10 minutos antes</Text>
                                </HStack>
                                <HStack gap='$1'>
                                    <Text color='$white'>Evento: </Text>
                                    <Text color='$white' bold>Reunion </Text>
                                </HStack>
                            </Box>
                            <HStack gap='$1'>
                                <Icon color='$white' as={Users} />
                                <Text color='$white'>40 invitados </Text>
                            </HStack>
                        </Box>
                    </Card>
                </TouchableOpacity>
            </Box>
        </Box>
    )
}

const SearchComponent = () => {

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
                            placeholder="Buscar evento"
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
                    onPress={() => console.log('add event')}
                >
                    <ButtonIcon color='$white' as={AddIcon} size='lg' />
                </Button>
            </Box>
        </Box>
    )
}

export default Index;