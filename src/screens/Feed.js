import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import { Avatar } from 'react-native-paper'


const DATA = [
    {
        id: 1,
        postTitle: 'Promoção!!!',
        name: 'Marcela Almeida',
        avatarURI:
        'https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        imageURI:
          'https://www.promofrimesa.com.br/img/logo-promocao.png',
        randomText:
          'Já vou correndo!! rsrsr". '
      },
      {
        id: 2,
        postTitle: 'Promoção!!!',
        name: 'Letícia Soares',
        avatarURI:
          'https://images.pexels.com/photos/1895915/pexels-photo-1895915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        imageURI:
          'https://i.pinimg.com/originals/f7/dd/11/f7dd117a06022d318c7f7210b991d154.jpg',
        randomText:
          'Gostei da promoção!!! '
      },
      {
        id: 3,
        postTitle: 'Promoção!!!',
        name: 'Paulo Almeida',
        avatarURI:
          'https://images.pexels.com/photos/3772618/pexels-photo-3772618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        imageURI:
          'https://www.portalb1.com/images/noticias/4803/55db9d63d8c42fee296ed4d5b48e25a1.JPG',
        randomText:
          'Promoção valendo!!! '
      },
      {
        id: 4,
        postTitle: 'Promoção!!!',
        name: 'Mariana Ferreira',
        avatarURI:
          'https://images.pexels.com/photos/4603592/pexels-photo-4603592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        imageURI:
          'https://ogimg.infoglobo.com.br/in/22235311-4a0-2db/FT1086A/652/supermercados-nova.jpg',
        randomText:
          'Gostei da promoção!!! '
      },
      {
        id: 5,
        postTitle: 'Promoção!!!',
        name: 'Jonas Oliveira',
        avatarURI:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        imageURI:
          'https://bhaz.com.br/wp-content/uploads/2017/05/picanha.png',
        randomText:
          'Galera corre que vai acabar!!! '
      },
      {
        id: 6,
        postTitle: 'Promoção!!!',
        name: 'Abraão Santos',
        avatarURI:
          'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        imageURI:
          'https://fastly.4sqi.net/img/general/600x600/856584_lN0BSsbhpur08d3HikC_Qbz1L9EHwJUADH5U1ZR2pnk.jpg',
        randomText:
          'Já peguei o meu!!! '
      },
      {
        id: 7,
        postTitle: 'Promoção!!!',
        name: 'Marta Gomes',
        avatarURI:
          'https://images.pexels.com/photos/4050220/pexels-photo-4050220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        imageURI:
          'https://lh3.googleusercontent.com/proxy/4ooJbhcX0LZH1D19Bar9wR0AOR5ZifPMiOUovnOk9l1cpv-Qf-OlKa8vy872YwWkhFlvjSca20RkFIZBgesNdSjCfBcRCsnatRVPQkb-cbvO313oSkbFDtUkiKPBCSyzy7e63ttXu1KU8aFgmGJxS3LjMtnFYRdIwoEL',
        randomText:
          'Pouquíssimas unidades!!! '
      },
      {
        id: 8,
        postTitle: 'Promoção!!!',
        name: 'Susana Pacheco',
        avatarURI:
          'https://images.pexels.com/photos/2316856/pexels-photo-2316856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        imageURI:
          'https://folhadolitoral.com.br/wp-content/uploads/2020/12/ywej8r0i_1606940696.jpg',
        randomText:
          'Corre que não dá para todos!!! '
      },
      {
        id: 9,
        postTitle: 'Promoção!!!',
        name: 'Phillipe Teixeira',
        avatarURI:
          'https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        imageURI:
          'https://1.bp.blogspot.com/-J40efFAesJQ/XlscLKKbXqI/AAAAAAABRK0/RIMMPme5V_wca97ReJXlE59CNJppJ0TUgCLcBGAsYHQ/s1600/onde_beber_e_petiscar_em_Salvador%2B%252826%2529.jpg',
        randomText:
          'Opaaaaaaa!!! '
      },
      {
        id: 10,
        postTitle: 'Promoção!!!',
        name: 'Robson Cerqueira',
        avatarURI:
          'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        imageURI:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRG9h2Rn8X9W_IxMa8mxeZDTqBiimv9fCg5g&usqp=CAU',
        randomText:
          'Fuiii!!!'
      },
];


export default function Feed({navigation}) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
        <Image
        source={{ uri: item.imageURI }}
        style={styles.cardImage}
        />
        <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
                {item.postTitle}
            </Text>
            <TouchableOpacity
            onPress={() => navigation.navigate('Perfil', {post:item})}
            >
            <Avatar.Image
            source={{ uri: item.avatarURI }}
            size={30}
            style={styles.cardAvatar}
            />
            </TouchableOpacity>
        </View>
        <View style={styles.cardContent}>
            <Text>{item.randomText}</Text>
        </View>
  </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
      backgroundColor: '#fff',
      marginBottom: 25
  },
  cardImage: {
      width: '100%',
      height: 300
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardTitle: {
    color: '#4000FF'
  },
  cardAvatar: {
    marginRight: 16
  },
  cardContent: {
    padding: 10,
    borderWidth: 0.25,
    borderColor: '#5882FA'
  }
});
