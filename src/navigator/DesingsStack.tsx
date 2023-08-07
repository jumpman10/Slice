import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Uiux } from '../screens/Uiux';
import { Challenge } from '../screensDesings/Challenge';





export type RootStackParams = {
 Uiux:undefined,
 Challenge:undefined,
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
          <Stack.Screen name="Challenge" component={Challenge} 
          options={{  headerShown:false }}/>
    </Stack.Navigator>
  );
}