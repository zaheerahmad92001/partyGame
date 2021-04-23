import React, { useRef, useReducer, useEffect , useState } from 'react'
import styles from './styles'
import {View,Text, TouchableOpacity,Image}from 'react-native';
import AppHeader from "../../Component/AppHeader";
import {backArrow,nextBtn}from '../../Constants/images'
import {bgBlue}from '../../Constants/Colors'
import TextField from "../../Component/textField";
import CustomButton  from "../../Component/CustomButton";
import TalkBubble from "../../Component/TalkBubble";
import PlayBtn from '../../Component/PlayBtn'



function LetsPlayView({navigation}){

    const [name, setName] = useState('');

    useEffect(() => {
      
    }, [])

function nextBtn () {
   navigation.navigate('AppNavigator',{screen:'Edition'})
    }

    return(
        <View style={styles.wraper}>
            <AppHeader
             bgColor={bgBlue}
             leftImg={backArrow}
            />
            <View style={styles.empityView}></View>
            <View style={styles.content}>
                <TextField
                  placeholder={"YOUR NAME..."}
                  onChangeText={(value)=>setName(value)}
                  value={name}
                />
            </View>
            <View style={styles.empityView}></View>
            <CustomButton
             onPress={()=>nextBtn()}
             title={'NEXT'}
             PlayBtn={true}
            />
            
        </View>
    )
}
export default LetsPlayView