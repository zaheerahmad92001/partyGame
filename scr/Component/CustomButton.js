import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Platform } from "react-native";
import { bgBlue, redColor } from '../Constants/Colors';
import { height, totalSize, width } from "react-native-dimension";
import { nextVector } from "../Constants/images";
import { ExtraBold } from '../Constants/Fonts';
import PlayBtn from "../Component/PlayBtn";
import { Icon } from 'native-base';
import { isIphoneX } from 'react-native-iphone-x-helper';

export const CustomButton = (props) => {
    return (

        <View style={[styles.outerBtnView, props.outerBtnStyle]}>
            <View style={[styles.innerBtnView, props.innerBtnStyle]}>
                <TouchableOpacity 
                  onPress={props.onPress}
                  style={styles.pressable}>
               { props.title ?
                  <Text style={[styles.nextText,props.titleStyle]} >{props.title}</Text>
                 : null 
                }
                   {props.PlayBtn ?
                    <PlayBtn
                        style={[styles.playBtn,props.playBtnStyle]}
                    /> 
                    :null 
                }
                { props.iconName ?
                <Icon
                 name={props.iconName}
                 type={props.iconType}
                 style={props.IconStyle}
                /> 
                :
                null 
            }
                
               { props.img ?
                <Image
                 source={props.img}
                 style={[styles.imgStyle,props.imageStyle]}
                />
                : null
              }
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default CustomButton;
const styles = StyleSheet.create({
    outerBtnView: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: redColor,
        width:Platform.OS==='android' ? totalSize(18):isIphoneX() ? totalSize(15):totalSize(18),

    },
    innerBtnView: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: 'white',
        width:Platform.OS==='android' ? totalSize(18):isIphoneX() ? totalSize(15):totalSize(18),
        paddingVertical:12,
        marginBottom:5,
    },

    nextText: {
        fontSize:20,
        fontFamily: ExtraBold,
        fontWeight:'900',
        fontStyle:'normal',
        color: redColor,
        marginLeft: 10,

    },
    nextVectorStyle: {
        resizeMode: 'contain',
        width: 25, height: 25,
        marginLeft: 40
    },
    pressable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconStyle:{
        fontSize:30,
    },
    imgStyle:{
      resizeMode: 'contain',
      width: 28,
      height: 28,
    },
    playBtn:{
        marginLeft:Platform.OS==='android'? 30:isIphoneX() ? 30 : 25,
    }

})
