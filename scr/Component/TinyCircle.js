import React from "react";
import {View , StyleSheet,Text } from "react-native";
import { bgBlue, darkBlue, dimGray,pink , redColor } from "../Constants/Colors";
const TinyCircle =(props)=>{
return(
    <View>
    {props.text1 ?
    <View style={[styles.circle,props.style1]}></View>
    :
    <View style={[styles.circle,props.style2]}></View>
    }
    </View>
)
}
export default TinyCircle
const styles = StyleSheet.create({
    circle:{
     width:17,
     height:17,
     borderRadius:17/2,
     borderColor:dimGray,
     backgroundColor:darkBlue,
     borderWidth:5,
     marginRight:5,
     
    }
})