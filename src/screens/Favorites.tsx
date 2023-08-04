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


export const Favorites = ({navigation,route}  : Props) =>{
  
    return (
            <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.header}>

              </View>
              <BtnComponent text='Buttons'>
                <Button/>
              </BtnComponent>
              <BtnComponent text='Animations'>
                <Animation/>
              </BtnComponent>
              <BtnComponent text='Cards'>
                <Card/>
              </BtnComponent>
              <BtnComponent text='More'>
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
            height:50,
            backgroundColor:'black',
            borderBottomColor:'grey',
            borderBottomWidth:2
          }
         
        });