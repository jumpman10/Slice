import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './musicComponents/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';





export type RootStackParams = {
Tabs:undefined
}
const Stack = createStackNavigator<RootStackParams>();
const Tab = createBottomTabNavigator();

const Tabs =()=>{
  return(
  <Tab.Navigator
  screenOptions={{
      tabBarActiveBackgroundColor:'#FFC2D1',
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