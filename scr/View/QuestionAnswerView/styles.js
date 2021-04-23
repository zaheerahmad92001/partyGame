import React from "react";
import { Platform, StyleSheet } from "react-native";
import { totalSize } from "react-native-dimension";
import { bgBlue, dimGray } from "../../Constants/Colors";
import { BhalooMedium, ExtraBold } from "../../Constants/Fonts";
export default StyleSheet.create({
    wraper:{
        flex:1,
        backgroundColor:'white'
    },
    empityView:{
        height:totalSize(3)
    },
    questionContainer:{
     justifyContent:'center',
     alignItems:'center',
    },
    imgStyle:{
        resizeMode:'contain',
        width:60,
        height:60,
    },
    questionText:{
        marginTop:30,
        fontFamily:ExtraBold,
        fontWeight:'900',
        fontSize:28,
        
    },
    inputStyle:{
        padding: Platform.OS === 'android' ? 10 : 15,
        flex: 1,
        color:'black',
        fontFamily:ExtraBold,
        fontWeight:'800',
        fontSize:24,
        borderRadius:5,
        backgroundColor:'white',
        // backgroundColor:'red'
    },
    answerWraper:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10
        // backgroundColor:'blue'
    },
    imgStyle2:{
        resizeMode:'contain',
        width:40,height:40,
        bottom:5
    }
})