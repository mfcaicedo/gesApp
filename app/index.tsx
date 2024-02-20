import { GluestackUIProvider, Text, Box, Center } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

const IndexApp = () => {
  return (
    <GluestackUIProvider config={config} >
      <Center  bg='red' h={600} w={300} marginVertical={'auto'} marginHorizontal={0} >
        {/* <Box width="100%" justifyContent="center" alignItems="center"> */}
          <Text>GesApp con nativeBase</Text>
        {/* </Box> */}
      </Center>
    </GluestackUIProvider>
  );
}
export default IndexApp;