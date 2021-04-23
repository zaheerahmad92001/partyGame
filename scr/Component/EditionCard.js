import React from "react";
import {StyleSheet , Text , View , Image, FlatList,TouchableOpacity }from 'react-native'
import { totalSize } from "react-native-dimension";
import { darkBlue, greenColor, lightYellow, pink, redColor, yellowColor } from "../Constants/Colors";
import { fireworks1,lock } from "../Constants/images";
import {SemiBold , Bold ,Regular, ExtraBold}from '../Constants/Fonts';
import TinyCircle from '../Component/TinyCircle';
import {data} from "../Constants/Data";
import CustomButton from "./CustomButton";

const EditionCard =(props)=>{
    return(
        <TouchableOpacity style={styles.wraper}
        onPress={()=> props.navigation.navigate('AppNavigator',{screen:'Leader'})}
        >
            <View style={styles.fireworksView}>
                <View style={styles.leftView}>
                <Image
                  source={props.item.img}
                  style={styles.imgStyle}
                />
                </View>
                <View style={styles.middleView}>
                  <Text style={styles.editionHeading}>{props.item.editionNo}</Text>
                  <Text style={styles.descriptionText}>Description Text</Text>
                {/* <Text>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.</Text> */}
                <View style={styles.empityView}></View>
                <View style={styles.circleView}>
                  <Text style={styles.textStyle} >Text</Text>
                    <FlatList
                    data={data}
                        horizontal={true}
                        keyExtractor ={(item)=>{item.id}}
                        renderItem={({item})=>{
                            return(
                            <TinyCircle
                             text1={true}
                             style1={styles.style1}
                            />
                            )
                        }}
                        />
                </View>
                <View style={[styles.circleView,{marginTop:3}]}>
                  <Text style={styles.textStyle}>Text</Text>
                    <FlatList
                        data={data}
                        horizontal={true}
                        keyExtractor ={(item)=>{item.id}}
                        renderItem={({item})=>{
                            return(
                            <TinyCircle
                             style2={styles.style2}
                            />
                            )
                        }}
                        />
                </View>
                </View>
            <View style={styles.obsoluteView}>
        {props.item.lock ?
            <CustomButton
              outerBtnStyle={[styles.outerBtnStyle,{borderBottomColor:redColor,backgroundColor:redColor} ]}
              innerBtnStyle={[styles.innerBtnStyle]}
              img={lock}
           />:
           <CustomButton
             outerBtnStyle={styles.outerBtnStyle}
             innerBtnStyle={styles.innerBtnStyle}
             iconName={"check"}
             iconType={'FontAwesome5'}
             IconStyle={styles.iconStyle}
           />
        }

            </View>

            </View>
        </TouchableOpacity>
    )
}
export default EditionCard;
const styles = StyleSheet.create({
    wraper:{
        backgroundColor:darkBlue,
        marginLeft:totalSize(2.5),
        marginRight:totalSize(4),
        borderRadius:20,
        paddingVertical:totalSize(1.5),
        marginVertical:10,
    },
fireworksView:{
        flexDirection:'row',
        alignItems:'center',
    },
imgStyle:{
     resizeMode:'contain'
    },

    leftView:{
        flex:0.25,
        // backgroundColor:'green',
        alignItems:'center',
        justifyContent:'flex-start',
        alignSelf:'flex-start'
    },
    middleView:{
        flex:0.75,
        // backgroundColor:'red'
    },
    editionHeading:{
     color:'white',
     fontFamily:ExtraBold,
     fontSize:totalSize(3)
    },
outerBtnStyle:{
    borderRadius: 10,
    borderBottomColor:greenColor,
    // borderBottomWidth: 3,
    backgroundColor: greenColor,
    width: totalSize(4.5),
    height:totalSize(4.3)
},
innerBtnStyle:{
    borderRadius: 10,
    borderBottomColor:'white',
    // borderBottomWidth: 3,
    backgroundColor: 'white',
    width: totalSize(4.5),
    height:totalSize(4.3),
    marginBottom:6,
    paddingVertical:0

},
    obsoluteView:{
        left:20
    },
    iconStyle:{
        fontSize:30,
        color:greenColor
    },
    descriptionText:{
        color:'white',
        fontSize:13,
        fontFamily:Regular,
        fontWeight:'400'
    },
    empityView:{
        height:totalSize(2)
    },
    circleView:{
        flexDirection:'row',
        alignItems:'center',
        

    },
    textStyle:{
        color:'white',
        fontFamily:Regular,
        fontSize:18,
        fontStyle:'normal',
        fontWeight:'800',
        marginRight:20,
    },
    style1:{
     borderColor:lightYellow,
     backgroundColor:yellowColor,
    },
    style2:{
        borderColor:pink,
        backgroundColor:redColor,
       }
})