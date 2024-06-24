import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, Box, Text, Image, StyledProvider } from '@gluestack-ui/themed';
import NavigationApp from './src/navigation/NavigationApp';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <GluestackUIProvider config={config}>
        <Box
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
          height="100%"
        >
          <NavigationApp />
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
