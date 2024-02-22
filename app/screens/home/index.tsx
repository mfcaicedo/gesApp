import {
    GluestackUIProvider, Text, Box, Center, Button, ButtonText, Image, Heading
} from '@gluestack-ui/themed';
import { config } from "../../../config/gluestack-ui.config";
const logoGesApp = require('../../../assets/images/logo-grande.jpg');

const Index = () => {
    return (
        <GluestackUIProvider config={config} >
            <Box justifyContent="center" h="100%">
                <Center>
                    <Image
                        size="2xl" borderRadius="$sm"
                        source={logoGesApp}
                        alt="GesApp"
                        mb="$12"
                    />
                    <Heading bold size="2xl" >Bienvenido a GesApp</Heading>
                    <Box>
                        <Text bold size="xl">
                            Ahora desde aquí prodrá gestionar su comunidad!
                        </Text>
                        <Button size="md" mt="$20" variant="solid" bgColor='$primary500' action="primary" isDisabled={false} isFocusVisible={false} >
                            <ButtonText>Continuar</ButtonText>
                        </Button>
                    </Box>
                </Center>
            </Box>
        </GluestackUIProvider>
    )
}
export default Index;