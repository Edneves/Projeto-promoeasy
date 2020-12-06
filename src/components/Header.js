import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, Image } from 'react-native'
import icon from '../../assets/favicon.png'

class Header extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Promo Fácil</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#013ADF',
        height: 30,
        fontSize: 28,
        paddingLeft: 15,
       
        
    }
})

export default Header