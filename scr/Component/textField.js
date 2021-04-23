import React from "react";
import { TextInput ,StyleSheet} from "react-native";
import { totalSize } from "react-native-dimension";
import { textColor } from "../Constants/Colors";
import { ExtraBold } from "../Constants/Fonts";
export const TextField = (props)=>{
  return(
      <TextInput
        style={styles.inputStyle}
        placeholder={props.placeholder}
        placeholderTextColor={textColor}
        onChangeText={props.onChangeText}
        value={props.value}

      />
  )
} 
export default TextField;
const styles = StyleSheet.create({
    inputStyle:{
        fontSize:26,
        // totalSize(3.5),
        fontStyle:'normal',
        fontWeight:'900',
        fontFamily:ExtraBold,
        paddingVertical:10,
        color:textColor
        
    }
})