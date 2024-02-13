import { StyleSheet, View, Text } from 'react-native';

const IndexApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola mundo, GesApp</Text>
      <View style={styles.separator} />
    </View>
  );
}

export default IndexApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
