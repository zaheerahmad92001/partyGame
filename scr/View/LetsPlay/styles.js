
import {StyleSheet}from 'react-native';
import { bgBlue, dimGray, redColor } from '../../Constants/Colors';
import { height, totalSize, width } from "react-native-dimension";
export default StyleSheet.create({
    wraper:{
        flex:1,
        backgroundColor:bgBlue
    },
    empityView:{
       height: totalSize(10)
    },
    content:{
        justifyContent:'center',
        alignItems:'center',
        borderColor:dimGray,
        borderWidth:5,
        borderRadius:20,
        marginLeft:totalSize(3.5),
        marginRight:totalSize(3.5)
    },
   
     

}) 