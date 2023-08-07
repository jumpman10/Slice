import React from 'react';
import {StyleSheet, Text, View } from 'react-native';



export const HomeExample = () =>{
  
    return (
           <View style={styles.container}>
                <View style={styles.img}></View>
               
           </View>
          );
}
        


const styles = StyleSheet.create({
          container: {
            width:'40%',
            height:'90%',
            backgroundColor:'white',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            borderWidth:1,
            borderColor:'black'
          },
          text:{
            width:'40%',
            height:'20%',
            color:'white',
            fontSize:4,
            fontWeight:'100',
            fontStyle:'italic',
            marginTop:10,
            textAlign:'center'
          },
          img:{
            width:'40%',
            height:'20%',
            backgroundColor:'gray',
            borderRadius:10,
          }
         
        });