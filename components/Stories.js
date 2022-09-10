import { StyleSheet, Text, View, Image, } from 'react-native';

export default function Stories() {
    return (
        <View style={styles.stories}>
            <View style={styles.story}>
                <Image style={styles.imstory} source={require('../assets/images/pernalonga.jpg')} />
                <Text>Perna</Text>
            </View>
            <View style={styles.story}>
                <Image style={styles.imstory} source={require('../assets/images/pernalonga.jpg')} />
                <Text>Perna</Text>
            </View>
            <View style={styles.story}>
                <Image style={styles.imstory} source={require('../assets/images/pernalonga.jpg')} />
                <Text>Perna</Text>
            </View>
            <View style={styles.story}>
                <Image style={styles.imstory} source={require('../assets/images/pernalonga.jpg')} />
                <Text>Perna</Text>
            </View>
            <View style={styles.story}>
                <Image style={styles.imstory} source={require('../assets/images/pernalonga.jpg')} />
                <Text>Perna</Text>
            </View>
            <View style={styles.story}>
                <Image style={styles.imstory} source={require('../assets/images/pernalonga.jpg')} />
                <Text>Perna</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
  });