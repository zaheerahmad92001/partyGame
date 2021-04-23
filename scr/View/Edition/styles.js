import React from "react";
import { StyleSheet } from "react-native";
import { totalSize } from "react-native-dimension";
import { bgBlue, dimGray } from "../../Constants/Colors";
import { BhalooMedium } from "../../Constants/Fonts";
export default StyleSheet.create({
    wraper:{
        flex:1,
        backgroundColor:bgBlue
    },
    restorePurchase:{
        position:'absolute',
        bottom:totalSize(5),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        flexDirection:'row',
    },
    restoreText:{
        color:dimGray,
        fontFamily:BhalooMedium,
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:18,
    },
    imgStyle:{
        resizeMode:'contain',
        marginLeft:2,
    }
})