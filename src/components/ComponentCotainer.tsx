import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View,Text } from 'react-native';

interface Props {
    text?:string,
    children:any,
    onPress?:any
  }


export const ComponentContainer =({text,children,onPress}:Props)=>{
    return(
        <View style={styles.button}>
            <View style={styles.buttonContent}>
                {children}
            </View>
            <View style={{height:'20%',width:'90%',flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity style={[styles.colorSelected,{backgroundColor:'red'}]}
              onPress={()=>onPress('red')}>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.colorSelected,{backgroundColor:'black'}]}
              onPress={()=>onPress('black')}>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.colorSelected,{backgroundColor:'green'}]}
              onPress={()=>onPress('green')}>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.colorSelected,{backgroundColor:'orange'}]}
              onPress={()=>onPress('orange')}>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.colorSelected,{backgroundColor:'blue'}]}
              onPress={()=>onPress('blue')}>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.colorSelected,{backgroundColor:'white',
              borderWidth:0.3,borderColor:'black'}]} onPress={()=>onPress('white')}> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.copyCode}> 
                <Text style={styles.text}>Copy code</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    button:{
      width:'90%',
      height:200,
      backgroundColor:'white',
      marginVertical:'4%',
      borderRadius:20,
      borderWidth:0.5,
      borderColor:'gray',
      alignItems:'center',
      justifyContent:'space-around',
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
      alignItems:'center',
      justifyContent:'center'
    },
    text:{
        color:'black',
        textAlign:'center',
        marginVertical:10,
        fontSize:10,
        fontWeight:'400',
        fontStyle:'italic'
    },
    img:{
        width:'95%',
        height:'100%',
    },
    colorSelected:{
        width:25,
        height:25,
    },
    copyCode:{
      width:70,
      height:35,
      marginHorizontal:3,
      flexDirection:'row',
      borderColor:'black',
      borderWidth:0.4,
      justifyContent:'center'
    }
  });