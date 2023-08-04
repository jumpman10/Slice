import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Components } from '../screens/Components';





export type RootStackParams = {
 Home:undefined,
 Components:undefined,
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
          <Stack.Screen name="Components" component={Components} 
          options={{  headerShown:false }}/>
    </Stack.Navigator>
  );
}