import React, { Component } from 'react'
import { Text, View, StyleSheet, Butto, Image, TouchableOpacity, Alert } from 'react-native'
import {Avatar} from 'react-native-paper'

export default function Profile({ route, navigation }) {
    /* 2. Get the param */
    const { post } = route.params;
   function alertar(){
        Alert.alert('Você clicou na imagem!')
    }
    return (
      <View style={styles.container}>
            <Text style={styles.textTitle}>Detalhes do Autor</Text>
            <TouchableOpacity onPress={() => alertar()}>
                <Avatar.Image source={{ uri: post.avatarURI }} size={180} /> 
            </TouchableOpacity>
            
            <Text style={styles.textLegend}>{post.name}</Text> 

            <TouchableOpacity style={styles.caixaButton}>
                <Text style={styles.button}>Logout</Text>
            </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F8FF'
    },
    textTitle: {
        fontSize: 40,
        color: '#0040FF',
        
        
    },
    textLegend: {
        fontSize: 30
    },
    button: {
        fontSize: 20,
        color: '#fff'
    },
    caixaButton: {
        backgroundColor: '#1E90FF',
        width: '40%',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 35
    }
})