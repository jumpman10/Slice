import React, {useEffect, useRef, useState} from 'react';
import { ScrollView, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export const Money= () =>{
  const inputRef = useRef(null);
  const [value, setValue]=useState('0')
  const data = 
  useEffect(() => {
    setTimeout(()=>{
  inputRef.current.focus()
    },0)
    
  }, []);
    return(
        <View style={styles.container} >
            <View style={styles.header}>
                <View style={{flexDirection:'row',width:120,height:'100%',alignItems:'center'}}>
                    <Image source={require('../../../assests/slicebanner.png')}
                          resizeMode='contain' style={{height:'100%',width:'100%'}}/>
                    <Text style={[styles.t3,{position:'absolute',right:6,bottom:5}]}>Wallet</Text>
                </View>
            </View>
            <View style={styles.inputContainer}  >
            <Text style={[styles.t3,styles.text]}>Ingresa el monto</Text>
                <TextInput
                ref={inputRef}
                style={styles.input}
                value={value}
                inputMode='numeric'
                keyboardType='number-pad'
                onChangeText={setValue}>
                </TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      alignItems:'center',
      flex:1
    },
    header:{
      width:'100%',
      height:70,
      backgroundColor:'black',
      borderBottomColor:'grey',
      borderBottomWidth:2,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:20,
      position:'absolute',
      top:0,
      zIndex:-100
    },
    t1:{
      color:'black',
      textAlign:'center',
      fontSize:35,
      fontWeight:'100',
      padding:10,
    },
    t2:{
      color:'black',
      textAlign:'center',
      fontSize:25,
      fontWeight:'100',
    },
    t3:{
      color:'white',
      textAlign:'left',
      fontSize:14,
      fontWeight:'100',
    },
    text:{
      color:'black',
      width:'100%',
      textAlign:'left',
      paddingHorizontal:10
    },
    inputContainer:{
        width:'100%',
        height:400,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:'80%',
        height:200,
        color:'black',
        textAlign:'center',
        fontSize:60
    }
   
  });