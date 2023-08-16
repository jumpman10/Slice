import React, {useState} from 'react';
import { ScrollView, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './ecommerceComponents/Home';
interface Props extends StackScreenProps <any , any>{};

const Tab = createBottomTabNavigator();

export const Ecommerce = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveBackgroundColor:'#EEEEEE',
        tabBarActiveTintColor:'black',
        tabBarStyle:{height:60,}
    }}
    >
      <Tab.Screen name="Home" component={Home} 
      options={{  
        headerShown:false, 
        tabBarIcon:()=>(
          <Icon 
          name="home"
          color="black"
          size={ 25 }
          />
        )}}/>  
      
    </Tab.Navigator>
  );
}

