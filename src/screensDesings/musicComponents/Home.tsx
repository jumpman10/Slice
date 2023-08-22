import React, {useState,useEffect} from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { ScrollView } from 'react-native';

export const Home = () =>{
    const song = 'Chulo pt.2'   
    const artist = 'Badgyal'
    const  startingMinutes = 0
    const startingSeconds = 0 
  const [mins, setMinutes] = useState(startingMinutes);
  const [secs, setSeconds] = useState(startingSeconds);
  const [running, setRunning] = useState(false);

  const startSong = () => {
    setRunning(true);
  };
  const stopSong = () => {
    setRunning(false);
  };

  useEffect(() => {
 let sampleInterval = setInterval(() => {
        setSeconds(secs + 1);
      if (secs === 59) {
        if (mins === 3) {
          clearInterval(sampleInterval);
        } else {
          setMinutes(mins + 1);
          setSeconds(0);
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
}, [running]);
 
       return (
               <View
               style={styles.container}>
                   <View style={styles.header}>
                        <View style={{flexDirection:'row',width:120,height:'100%',alignItems:'center'}}>
                          <Image source={require('../../../assests/music.png')}
                          resizeMode='contain' style={{height:'100%',width:'100%'}}/>
                        </View>
                   </View> 
                   <ScrollView style={{flex:1,width:'100%'}}>
                        <View style={{marginVertical:20,backgroundColor:'#EEEEEE',width:200,height:75, 
                        shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius:25,
            marginHorizontal:20}}>

                        </View>
                   </ScrollView>
                   <View style={styles.floatingRep}>
                        <View style={styles.floatingImg}>
                            <Image source={require('../../../assests/song.jpg')}
                            resizeMode='contain' style={styles.img}/>
                        </View>
                        <View style={styles.floatingRepContent}>
                            <Text style={styles.t2}>{song}</Text>
                            <Text style={styles.t3}>{artist}</Text>
                            <Slider
                            style={{width: '90%', height: 20}}
                            value={secs}
                            minimumValue={0}
                            maximumValue={180}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                            thumbTintColor='#FFE5EC'
                        />
                        </View>
                        <TouchableOpacity style={styles.floatingPlay} onPress={()=>startSong()}>
                            <Icon name='play-outline' color={'white'} size={40}/>
                        </TouchableOpacity>
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
             t1:{
               color:'black',
               textAlign:'center',
               fontSize:35,
               fontWeight:'100',
               padding:10,
             },
             t2:{
               color:'white',
               textAlign:'center',
               fontSize:20,
               fontWeight:'200',
             },
             t3:{
               color:'gray',
               textAlign:'left',
               fontSize:14,
               fontWeight:'200',
             },
            
             floatingRep:{
               position:'absolute',
               bottom:'1%',
               width:'90%',
               height:75,
               backgroundColor:'#FF8FAB',
               borderColor:'white',
               borderWidth:1,
               flexDirection:'row',
               justifyContent:'center',
               alignContent:'space-around',
               borderRadius:20,
             },
             floatingRepContent:{
                alignItems:'center',
                width:'60%'
             },
             floatingPlay:{
                alignItems:'center',
                justifyContent:'center',
                width:'18%'
             },
             floatingImg:{
                alignItems:'center',
                justifyContent:'center',
                width:'18%'
             },
             img:{
                height:'75%',
                width:'80%',
                borderRadius:5,
                borderWidth:0.5,
                borderColor:'white'
            }
           });