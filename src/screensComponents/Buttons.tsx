import React, { useState } from 'react';
import { ScrollView, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { BtnComponent } from '../components/BtnComponent';
import { Button } from '../examples/Button';
import Animation from '../examples/Animation';
import { Card } from '../examples/Card';
import Switch from '../examples/Switch';
import { ComponentContainer } from '../components/ComponentCotainer';
import { Button1 } from './buttons/Button1';
import { Button2 } from './buttons/Button2';
import { Button3 } from './buttons/Button3';

interface Props extends StackScreenProps <any , any>{};

const {width} = Dimensions.get('window')


export const Buttons = ({navigation,route}  : Props) =>{
  const [selectColor,setSelectColor] = useState('red')
  const [selectColor2,setSelectColor2] = useState('black')
  const [selectColor3,setSelectColor3] = useState('red')
    return (
            <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{height:'100%', position:'absolute',left:15,width:'13%',zIndex:1000,}}>
                  <Image source={require('../../assests/back.png')} resizeMode='contain'
                  style={{height:'100%',width:'100%'}}/>
                </TouchableOpacity>
                <Image source={require('../../assests/slicebanner.png')} resizeMode='contain'
                 style={{height:'100%',width:'100%'}}/>
              </View>
              <ComponentContainer onPress={setSelectColor}>
                <Button1 color={selectColor}/>
              </ComponentContainer>
              <ComponentContainer onPress={setSelectColor2}>
                <Button2 color={selectColor2}/>
              </ComponentContainer>
              <ComponentContainer onPress={setSelectColor3}>
                <Button3 color={selectColor3}/>
              </ComponentContainer>
            </ScrollView>
          );
}
        


const styles = StyleSheet.create({
          container: {
            backgroundColor:'white',
            alignItems:'center'
          },
          header:{
            width:'100%',
            height:70,
            backgroundColor:'black',
            borderBottomColor:'grey',
            borderBottomWidth:2,
            justifyContent:'center',
            alignItems:'center'
          }
         
        });