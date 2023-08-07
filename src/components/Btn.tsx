import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';

interface Props {
    title:string , 
    onPress:any,
    to:string | boolean
  }


export const Btn= ({title,onPress,to}:Props) =>{
  
    return (
           <TouchableOpacity style={styles.container} onPress={()=>onPress(to)}>
                <Text style={styles.text}>{title}</Text>
           </TouchableOpacity>
          );
}
        


const styles = StyleSheet.create({
          container: {
            width:'90%',
            height:60,
            backgroundColor:'black',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:100,
            marginVertical:10
          },
          text:{
            color:'white',
            fontSize:18,
            fontWeight:'100',
            fontStyle:'italic',
          }
         
        });