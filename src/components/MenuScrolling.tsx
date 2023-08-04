import React, { useRef } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet,Text,View } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;
export default function MenuScrolling() {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
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
            {[1, 2, 3, 4, 5].map((x, i) => (
                <Item key={x} i={i} scrollX={scrollX} />
            ))}
        </ScrollView>
    );
}

function Item({ i, scrollX }) {
    const scale = scrollX.interpolate({
        inputRange: [-offset + i * offset, i * offset, offset + i * offset],
        outputRange: [0.75, 1, 0.75],
    });
    return (
    <Animated.View style={[styles.item, { transform: [{ scale }] }]} >
    </Animated.View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: padding,
        alignItems: 'center',
        justifyContent:'center'
    },
    item: {
        height: '80%',
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