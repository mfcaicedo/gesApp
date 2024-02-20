import {
    GluestackUIProvider, Text, Box, Center, Button, ButtonText, ButtonIcon, AddIcon
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

const Index = () => {
    return (
        <GluestackUIProvider config={config} >

            <Center>
                <Text bold >Bienvenido a GesApp</Text>
                <Box>
                    <Text>
                        Ahora desde aquí prodrá gestionar su comunidad!
                    </Text>
                    <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} >
                        <ButtonText>Continuar</ButtonText>
                    </Button>
                </Box>
            </Center>
        </GluestackUIProvider>
    )
}
export default Index;