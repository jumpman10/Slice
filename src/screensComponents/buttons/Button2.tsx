import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

interface Props {
    color:string
  }


export const Button2= ({color}:Props) =>{
  
    return (
           <View style={[styles.container,{backgroundColor:color}]}>
                <Text style={styles.text}>Button</Text>
           </View>
          );
}
        


const styles = StyleSheet.create({
          container: {
            width:'90%',
            height:'50%',
            backgroundColor:'red',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:100,
          },
          text:{
            color:'white',
            fontSize:18,
            fontWeight:'100',
            fontStyle:'italic',
          }
         
        });