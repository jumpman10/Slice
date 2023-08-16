import React, { useRef } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet,Text,View,Image } from 'react-native';

interface Props {
    data:any
  }

const { width } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;
export const MenuScrolling = ({data}:Props) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                decelerationRate="fast"
                contentContainerStyle={styles.scrollView}
                showsHorizontalScrollIndicator={false}
                snapToInterval={offset}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}>
                {data?.map((x, i) => (
                    <Item key={i} i={i} item={x}  scrollX={scrollX} />
                ))}
            </ScrollView>
        </View>
    );
}

function Item({ i, scrollX,item}) {
    const scale = scrollX.interpolate({
        inputRange: [-offset + i * offset, i * offset, offset + i * offset],
        outputRange: [0.65, 1, 0.75],
    });
    return (
    <Animated.View style={[styles.item, { transform: [{ scale }] }]} >
        <Image source={{uri: item.images[1]}} style={{width:'80%',height:'80%'}} resizeMode='contain' />
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.discount}>{item.discountPercentage}%</Text>
        <Text style={styles.text}>{item.title}</Text>
    </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:380,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center'
    },
    scrollView: {
        paddingHorizontal: padding,
        alignItems: 'center',
        justifyContent:'center',
        height:380,
    },
    item: {
        height: 350,
        width: itemWidth,
        borderRadius:30,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth:0.5,
        borderColor:'#EEEEEE',
    },
    itemContent:{
        height:'98%',
        width:'98%',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    },
    text:{
        color:'black',
        textTransform:'uppercase'
    },
    category:{
        backgroundColor:'yellow',
        fontSize:14,
        color:'black',
        position:'absolute',
        top:'5%',
        left:'5%'
    },
   discount:{
        backgroundColor:'red',
        fontSize:14,
        color:'white',
        position:'absolute',
        top:'0%',
        right:'5%',
        width:80,
        height:40,
        textAlign:'center',
        textAlignVertical:'center'
    }
});