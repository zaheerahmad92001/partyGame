import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { leader,warning } from '../Constants/images'
import { bgBlue, dimGray, dimRed, redColor, yellowColor } from "../Constants/Colors";
import { BhalooMedium, Bold } from "../Constants/Fonts";
export const PlayersList = (props) => {
    return (
        <View style={styles.outerVeiw}>
            <View style={styles.nameListView}>
                <View style={styles.nameView}>
                    {props.item.img ?
                    <Image
                        source={props.item.img}
                        style={styles.imgStyle2}
                    />
                    :
                    <Icon
                        name={'user'}
                        type={'FontAwesome'}
                        style={styles.userIcon}
                    />
                    }
                    <Text style={styles.nameText} >{props.item.name}</Text>
                </View>
                <Icon
                    name={'cross'}
                    type={'Entypo'}
                    style={styles.iconStyle2}
                />

            </View>
            {props.item.error ?
         <View style={styles.warningView}>
            <Image
              source={warning}
              style={styles.imageStyle}
            />
            <Text style={styles.warningText}>Does not own the selected Edition</Text>
            </View> 
            :
             null 
             }

        </View>
    )
}
export default PlayersList;

const styles = StyleSheet.create({
    outerVeiw: {
        borderBottomWidth: 4,
        borderBottomColor: dimGray,
        marginBottom:10,
    },
    nameListView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    imgStyle2: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
        marginLeft:5,
        alignSelf: 'flex-start'
    },
    nameText: {
        marginLeft: 15,
        // marginBottom: 5,
        color: 'white',
        fontFamily: Bold,
        fontSize: 24,
        fontWeight: '900',
    },
    iconStyle2: {
        color: dimRed,
        fontSize: 50,
        left: 10
    },
    warningView:{
        flexDirection:'row',
        alignItems:'center',
    },
    imageStyle:{
        resizeMode: 'contain',
        width: 25,
        height: 25,
        marginLeft:5,
        marginBottom:2,

    },
    warningText:{
        fontFamily:BhalooMedium,
        fontWeight:'400',
        fontSize:14,
        color:yellowColor,
        marginLeft:10,
    },
    userIcon:{
        fontSize:40,
        color:dimGray,
        marginLeft:5,
    }
    

})
