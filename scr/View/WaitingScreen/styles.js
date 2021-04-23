import React from "react";
import { Platform, StyleSheet } from "react-native";
import { totalSize } from "react-native-dimension";
import { bgBlue, dimGray } from "../../Constants/Colors";
import { BhalooMedium, ExtraBold } from "../../Constants/Fonts";
import Loading from 'react-native-whc-loading'

export default StyleSheet.create({
    wraper:{
        flex:1,
        backgroundColor:'white'
    },
    empityView:{
        height:totalSize(36)
    },
    loadingView:{
       justifyContent:'center',
       alignItems:'center',
       flex:1
    },
    imgStyle:{
        resizeMode:'contain'
    },
    textStyle:{
        fontSize:28,
        fontWeight:'800',
        fontFamily:ExtraBold,
        color:bgBlue,
    }
    
})