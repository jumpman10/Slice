import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';

interface Props {
    data: Array<string>, 
    onPress?:any,
    to?:string | number
  }


export const Background= ({data,onPress,to}:Props) =>{
  
    return (
        
        <View style={styles.palette}>
            { data.map((e,i)=>
                <TouchableOpacity onPress={()=>onPress(e)}
                  key={i} style={[styles.color,{backgroundColor:e}]}></TouchableOpacity>
            )
            } 
        </View>
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
            width:'100%',
            marginVertical:15,
          },
          color:{
            width:'100%',
            height:150
          }
         
        });