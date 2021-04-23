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
        height:totalSize(4)
    },
    questionContainer:{
        justifyContent:'center',
        alignItems:'center',
       },
       questionText:{
        marginTop:30,
        fontFamily:ExtraBold,
        fontWeight:'900',
        fontSize:28,
        
    },
    correctAnsView:{
        flexDirection:'row',
        marginLeft:20,
    },
    textStyle:{
        left:30,
        alignSelf:'center',
        fontFamily:ExtraBold,
        fontSize:24,
        fontWeight:'900',
        flex:1,
    },
    answerList:{
        // flexDirection:'row',
        marginTop:40,
    },
    nameText:{
        alignSelf:'center',
        left:10,
        fontFamily:ExtraBold,
        fontSize:24,
        fontWeight:'900',
        flex:1,
    },
    absoluteView:{
        position:'absolute',
        bottom:totalSize(5),
        alignSelf:'center'
    }

})