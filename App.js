import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello world</Text>
      <StatusBar style="auto" />
      <Image
        style={
          styles.image
        }
        source={
        require('./image/pernalonga.jpg')}/>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:"#3A438F",
    fontSize:30
  },
  image:{
    width:200,
    height:200,
    resizeMode: "stretch"
  }
});
