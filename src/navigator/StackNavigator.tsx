import React, { useEffect,useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './Screen';




export type RootStackParams = {
  Screens:undefined,
  Login:undefined,
}
const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator= () => {


  return (
    <Stack.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: 'white',
        flex:1,
      },
    }}> 
       <Stack.Screen name="Screens" component={Screens} 
       options={{headerShown:false}} />        

    </Stack.Navigator>
  );
}