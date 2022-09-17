import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Stories from './Stories';

export default function Feed() {
    const [feed,setFeed] = useState([]);

    useEffect(function(){
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3000/feed');
            const feed = await response.json();
            setFeed(feed);
        }
        getData();
    },[]);
    function RenderItem({ item, index }) {
        return (
            <View style={styles.post}>
                {index === 0 && <Stories/>}
                <View style={styles.postheader}>
                    <View style={styles.postheaderesquerda}>
                        <Image style={styles.postheaderimg} source={{uri:item.imgPerfilUri}} />
                        <Text>{item.nomeUsuario}</Text>
                    </View>
                    <FontAwesome5 name='ellipsis-h' size={16} color='black' />
                </View>
                    <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={{uri:item.imgPostUri}} />
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
            data={feed}
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