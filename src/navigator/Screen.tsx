import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import { Contact } from '../screens/Contact';
import { ComponentsStack } from './ComponentsStack';
import { DesingsStack } from './DesingsStack';





export type RootStackParams = {
 Home:undefined,
 ComponentsStack:undefined,
 DesingsStack:undefined,
 Settings:undefined,
 Contact:undefined
}
const Stack = createStackNavigator<RootStackParams>();


export const Screens= () => {

  return (
    <Stack.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: 'white',
        flex:1,
      },
    }}>
 
          <Stack.Screen name="Home" component={Home} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="ComponentsStack" component={ComponentsStack} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="DesingsStack" component={DesingsStack} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="Settings" component={Settings} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="Contact" component={Contact} 
          options={{  headerShown:false }}/>
    </Stack.Navigator>
  );
}