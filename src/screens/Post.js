import React, { useState, useEffect } from 'react';
import {Image, View, Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

export default function ImagePickerExample({navigation}) {
  const [image, setImage] = useState(null);
 
  

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }

  };
  
  return (
    <View style={styles.container}>
      
      {image && <Image source={{ uri: image }} style={styles.styleImage} />}
        
      
      <TouchableOpacity style={styles.caixaButton} onPress={pickImage}>
          <Text>Fotografe a Promoção</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.caixaButton} onPress={() => navigation.navigate('Promoções')}>
          <Text>Publique a Promoção</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    styleImage: {
        borderRadius: 8,
        width: 350,
        height: 350
    },
    caixaButton: {
        marginTop: 50,
        backgroundColor: '#40b9ff',
        borderRadius: 8,
        width: 300,
        alignItems: 'center',
        padding: 8
        
        
    },
    
})