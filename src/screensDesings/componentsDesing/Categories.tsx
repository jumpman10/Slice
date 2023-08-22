import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {
    data: any, 
    onPress?:any,
    to?:string | number
  }


export const Categories= ({data,onPress,to}:Props) =>{
  
return (
        
        <View style={styles.container}>
          { data.map( (e:{ name: string, icon: string; },i: React.Key) =>
            <TouchableOpacity key={i} style={styles.button} onPress={()=>onPress(e.name)}>  
                <Icon name={e.icon} color={"black"} size={ 50 }/>
                <Text   style={styles.text}>{e.name}</Text>
            </TouchableOpacity> 
          ) } 
        </View>
        
        
);
}
        


const styles = StyleSheet.create({
          container: {
            width:'100%',
            height:'90%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:'space-around',
            alignContent:'space-around',
          },
          text:{
            color:'black',
            textAlign:'center',
            fontSize:20,
            fontWeight:'100',
            padding:10,
            
          },
          button:{
            width:'40%',
            height:'25%',
            marginVertical:15,
            backgroundColor:'white',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderWidth:0.5,
            borderColor:'grey',
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center'
          },
         
        });