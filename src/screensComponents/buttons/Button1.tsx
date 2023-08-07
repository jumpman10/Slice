import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

interface Props {
    color:string,
  }


export const Button1= ({color}:Props) =>{
  
    return (
           <View style={[styles.container,{borderColor:color}]}>
                <Text style={styles.text}>Button</Text>
           </View>
          );
}
        


const styles = StyleSheet.create({
          container: {
            width:'90%',
            height:'50%',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:100,
            borderWidth:1,
            backgroundColor:'white'
          },
          text:{
            color:'black',
            fontSize:18,
            fontWeight:'100',
            fontStyle:'italic',
          }
         
        });