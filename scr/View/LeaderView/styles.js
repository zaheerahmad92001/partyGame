import React from "react";
import { Platform, StyleSheet } from "react-native";
import { totalSize } from "react-native-dimension";
import { isIphoneX } from "react-native-iphone-x-helper";
import { bgBlue, dimGray, dimRed, greenColor, redColor } from "../../Constants/Colors";
import { BhalooMedium ,Bold } from "../../Constants/Fonts";
export default StyleSheet.create({
    wraper:{
        flex:1,
        backgroundColor:bgBlue
    },
    content:{
        // justifyContent:'center',
        // alignItems:'center',
        // flexDirection:'row',
        // borderColor:dimGray,
        // borderWidth:5,
        // borderRadius:20,
        marginLeft:totalSize(2.4),
        marginRight:totalSize(2.4)
    },
    editionView:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'flex-end',
        borderColor:dimGray,
        borderWidth:5,
        borderRadius:20,
        paddingHorizontal:10,
        paddingVertical:4,
    },
    imgStyle:{
        resizeMode:'contain',
        width:25,
        height:25
    },
    
    editionStyle:{
        fontSize:22,
        fontWeight:'900',
        fontFamily:Bold,
        marginLeft:10,
        marginRight:15,
        color:'white'
    },
    iconStyle:{
        color:dimGray,
        fontSize:30,
    },
    
    empityView:{
        height:totalSize(4)
    },
    buttonView:{
        position:'absolute',
        bottom:totalSize(5),
        flexDirection:'row',
        marginLeft:totalSize(2.4),
        marginRight:totalSize(2.4)
        
    },
    playBtn:{
        borderBottomColor:greenColor 
    },
    outerBtnStyle:{
        backgroundColor: greenColor,
        width:Platform.OS==='android'?totalSize(20):isIphoneX() ? totalSize(17) :totalSize(19),
    },
    innerBtnStyle:{
        width:Platform.OS==='android'?totalSize(20):isIphoneX() ? totalSize(17) :totalSize(19),

    },
    btnImageStyle:{
        marginLeft:Platform.OS==='android'? 30 :isIphoneX() ? 30 : 20
    }

   
    
})