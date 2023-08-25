import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './musicComponents/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Search } from './musicComponents/Search';
import { Library } from './musicComponents/Library';
import { View } from 'react-native';
import { BlurView } from '@react-native-community/blur';





export type RootStackParams = {
Tabs:undefined
}
const Stack = createStackNavigator<RootStackParams>();
const Tab = createBottomTabNavigator();

const Tabs =()=>{
  return(
  <Tab.Navigator
  screenOptions={{
      // tabBarActiveBackgroundColor:'rgba(255, 194, 209, 1)',
      tabBarActiveTintColor:'black',
      tabBarStyle:{height:60,position:'absolute'},
      tabBarInactiveTintColor:'black',
      tabBarBackground: () => (
        <BlurView blurType="light"
        blurAmount={100}  style={{height:'100%',width:'100%'}} />
      ),
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
      <Tab.Screen name="Search"  component={Search}
    options={{  
      headerShown:false, 
      tabBarIcon:()=>(
        <Icon
        name="search"
        color="black"
        size={ 25 }
        />
      )}}/>
      <Tab.Screen name="Library" component={Library}
    options={{  
      headerShown:false, 
      tabBarIcon:()=>(
        <Icon
        name="library"
        color="black"
        size={ 25 }
        />
      )}}/>
    
  </Tab.Navigator>
  )
}
export const Music= () => {

  return (
    <Stack.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: '#FFE5EC',
        flex:1,
      },
    }}>
          <Stack.Screen name="Tabs" component={Tabs} 
          options={{  headerShown:false }}/>
    </Stack.Navigator>
  );
}