import React from 'react';
import { ScrollView, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { BtnComponent } from '../components/BtnComponent';
import { Button } from '../examples/Button';
import Animation from '../examples/Animation';
import { Card } from '../examples/Card';
import Switch from '../examples/Switch';
import { HomeExample } from '../examples/HomeExample';
import { Btn } from '../components/Btn';

interface Props extends StackScreenProps <any , any>{};

const {width} = Dimensions.get('window')


export const Uiux = ({navigation,route}  : Props) =>{
  
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
              <Text style={styles.text}> En esta sección Ui/Ux desings podrás 
              maquetar, diseñar screens a gusto con los componentes que existen en Slice. </Text>
              <Btn title='Desafio' onPress={navigation.navigate} to='Challenge'/>
              <Btn title='Recomendaciones'/>
              <Btn title='Libre'/>
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
          },
          text:{
            color:'black',
            textAlign:'center',
            fontSize:35,
            fontWeight:'100'
          }
         
        });