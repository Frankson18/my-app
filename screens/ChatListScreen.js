import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

export default function ChatListScreen({ navigation }) {
    const [chatlist, setChatList] = useState([]);
    useEffect(() => {

        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3000/chatlist');
            const chatlist = await response.json();
            setChatList(chatlist);
        }
        getData();
    }, []);

    function renderItem({ item }) {
        return (
            <TouchableOpacity style={Styles.chat} onPress={() => navigation.navigate('ChatScreen', {id : item.id})}>
                <Image style={Styles.image} source={{ uri: item.imgPerfilUri }} />
                <View style={Styles.textBox}>
                    <Text style={Styles.nome}>{item.nomeUsuario}</Text>
                    <Text>{item.ultimaMensagem}</Text>
                </View>
            </TouchableOpacity>);
    }

    return (
        <View style={Styles.container}>
            <StatusBar style='auto' />
            <FlatList
                data={chatlist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    chat: {
        height: 60,
        flexDirection: 'row',
    },
    image: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
    },
    textBox: {
        justifyContent: "center",
    },
    nome: {
        fontWeight: "bold"
    }
})