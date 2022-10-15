import { StyleSheet, View, Image, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header({navigation}) {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/ufrngram.png")} style={styles.ufrngram} />
            <FontAwesome5 name='paper-plane' size={24} color='black' onPress={() => navigation.navigate('ChatListScrenn')} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      padding: 10,
      height: 50,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    ufrngram: {
      width: 110,
      height: 25
    },
  });