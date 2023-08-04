import React from 'react';
import {StyleSheet, Text, View } from 'react-native';



export const Card = () =>{
  
    return (
           <View style={styles.container}>
                <View style={styles.img}></View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Text>
           </View>
          );
}
        


const styles = StyleSheet.create({
          container: {
            width:'45%',
            height:'80%',
            backgroundColor:'black',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
          },
          text:{
            width:'60%',
            height:'40%',
            color:'white',
            fontSize:4,
            fontWeight:'100',
            fontStyle:'italic',
            marginTop:10,
            textAlign:'center'
          },
          img:{
            width:'60%',
            height:'40%',
            backgroundColor:'gray',
            borderRadius:10,
          }
         
        });