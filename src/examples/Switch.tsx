import React, { useState } from 'react';
import {
    LayoutAnimation,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
const activeColor = 'green';
const inActiveColor = 'red';
export default function Switch() {
    const [toggleActive, setToggle] = useState(false);
    return (
        <View style={styles.constainer}>
            <TouchableOpacity
                style={styles.toggleContainer}
                onPress={() => {
                    LayoutAnimation.easeInEaseOut();
                    setToggle(!toggleActive);
                }}
                activeOpacity={1}>
                <View
                    style={[
                        styles.toggleBtn,
                        toggleActive
                            ? { backgroundColor: activeColor, alignSelf: 'flex-end' }
                            : { backgroundColor: inActiveColor },
                    ]}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    constainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    status: {
        width: 100,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    toggleContainer: {
        height: 50,
        width: 100,
        borderRadius: 25,
        borderWidth: 0.5,
        overflow: 'hidden',
    },
    toggleBtn: { 
        height: 50, 
        width: 50,
        borderRadius:25 },
});