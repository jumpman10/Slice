import React, {useState} from 'react';
import { ScrollView, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './walletComponents/Home';
import { Activity } from './walletComponents/Activity';
import { Account } from './walletComponents/Account';
import { Setting } from './walletComponents/Setting';
interface Props extends StackScreenProps <any , any>{};

const Tab = createBottomTabNavigator();

export const Wallet = () => {
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
      <Tab.Screen name="Actividad" component={Activity} 
      options={{  
        headerShown:false, 
        tabBarIcon:()=>(
          <Icon 
          name="stats-chart-outline"
          color="black"
          size={ 25 }
          />
        )}}/>
        
      <Tab.Screen name="Tarjetas" component={Setting} 
      options={{  
        headerShown:false, 
        tabBarIcon:()=>(
          <Icon 
          name="card-outline"
          color="black"
          size={ 25 }
          />
        )}}/>
        <Tab.Screen name="Cuenta" component={Account} 
      options={{  
        headerShown:false, 
        tabBarIcon:()=>(
          <Icon 
          name="person-circle-outline"
          color="black"
          size={ 25 }
          />
        )}}/>
      
    </Tab.Navigator>
  );
}

