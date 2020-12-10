import React, {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 



import Feed from '../../screens/Feed'
import Post from '../../screens/Post'
import Profile from '../../screens/Profile'


const Tab = createBottomTabNavigator();
class TabNavigator extends Component {
    render() {
        return(
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: '#FF0000',
                        inactiveTintColor: '#58ACFA',
                        //showLabel: false
                    }}
                >
                    <Tab.Screen name='Promoções' component={Feed} 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <AntDesign name="shoppingcart" color={color} size={size}  />
                            ),
                        }}
                    />
                    <Tab.Screen name='Postar' component={Post} 
                        options={{
                            tabBarLabel: 'Poste uma Promoção',
                            tabBarIcon: ({ color }) => (
                                <AntDesign name="camera" size={35} color={color} />
                            )
                           
                        }}
                    />
                    <Tab.Screen name='Perfil' component={Profile} 
                        options={{
                            tabBarIcon: ({color, size, focused}) => ( 
                                <AntDesign name="user" size={size} color={color} /> 
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

export default TabNavigator;
