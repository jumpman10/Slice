import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from './StackNavigator';
import { Favorites } from '../screens/Favorites';
import { Image } from 'react-native';
const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveBackgroundColor:'#DDDDDD',
        tabBarActiveTintColor:'black',
        tabBarStyle:{height:55}
    }}
    >
      <Tab.Screen name="Home" component={StackNavigator} 
      options={{  
        headerShown:false, 
        tabBarIcon:()=>(
            <Image source={require('../../assests/home.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}/>
        )
        }} />
      <Tab.Screen name="Favorites" component={Favorites} 
      options={{  
        headerShown:false,
        tabBarIcon:()=>(
            <Image source={require('../../assests/fav.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}/>
        )
        }} />
    </Tab.Navigator>
  );
}