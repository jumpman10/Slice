import React from 'react';
import {StyleSheet, Text, View } from 'react-native';



export const Button = () =>{
  
    return (
           <View style={styles.container}>
                <Text style={styles.text}>Button</Text>
           </View>
          );
}
        


const styles = StyleSheet.create({
          container: {
            width:200,
            height:60,
            backgroundColor:'white',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:100,
            borderColor:'red',
            borderWidth:1,
          },
          text:{
            color:'black',
            fontSize:18,
            fontWeight:'100',
            fontStyle:'italic',
          }
         
        });