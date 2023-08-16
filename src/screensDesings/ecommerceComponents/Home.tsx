import React, {useEffect, useState} from 'react';
import { ScrollView, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuScrolling } from '../../components/MenuScrolling';
import { CatScrolling } from '../../components/CatScrolling';


export const Home = () =>{
    const [categories,setCategories] = useState([])
    
    const [products, setProducts] = useState()
    
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
        .then(response => response.json())
        .then(data => setCategories(data));
        fetch('https://dummyjson.com/products?limit=0&select=title,price,discountPercentage,images,category')
        .then(res => res.json())
        .then(data => setProducts(data));
      }, []);

    const discounts = products?.products?.filter(e=>e.discountPercentage>17).slice(0,5)
       return (
               <ScrollView
               contentContainerStyle={styles.container}>
                   <View style={styles.header}>
                        <View style={{flexDirection:'row',width:120,height:'100%',alignItems:'center'}}>
                          <Image source={require('../../../assests/slicebanner.png')}
                          resizeMode='contain' style={{height:'100%',width:'100%'}}/>
                          <Text style={[styles.t3,{position:'absolute',right:6,bottom:5}]}>Store</Text>
                        </View>
                   </View> 
                   <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn}>
                            <Icon name='home-outline' color='black' size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Icon name='home-outline' color='black' size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Icon name='home-outline' color='black' size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Icon name='home-outline' color='black' size={25}/> 
                        </TouchableOpacity>
                   </View>
                   <MenuScrolling data={discounts} />
                   <CatScrolling data={categories} height={100}/>
               </ScrollView>
             );
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
             btnContainer:{
                width:'90%',
                height:100,
                flexDirection:'row',
                justifyContent:'space-around',
                alignItems:'center',
             },

             btn:{
                width:50,
                height:50,
                backgroundColor:'white',
                borderRadius:50,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                justifyContent:'center',
                alignItems:'center'
             }
             
            
            
           });