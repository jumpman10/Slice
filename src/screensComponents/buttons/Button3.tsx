import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

interface Props {
  color:string,
}


export const Button3= ({color}:Props)=>{
  
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
            alignItems:'center',
            justifyContent:'center',
          },
          text:{
            color:'white',
            fontSize:18,
            fontWeight:'100',
            fontStyle:'italic',
          }
         
        });