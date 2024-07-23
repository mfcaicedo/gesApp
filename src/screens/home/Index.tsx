import React, { useState } from 'react';
import {
    GluestackUIProvider, Text, Box, Card, Center, Button, ButtonText, Image, Heading, FormControl, Input, InputField,
    FormControlError, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon, useToast, SearchIcon, Icon, ButtonIcon, AddIcon
} from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
const logoGesApp = require('../../../assets/images/logo-grande.jpg');

const Index = ({ navigation }: { navigation: any }) => {

    const handlePressEvent = () => {
        console.log('press event');
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
                    <Card size="lg" justifyContent='center' alignItems='center' flexDirection='row' mt='$1'
                        w='$full' variant="elevated">
                        <Box flex={1} alignItems="center">
                            {/* <Image
                                size="2xl" $xs-borderRadius="$sm"
                                source={iconoFiet}
                                alt="icono Fiet"
                                resizeMode='contain'
                                w='$20'
                                h='$20'
                            /> */}
                        </Box>
                        <Box flex={2}>
                            <Heading size="md">
                                Reunión JAC
                            </Heading>
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