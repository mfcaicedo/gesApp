import { config } from '@gluestack-ui/config';
import {
    Text, Box, Center, Button, ButtonText, Image, Heading, GluestackUIProvider
} from '@gluestack-ui/themed';
const logoGesApp = require('../../../assets/images/logo-big.png');

const Welcome = ({ navigation }: { navigation: any }) => {
    return (
        <Box justifyContent="space-between" h="100%" mx="$2">
            <Center>
                <Image
                    size="2xl"
                    source={logoGesApp}
                    alt="GesApp"
                    mb="$12"
                    mt="$20"
                />
                <Heading bold size="2xl" >Bienvenido a GesApp</Heading>
                <Box>
                    <Text bold size="xl">
                        Ahora desde aquí prodrá gestionar su comunidad!
                    </Text>
                </Box>
            </Center>
            <Button onPress={() => {
                navigation.navigate('Login')
            }}
                size="lg" mx="$2" mb="$10" variant="solid" bgColor='$primary500' action="primary" isDisabled={false} isFocusVisible={false} >
                <ButtonText>Continuar</ButtonText>
            </Button>
        </Box>
    )
}
export default Welcome;