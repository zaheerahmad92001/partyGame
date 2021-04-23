import React from "react";
import { Platform, StyleSheet, } from "react-native";
import { totalSize } from "react-native-dimension";
import { RFValue } from "react-native-responsive-fontsize";
import { bgBlue, darkBlue, dimGray, lighBlue, redColor, yellowColor } from "../../Constants/Colors";
import { isIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: bgBlue
    },
    BubbleSquareTopRight: {
        width: totalSize(20),
        height: totalSize(12),
        backgroundColor: redColor,
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    triangleStyleTopRight: {
        left: Platform.OS === 'ios' ? -20 : -15,
        top: Platform.OS === 'ios' ? totalSize(8.5) : totalSize(8),
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        transform: [{ rotate: "-90deg" }],
        borderBottomColor: redColor,
    },

    BubbleSquareLeft: {
        width: totalSize(26),
        height: totalSize(12),
        backgroundColor: lighBlue,
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    triangleStyleTopLeft: {
        right: Platform.OS === 'ios' ? -20 : -20,
        top: Platform.OS === 'ios' ? totalSize(8) : totalSize(7.5),
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        transform: [{ rotate: "90deg" }],
        borderBottomColor: lighBlue,
    },

    BubbleSquareMiddle: {
        width: totalSize(35),
        height: totalSize(12),
        backgroundColor: lighBlue,

    },
    triangleStyleMiddle: {
        left: Platform.OS === 'ios' ? -20 : -20,
        top: Platform.OS === 'ios' ? totalSize(8) : totalSize(7.5),
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        transform: [{ rotate: "-90deg" }],
        borderBottomColor: lighBlue,
    },

    BubbleSquareBottomLeft: {
        width: totalSize(28),
        height: totalSize(12),
        backgroundColor: yellowColor,
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    triangleStyleBottomLeft: {
        // right: Platform.OS === 'ios' ? -20 : -15,
        // top: Platform.OS === 'ios' ? totalSize(10) : 40,
        // transform: [{ rotate: "90deg" }],
        borderBottomColor: yellowColor,
    },
    strokedText: {
        position: 'absolute',
        // zIndex:1,
        top: Platform.OS === 'android' ? totalSize(12) : isIphoneX() ? totalSize(18) : totalSize(15),
        // top:RFValue(90),
        // justifyContent:'center',
        alignSelf: 'center',
    },
    playbtn: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        top:Platform.OS==='android'?totalSize(33):isIphoneX()? totalSize(38):totalSize(36)
    },
    outerBtnStyle: {
        width: Platform.OS === 'android' ? totalSize(10) : isIphoneX() ? totalSize(8.5) : totalSize(10),
    },
    innerBtnStyle: {
        width: Platform.OS === 'android' ? totalSize(10) : isIphoneX() ? totalSize(8.5) : totalSize(10),
    },
    imageStyle: {
        resizeMode: 'contain',
        width: totalSize(5), height: totalSize(5),
        // width:45, height:45
    },
    yellowBox: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        top: totalSize(9),
        left: -10,
        transform: [{ rotate: '-12deg' }],
        flexDirection: 'row',
    }

})