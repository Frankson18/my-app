import { StyleSheet, Text, View, Image, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {
    return (
        <View style={styles.feed}>
            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                        <Image style={styles.postheaderimg} source={require('../assets/images/pernalonga.jpg')} />
                        <Text>pernalonga</Text>
                    </View>
                    <FontAwesome5 name='ellipsis-h' size={16} color='black' />
                </View>
                <Image style={styles.postimg} aspectRatio={1.777} source={require('../assets/images/pernalonga.jpg')} />
            </View>
            <View style={styles.footer}>
                <FontAwesome5 style={styles.footericon} name='heart' size={36} color='black' />
                <FontAwesome5 style={styles.footericon} name='comment' size={36} color='black' />
                <View />
            </View>
            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                        <Image style={styles.postheaderimg} source={require('../assets/images/pernalonga.jpg')} />
                        <Text>pernalonga</Text>
                    </View>
                    <FontAwesome5 name='ellipsis-h' size={16} color='black' />
                </View>
                <Image style={styles.postimg} aspectRatio={1.777} source={require('../assets/images/pernalonga.jpg')} />
            </View>
            <View style={styles.footer}>
                <FontAwesome5 style={styles.footericon} name='heart' size={36} color='black' />
                <FontAwesome5 style={styles.footericon} name='comment' size={36} color='black' />
                <View />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    feed: {
      flex: 1,
      backgroundColor: '#fff',
    },
    post: {
      backgroundColor: '#fff',
    },
    postheader: {
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5,
    },
    postheaderesquerda: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    postheaderimg: {
      height: 50,
      width: 50,
      borderRadius: 25,
      marginRight: 5,
    },
    postimg: {
      width: '100%',
      height: undefined,
    },
    footer: {
      height: 60,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems:'center',
      padding: 5,
    },
    footericon:{
      margin:5,
    }
  });