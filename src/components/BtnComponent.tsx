import React from 'react'
import { ScrollView, Dimensions, Image, StatusBar,StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    text:string,
    children:any,
    onPress:any
  }


export const BtnComponent =({text,children,onPress}:Props)=>{
    return(
        <TouchableOpacity style={styles.button} onPress={()=>onPress()}>
            <View style={styles.buttonContent}>
                {children}
            </View>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
      width:'80%',
      height:300,
      backgroundColor:'white',
      marginVertical:'4%',
      borderRadius:20,
      borderWidth:0.5,
      borderColor:'gray',
      alignItems:'center',
      justifyContent:'flex-start',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
        },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonContent:{
      width:'90%',
      height:'70%',
      borderRadius:20,
      borderWidth:1,
      borderColor:'#DDDDDD',
      marginTop:'2%',
      alignItems:'center',
      justifyContent:'center'
    },
    text:{
        color:'black',
        textAlign:'center',
        marginVertical:10,
        fontSize:26,
        fontWeight:'200',
        fontStyle:'italic'
    },
    img:{
        width:'95%',
        height:'100%',
    }
  });