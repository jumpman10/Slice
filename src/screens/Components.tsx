import React from 'react';
import { ScrollView, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { BtnComponent } from '../components/BtnComponent';
import { Button } from '../examples/Button';
import Animation from '../examples/Animation';
import { Card } from '../examples/Card';
import Switch from '../examples/Switch';

interface Props extends StackScreenProps <any , any>{};

const {width} = Dimensions.get('window')


export const Components = ({navigation,route}  : Props) =>{

  const goButtons =()=>{
    navigation.navigate('Buttons')
  }
  const goAnimations =()=>{
    navigation.navigate('Animations')
  }
  const goCards =()=>{
    navigation.navigate('Cards')
  }
  const goMoreComponents =()=>{
    navigation.navigate('MoreComponents')
  }

  
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
              <BtnComponent text='Buttons' onPress={goButtons}>
                <Button/>
              </BtnComponent>
              <BtnComponent text='Animations' onPress={goAnimations}>
                <Animation/>
              </BtnComponent>
              <BtnComponent text='Cards' onPress={goCards}>
                <Card/>
              </BtnComponent>
              <BtnComponent text='More' onPress={goMoreComponents}>
                <Switch/>
              </BtnComponent>
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