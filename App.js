import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={require("./assets/images/ufrngram.png")} style={styles.ufrngram} />
        <FontAwesome5 name='paper-plane' size={24} color='black' />
      </View>
      <View style={styles.stories}>
        <View style={styles.story}>
          <Image style={styles.imstory} source={require('./assets/images/pernalonga.jpg')} />
          <Text>Perna</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imstory} source={require('./assets/images/pernalonga.jpg')} />
          <Text>Perna</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imstory} source={require('./assets/images/pernalonga.jpg')} />
          <Text>Perna</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imstory} source={require('./assets/images/pernalonga.jpg')} />
          <Text>Perna</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imstory} source={require('./assets/images/pernalonga.jpg')} />
          <Text>Perna</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imstory} source={require('./assets/images/pernalonga.jpg')} />
          <Text>Perna</Text>
        </View>
      </View>
      <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image style={styles.postheaderimg} source={require('./assets/images/pernalonga.jpg')} />
              <Text>pernalonga</Text>
            </View>
            <FontAwesome5 name='ellipsis-h' size={16} color='black' />
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/images/pernalonga.jpg')} />
        </View>
        <View style={styles.footer}>
          <FontAwesome5  style={ styles.footericon} name='heart' size={36} color='black' />
          <FontAwesome5  style={ styles.footericon} name='comment' size={36} color='black' />
          <View />
        </View>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image style={styles.postheaderimg} source={require('./assets/images/pernalonga.jpg')} />
              <Text>pernalonga</Text>
            </View>
            <FontAwesome5 name='ellipsis-h' size={16} color='black' />
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/images/pernalonga.jpg')} />
        </View>
        <View style={styles.footer}>
          <FontAwesome5  style={ styles.footericon} name='heart' size={36} color='black' />
          <FontAwesome5  style={ styles.footericon} name='comment' size={36} color='black' />
          <View />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  },
  texto: {
    color: "#3A438F",
    fontSize: 30
  },
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
  stories: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: '#fff'
  },
  story: {
    height: 90,
    width: 90,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  imstory: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
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
