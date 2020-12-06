import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default function Feed({ navigation}) {
        
        return (
            <View style={styles.container}>
                <Text> Feed</Text>



                
                
                <TouchableOpacity
                 onPress={() => navigation.navigate('Postar')}
                 style={styles.caixaButton}>
                    <Text>Poste uma Promoção</Text>
                </TouchableOpacity>
            </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    caixaButton: {
        marginTop: 50,
        backgroundColor: '#1E90FF',
        borderRadius: 8,
        width: 300,
        alignItems: 'center',
        padding: 8
    }
})