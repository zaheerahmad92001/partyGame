import { Icon } from "native-base";
import React from "react";
import { View, Text, StyleSheet, Platform } from 'react-native'
import { totalSize } from "react-native-dimension";
import { isIphoneX } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { bgBlue, greenColor, redColor } from "../Constants/Colors";
import { ExtraBold } from "../Constants/Fonts";
const ResultBubble = (props) => {
    return (
        <View>
            {props.correctAns ?
                <View>
                    <View style={styles.talkBubble}>
                        <View style={[styles.talkBubbleSquare, props.bubbleSquare]}>
                            <View style={styles.content}>
                                <Text style={styles.textColor}>{props.answer}</Text>

                            </View>
                        </View>
                        <View style={[styles.talkBubbleTriangle, props.triangleStyle]} />
                    </View>
                </View>

                :

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.nameText}>{props.item.usr}</Text>
                    <View style={styles.talkBubble}>
                        <View style={props.item.ans ?[styles.correctBubbleSquare]:[styles.wrongBubbleSquare]}>
                            <View style={styles.content}>
                                <Text style={styles.textColor}>{props.item.value}</Text>
{props.item.ans ?
                                <Icon
                                    name={'check'}
                                    type={'FontAwesome5'}
                                    style={[styles.icon]}
                                />
:
                                <Icon
                                    name={'cross'}
                                    type={'Entypo'}
                                    style={[styles.Crossicon]}
                                />
}

                            </View>
                        </View>
                        <View style={props.item.ans ? [styles.correctAnsBubbleTriangle]:[styles.wrongAnsBubbleTriangle] } />
                    </View>
                </View>
            }
        </View>

    );
};
export default ResultBubble;

const styles = StyleSheet.create({
    talkBubble: {
        backgroundColor: "transparent",
    },
    talkBubbleSquare: {
        width: totalSize(26),
        height: totalSize(6),
        backgroundColor: bgBlue,
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 20,
        //   alignItems:'center'
    },

    correctBubbleSquare: {
        width: totalSize(26),
        height: totalSize(6),
        backgroundColor: greenColor,
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 20,
        marginRight: 20,
        //   alignItems:'center'
    },

    talkBubbleTriangle: {
        position: "absolute",
        right: Platform.OS === 'android' ? -14 : -14,
        top: Platform.OS === 'android' ? 18 :isIphoneX () ? 22 : 20,
        transform: [{ rotate: "90deg" }],
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",

        borderLeftWidth: 7,
        borderRightWidth: 7,
        borderBottomWidth: 14,

        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: bgBlue,
    },

    wrongBubbleSquare: {
        width: totalSize(26),
        height: totalSize(6),
        backgroundColor: redColor,
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 20,
        marginRight: 20,
        //   alignItems:'center'
    },
    
correctAnsBubbleTriangle:{
    position: "absolute",
    left: Platform.OS === 'android' ? -14 : -14,
    top: Platform.OS === 'android' ? 18 :isIphoneX () ? 22 : 20,
    transform: [{ rotate: "-90deg" }],
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 14,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: bgBlue,
    borderBottomColor: greenColor
},
wrongAnsBubbleTriangle:{
    position: "absolute",
    left: Platform.OS === 'android' ? -14 : -14,
    top: Platform.OS === 'android' ? 18 :isIphoneX () ? 22 : 20,
    transform: [{ rotate: "-90deg" }],
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: bgBlue,
    borderBottomColor: redColor
},

    textColor: {
        fontWeight: "900",
        fontFamily: ExtraBold,
        fontSize: Platform.OS === 'ios' ? RFValue(20) : RFValue(18),
        color: 'white'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        fontSize: 40,
        color: 'white',
        right: 10
    },
    Crossicon: {
        fontSize: 50,
        color: 'white',
        right: 10
    },
    nameText: {
        alignSelf: 'center',
        left: 10,
        fontFamily: ExtraBold,
        fontSize: 24,
        fontWeight: '900',
        flex: 1,
    }


});