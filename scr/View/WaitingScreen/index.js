
import React, { useRef, useReducer, useEffect, useState, } from 'react'
import {
    View, Text,
    Image,
    Easing,
    Animated
} from 'react-native'
import styles from './styles';
import Loading from 'react-native-whc-loading'
import { loading } from "../../Constants/images";

function WatingView({ navigation }) {
    LoadingRef = useRef()

    useEffect(() => {

    })

    spinValue = new Animated.Value(0);
    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear, // Easing is an additional import from react-native
                useNativeDriver: true  // To make use of native driver for performance
            }
        )).start()
    let spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={styles.wraper}>

            <View style={styles.loadingView}>
                {spin ?
                    <Animated.Image
                        source={loading}
                        style={[styles.imgStyle, { transform: [{ rotate: spin }] }]}
                    />
                    : null
                }

                <Text style={[styles.textStyle, { marginTop: 5 }]}>2 of 4 players have </Text>
                <Text style={styles.textStyle} >submitted an answer ...</Text>
            </View>


            {/* <TouchableHighlight
                    onPress={()=>{
                        LoadingRef.current.show();
                    }}>
                    <Text>Start Loading</Text>
                </TouchableHighlight>
                <Loading
                ref={LoadingRef}
                image={loading}
                backgroundColor='#ffffffF2'
                borderRadius={15}
                size={170}
                imageSize={70}
                indicatorColor='gray'
                easing={Loading.EasingType.ease}
                /> */}

        </View>
    )
}
export default WatingView;