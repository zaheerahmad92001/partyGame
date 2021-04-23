import React, { useState } from 'react'
import { StyleSheet, Text, Image, Platform } from 'react-native'
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base'
import { RFValue } from 'react-native-responsive-fontsize'
import { AlfaSlabOne } from '../Constants/Fonts'
import { totalSize } from 'react-native-dimension'

const AppHeader = (props) => {
    return (
        <Header
            style={{ backgroundColor: props.bgColor }}
            noShadow
            transparent
        >
            <Left style={styles.leftStyle} >
                <Button transparent
                    onPress={props.leftPress}
                >
                    <Image
                        source={props.leftImg}
                        resizeMode={'contain'}
                    />

                </Button>
            </Left>
            <Body style={styles.bodyStyle}>
                {/* <Text style={styles.title}>{props.body}</Text> */}
            </Body>
            <Right style={styles.righStyle}>
                <Text style={[styles.title,props.bodyStyle]}>{props.body}</Text>
            </Right>

        </Header>
    )
}
export default AppHeader;

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 25,
        color: '#C0A7F3',
    },
    leftStyle: {
        marginLeft:Platform.OS==='ios'? 15 : 0,
        flex: 0.2
    },
    bodyStyle: {
        flex: 0.6
    },
    righStyle: {
        flex: 0.6,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent:'flex-start',
        // backgroundColor:'red'
    },
    title: {
        color:'white',
        fontSize:totalSize(3.5),
        fontFamily:AlfaSlabOne,
    }
})