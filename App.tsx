import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { Tabs } from './src/navigator/Tabs';


// const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) =>{
//   return(
//     <AuthProvider>
//         {children}
//     </AuthProvider>
//   )
// }


const App = () => {
  return (

   <NavigationContainer>
          <StackNavigator/>
   </NavigationContainer>
  )
}



export  default App;