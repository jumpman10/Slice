import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Uiux } from '../screens/Uiux';
import { Challenge } from '../screensDesings/Challenge';
import { Wallet } from '../screensDesings/Wallet';
import { Ecommerce } from '../screensDesings/Ecommerce';
import { Money } from '../screensDesings/walletComponents/Money';
import { Music } from '../screensDesings/Music';





export type RootStackParams = {
 Uiux:undefined,
 Challenge:undefined,
 Wallet:undefined,
 Ecommerce:undefined,
 Money:undefined,
 Music:undefined
}
const Stack = createStackNavigator<RootStackParams>();


export const DesingsStack= () => {

  return (
    <Stack.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: 'white',
        flex:1,
      },
    }}>
          <Stack.Screen name="Uiux" component={Uiux} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="Wallet" component={Wallet} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="Money" component={Money} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="Ecommerce" component={Ecommerce} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="Music" component={Music} 
          options={{  headerShown:false }}/>
    </Stack.Navigator>
  );
}