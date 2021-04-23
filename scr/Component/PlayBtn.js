import React from 'react';
import {View , StyleSheet}from 'react-native';
import { redColor } from '../Constants/Colors';
export const Triangle = (props) => {
    return <View style={[styles.triangle, props.style]} />;
  };
  
export default Triangle ;

 const styles =  StyleSheet.create({
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth:11 ,
      borderRightWidth: 11,
      borderBottomWidth: 20,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor:redColor,
      transform: [{ rotate: "90deg" }],
    },
  });