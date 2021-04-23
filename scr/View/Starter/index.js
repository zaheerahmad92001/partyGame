import React, { useRef, useReducer, useEffect, useState } from 'react'
import styles from './styles'
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import AppHeader from "../../Component/AppHeader";
import {nextBtn , playsolid } from '../../Constants/images'
import { bgBlue, dimGray, lighBlue, redColor } from '../../Constants/Colors'
import TextField from "../../Component/textField";
import CustomButton from "../../Component/CustomButton";
import { isIphoneX } from 'react-native-iphone-x-helper'
import ResultBubble from '../../Component/ResultBubble';
import { totalSize } from 'react-native-dimension';
import { Icon } from 'native-base';
import Svg, {
    Text,
  } from 'react-native-svg';
import { AlfaSlabOne } from '../../Constants/Fonts';


function Starter({ navigation }) {

  const letsPlay=()=>{
    navigation.navigate('LetsPlay')
    }
    return (
        <SafeAreaView style={styles.wraper}>
            <View style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                top: -20,
                right: -4,
                transform: [{ rotate: '-7deg' }]
            }}>
                <ResultBubble
                    bubbleSquare={styles.BubbleSquareTopRight}
                    triangleStyle={styles.triangleStyleTopRight}
                    correctAns={true}
                />
            </View>
            <View style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                top: totalSize(7),
                left: -10,
                transform: [{ rotate: '-7deg' }],
                flexDirection: 'row',
            }}>
                <ResultBubble
                    bubbleSquare={styles.BubbleSquareLeft}
                    triangleStyle={styles.triangleStyleTopLeft}
                    correctAns={true}
                />
                <Icon
                    name={'check'}
                    type={'FontAwesome5'}
                    style={{ color:lighBlue, fontSize: totalSize(11), alignSelf: 'flex-end', left: 30, top: 30 }}

                />
            </View>

            <View style={{ height: totalSize(15) }} ></View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                top:totalSize(6),
                transform: [{ rotate: '-7deg' }]
            }}>
                <ResultBubble
                    bubbleSquare={styles.BubbleSquareMiddle}
                    triangleStyle={styles.triangleStyleMiddle}
                    correctAns={true}
                />
                <Icon
                    name={'check'}
                    type={'FontAwesome5'}
                    style={{ color:lighBlue, fontSize: totalSize(10), alignSelf: 'flex-end', left: 5 }}

                />
            </View>


            <View style={styles.yellowBox}>
                <ResultBubble
                    bubbleSquare={[styles.BubbleSquareBottomLeft]}
                    triangleStyle={[styles.triangleStyleTopLeft, styles.triangleStyleBottomLeft]}
                    correctAns={true}
                />
                <Icon
                    name={'cross'}
                    type={'Entypo'}
                    style={{ color:lighBlue, fontSize: totalSize(11), alignSelf: 'flex-end', left: 15, top: 30 }}

                />
            </View>
     <View style={styles.strokedText}>
            <Svg height="400" width={totalSize(76)}>
                <Text
                    fill="white"
                    stroke={redColor}
                    strokeWidth={3.5}
                    fontSize="46"
                    fontWeight="bold"
                    fontFamily={AlfaSlabOne}
                    x={isIphoneX()?totalSize(23.5): totalSize(20)}
                    y="60"
                    // textAnchor='start'
                >
                    APP NAME
                </Text>
            </Svg>
        </View>
        <View style={styles.playbtn}>
        <CustomButton
            onPress={letsPlay}
             outerBtnStyle={styles.outerBtnStyle}
             innerBtnStyle={styles.innerBtnStyle}
             imageStyle={styles.imageStyle}
             img={playsolid}
            />
        </View>

        </SafeAreaView>
    )
}
export default Starter;