import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavRoute from './screens/NavRoute';
// import loginScreen from './src/loginScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <navRoute/>
    //   <StatusBar style="auto" />
    // </View>
    <View >
      <NavRoute/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgb(0, 117, 94)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
