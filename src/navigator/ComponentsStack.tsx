import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Components } from '../screens/Components';
import { Buttons } from '../screensComponents/Buttons';
import { Animations } from '../screensComponents/Animations';
import { Cards } from '../screensComponents/Cards';
import { MoreComponents } from '../screensComponents/MoreComponents';





export type RootStackParams = {
 Components:undefined,
 Buttons:undefined,
 Animations:undefined,
 Cards:undefined,
 MoreComponents:undefined
}
const Stack = createStackNavigator<RootStackParams>();


export const ComponentsStack= () => {

  return (
    <Stack.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: 'white',
        flex:1,
      },
    }}>
          <Stack.Screen name="Components" component={Components} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="Buttons" component={Buttons} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="Animations" component={Animations} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="Cards" component={Cards} 
          options={{  headerShown:false }}/>
          <Stack.Screen name="MoreComponents" component={MoreComponents} 
          options={{  headerShown:false }}/>
    </Stack.Navigator>
  );
}