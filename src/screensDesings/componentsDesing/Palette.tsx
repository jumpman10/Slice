import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';

interface Props {
    data: Array<string>, 
    onPress?:any,
    to?:string | number
  }


export const Palette= ({data,onPress,to}:Props) =>{
  
    return (
        
        <TouchableOpacity style={styles.palette} onPress={()=>onPress(data)}>
            { data.map((e,i)=>
                <View  key={i} style={[styles.color,{backgroundColor:e}]}></View>
            )
            } 
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
            color:'black',
            textAlign:'center',
            fontSize:40,
            fontWeight:'100',
            padding:10
          },
          palette:{
            width:'80%',
            height:100,
            marginVertical:15,
            flexDirection:'row'
          },
          color:{
            height:'100%',
            width:'20%'
          }
         
        });