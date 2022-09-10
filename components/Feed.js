import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {
    const posts = [
        {
            id: 1,
            nome: 'Pernalonga',
            imgPerfil: require('../assets/images/pernalonga.jpg'),
            img: require('../assets/images/pernalonga.jpg'),
            aspectRatio: 0.756,
        },
        {
            id: 2,
            nome: 'Pernalonga',
            imgPerfil: require('../assets/images/pernalonga.jpg'),
            img: require('../assets/images/pernalonga.jpg'),
            aspectRatio: 0.756,
        },
        {
            id: 3,
            nome: 'Pernalonga',
            imgPerfil: require('../assets/images/pernalonga.jpg'),
            img: require('../assets/images/pernalonga.jpg'),
            aspectRatio:  0.756,
        }
    ];

    function RenderItem({ item }) {
        return (
            <View style={styles.post}>
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                        <Image style={styles.postheaderimg} source={item.imgPerfil} />
                        <Text>{item.nome}</Text>
                    </View>
                    <FontAwesome5 name='ellipsis-h' size={16} color='black' />
                </View>
                    <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={item.img} />
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name='heart' size={36} color='black' />
                    <FontAwesome5 style={styles.footericon} name='comment' size={36} color='black' />
                    <View />
                </View>
            </View>
        );
    }
    return (
        <FlatList
            data={posts}
            renderItem={RenderItem}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
        />
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
        alignItems: 'center',
        padding: 5,
    },
    footericon: {
        margin: 5,
    }
});