import React, { useRef, useState } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';


export default function Animation() {
  const translateX = useRef(new Animated.Value(0)).current;
  const [onRight, setOnRight] = useState(false);
  const animate = () => {
    Animated.spring(translateX, {
      toValue: onRight ? 0 : 200 - 40,
      useNativeDriver: true,
    }).start();
    setOnRight(!onRight);
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: [{translateX}]}]} />
      <View style={styles.btn}>
        <Button
          onPress={animate}
          title='Presiona'
          color='black'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:200,
    height:'100%',
    justifyContent: 'space-evenly',
  },
  box: {
    height: 40,
    width: 40,
    backgroundColor: 'green',
  },
  btn: {
    paddingHorizontal: 50,
  },
});