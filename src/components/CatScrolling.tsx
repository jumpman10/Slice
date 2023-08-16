import React, { useRef } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet,Text,View } from 'react-native';

interface Props {
    data:any
    height?:number
  }

const { width } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;
export const CatScrolling = ({data,height}:Props) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style={[styles.container,{height:height}]}>
            <ScrollView
                horizontal
                pagingEnabled
                decelerationRate="fast"
                contentContainerStyle={[styles.scrollView,{height:height}]}
                showsHorizontalScrollIndicator={false}
                snapToInterval={offset}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}>
                {data?.map((x, i) => (
                    <Item key={x} i={i} cat={x} height={height} scrollX={scrollX} />
                ))}
            </ScrollView>
        </View>
    );
}

function Item({ i, scrollX,cat,height }) {
    const scale = scrollX.interpolate({
        inputRange: [-offset + i * offset, i * offset, offset + i * offset],
        outputRange: [0.75, 1, 0.75],
    });
    return (
    <Animated.View style={[styles.item, { transform: [{ scale }] ,height:height}]} >
        <Text style={{color:'pink'}}>{cat}</Text>
    </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:300
    },
    scrollView: {
        paddingHorizontal: padding,
        alignItems: 'center',
        justifyContent:'center',
        height:300,
    },
    item: {
        height: 300,
        width: itemWidth,
        borderRadius:30,
        backgroundColor:'#525252',
        alignItems:'center',
        justifyContent:'center'
    },
    itemContent:{
        height:'98%',
        width:'98%',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    }
});