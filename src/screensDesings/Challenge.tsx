import React, {useState} from 'react';
import { ScrollView, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Btn } from '../components/Btn';
import { Palette } from './componentsDesing/Palette';
import { Background } from './componentsDesing/Background';
import { Categories } from './componentsDesing/Categories';

interface Props extends StackScreenProps <any , any>{};

const {width} = Dimensions.get('window')


export const Challenge = ({navigation,route}  : Props) =>{
    const [start,setStart] = useState(false)
    const palette1 = ['#CAD2C5','#84A98C','#52796F','#354F52','#2F3E46']
    const palette2 = ['#FFFFFA','#515052','#000103','#333138','#FF312E']
    const palette3 = ['#001524','#15616D','#FFECD1','#FF7D00','#78290F']
    const palette4 = ['#EF476F','#FFD166','#06D6A0','#118AB2','#073B4C']
    const palette5 = ['#6F1D1B','#BB9457','#432818','#99582A','#FFE6A7']
    const categories = ['Wallet','E-commerce','News','Music','Login','Home']
    const [steps,setSteps] = useState(0)
    const [selectedPalette, setSelectedPalette] = useState([])
    const [selectedBackground, setSelectedBackground] = useState('')
    const selectPalette = (palette:Array<string>) => {
        setSteps(1)
        setSelectedPalette(palette)
    }
    const selectColor = (color:string) => {
        setSteps(2)
        setSelectedBackground(color)
    }
    const goTo=(e:string)=>{
        navigation.navigate(e)
    }
    return (
            <View
            style={[styles.container,{backgroundColor:selectedBackground ? selectedBackground:'white'}]}>
            {   start===false ?
                <>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>navigation.goBack()} style={{height:'100%', position:'absolute',left:15,width:'13%',zIndex:1000,}}>
                    <Image source={require('../../assests/back.png')} resizeMode='contain'
                    style={{height:'100%',width:'100%'}}/>
                    </TouchableOpacity>
                    <Image source={require('../../assests/slicebanner.png')} resizeMode='contain'
                    style={{height:'100%',width:'100%'}}/>
                </View>
                <Text style={styles.text}>En este modo solo podrás seleccionar 
                todo lo que quieras una sola vez</Text>
                <Btn title='Empezar' onPress={setStart} to={true}/>
                </>
            :
                <>
                    { 
                        (steps===0)&&
                        (   
                            <>
                                <Text style={styles.text}>Selecciona la categoría que quieras diseñar </Text>
                                <Categories data={categories} onPress={goTo}/>
                            </>
                            
                        )
                    }
                    { 
                        (steps===1)&&
                        (   
                            <>
                                <Text style={styles.text}>Selecciona la paleta de colores</Text>
                                <Palette data={palette1} onPress={selectPalette} />
                                <Palette data={palette2} onPress={selectPalette} />
                                <Palette data={palette3} onPress={selectPalette} />
                                <Palette data={palette4} onPress={selectPalette} />
                                <Palette data={palette5} onPress={selectPalette} />
                            </>
                        )
                    }
                    { 
                        (steps===2)&&
                        (   
                            <>
                                <Text style={styles.text}>Selecciona el fondo</Text>
                                <Background data={selectedPalette} onPress={selectColor}/>
                            </>
                        )
                    }
                </>   
            }
            </View>
          );
}
        


const styles = StyleSheet.create({
          container: {
            backgroundColor:'white',
            alignItems:'center',
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
            fontSize:40,
            fontWeight:'100',
            padding:10,
            height:'25%'
          },
         
         
        });