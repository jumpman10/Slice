import React, {useState,useEffect} from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { ScrollView } from 'react-native';
import { CatScrolling } from '../../components/CatScrolling';
import { MusicBtn } from '../componentsDesing/MusicBtn';

export const Library = () =>{
    
 
       return (
               <View
               style={styles.container}>
                   <View style={styles.header}>
                        <View style={{flexDirection:'row',width:120,height:'100%',alignItems:'center'}}>
                          <Image source={require('../../../assests/music.png')}
                          resizeMode='contain' style={{height:'100%',width:'100%'}}/>
                        </View>
                   </View> 
               </View>
             );
   }
           
   
   
   const styles = StyleSheet.create({
             container: {
               alignItems:'center',
               flex:1,
               backgroundColor:'#FFE5EC'
             },
             header:{
                width:'100%',
                height:70,
                backgroundColor:'#FFC2D1',
                borderBottomColor:'grey',
                borderBottomWidth:2,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                paddingHorizontal:20
              },
             
           });