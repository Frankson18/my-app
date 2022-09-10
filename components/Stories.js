import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Stories() {
    const stories = [
        {
            id: 1,
            nome: 'Perna',
            src: require('../assets/images/pernalonga.jpg')
        },
        {
            id: 2,
            nome: 'Perna',
            src: require('../assets/images/pernalonga.jpg')
        },
        {
            id: 3,
            nome: 'Perna',
            src: require('../assets/images/pernalonga.jpg')
        },
        {
            id: 4,
            nome: 'Perna',
            src: require('../assets/images/pernalonga.jpg')
        },
        {
            id: 5,
            nome: 'Perna',
            src: require('../assets/images/pernalonga.jpg')
        },
        {
            id: 6,
            nome: 'Perna',
            src: require('../assets/images/pernalonga.jpg')
        }
    ];

    function RenderItem({ item }) {
        return (
            <View style={styles.story}>
                <Image style={styles.imstory} source={item.src} />
                <Text>{item.nome}</Text>
            </View>
        );
    }
    return (
        <View style={styles.stories}>
            <FlatList
                data={stories}
                renderItem={RenderItem}
                keyExtractor={item =>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
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