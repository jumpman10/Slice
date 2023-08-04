import React from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps <any , any>{};

const {width} = Dimensions.get('window')


export const Home = ({navigation,route}  : Props) =>{
    return (
            <View style={styles.container}>
              <StatusBar hidden={true}/>
              <View style={styles.imgContainer}>
                <Image source={require('../../assests/SliceLogo.png')} resizeMode='contain' style={styles.img}/>
              </View>
              <View style={styles.body}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Components')}>
                    <Image source={require('../../assests/code.png')} resizeMode='contain' style={styles.buttonBackground} />
                    <Text style={styles.buttonText}>Componentes</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assests/uiux.png')} resizeMode='contain' style={styles.buttonBackground} />
                    <Text style={styles.buttonText}>Diseños</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assests/conf.png')} resizeMode='contain' style={styles.buttonBackground} />
                    <Text style={styles.buttonText}>Configuración</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assests/contact.png')} resizeMode='contain' style={styles.buttonBackground} />
                    <Text style={styles.buttonText}>Contactanos</Text>
                  </TouchableOpacity>
              </View>
              {/* <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonFooter2}>
                  <Image source={require('../../assests/home.png')} resizeMode='contain' style={styles.buttonBackground} />
                  <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFooter}>
                  <Image source={require('../../assests/fav.png')} resizeMode='contain' style={styles.buttonBackground} />
                  <Text style={styles.footerText}>Favoritos</Text>
                </TouchableOpacity>
              </View> */}
            </View>
          );
        }
        
        const styles = StyleSheet.create({
          container: {
            flex:1,
            backgroundColor:'white',
            alignItems:'center'
          },
          imgContainer:{
            width:'100%',
            height:'40%',
            alignItems:'center',
            justifyContent:'center',
            borderBottomLeftRadius:width/2,
            borderBottomRightRadius:width/2,
            backgroundColor:'black',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderColor:'#DDDDDD',
            borderWidth:5,
            borderTopWidth:0
          },
          img:{
            height:'65%'
          },
         body: {
          height:'50%',
          width:'100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent:'space-around',
          alignContent:'space-around',
          },
          itemsContainer: {
            height:'100%',
            width:'100%',
            flexDirection: 'row',
          },
          item: {
            width: '30%',
            height: '30%',
            borderWidth:1,
            borderColor:'gray',
            borderRadius:20,
            marginHorizontal:20
          },
          button:{
            width:'40%',
            height:'35%',
            backgroundColor:'white',
            borderRadius:25,
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
            borderWidth:0.5,
            borderColor:'grey'
          },
          buttonBackground:{
            height:'70%',
            width:'90%',
            position:'absolute',
          },
          buttonText:{
            color:'black',
            fontSize:20,
            fontWeight:'200',
            position:'absolute',
            bottom:'10%'
          },
          footerText:{
            color:'black',
            fontSize:14,
            fontWeight:'200',
            position:'absolute',
            bottom:'10%'
          },
          buttonFooter:{
            width:'50%',
            height:'100%',
            alignItems:'center'
          },
          buttonFooter2:{
            width:'50%',
            height:'100%',
            alignItems:'center',
            backgroundColor:'#DDDDDD'
          },
          footer:{
            width:'100%',
            height:'10%',
            alignItems:'center',
            justifyContent:'space-around',
            flexDirection:'row',
            borderTopWidth:0.5,
            borderTopColor:'gray'
          }
        });