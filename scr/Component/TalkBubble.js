import React from "react";
import {View,Text,StyleSheet, Platform}from 'react-native'
import { totalSize } from "react-native-dimension";
import { RFValue } from "react-native-responsive-fontsize";
import { redColor } from "../Constants/Colors";
import { ExtraBold } from "../Constants/Fonts";
const TalkBubble = () => {
    return (
      <View style={styles.talkBubble}>
        <View style={styles.talkBubbleSquare}>
          <Text style={styles.textColor}> Copied link!</Text>
        </View>
        <View style={styles.talkBubbleTriangle} />
      </View>
    );
  };
  export default TalkBubble;
  
  const styles = StyleSheet.create({
    talkBubble: {
      backgroundColor: "transparent",
    },
    talkBubbleSquare: {
      width:totalSize(18),
      height:totalSize(6),
      backgroundColor: "white",
      borderRadius: 10,
      justifyContent:'center',
      alignItems:'center'
    },
    talkBubbleTriangle: {
      position: "absolute",
      left:Platform.OS==='ios'? -16:-15,
      top:Platform.OS==='ios'?totalSize(5.2):40,
      transform: [{ rotate: "-32deg" }],
      width: 0,
      height: 0,
      borderTopColor: "transparent",
      borderTopWidth: 13,
      borderRightWidth: 20,
      borderRightColor: "white",
      // borderBottomWidth: 13,
      borderBottomColor: "transparent",
    },
    textColor:{
      fontWeight:"900",
      fontFamily:ExtraBold,
      fontSize:Platform.OS==='ios'?RFValue(20):RFValue(17) ,
      color:redColor
    }

  });