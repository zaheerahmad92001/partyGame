
import React, { useRef, useReducer, useEffect , useState } from 'react'
import { View ,Text, FlatList,Image } from 'react-native'
import AppHeader from '../../Component/AppHeader'
import { bgBlue } from '../../Constants/Colors'
import {backArrow,repeat}from '../../Constants/images'
import EditionCard from "../../Component/EditionCard";
import styles from './styles'
import { totalSize } from 'react-native-dimension'
import { edition } from "../../Constants/Data";

function EditionView({navigation}) {

    useEffect(() => {
      
    }, [])

    const goBack =() =>{
    navigation.pop()
    }
    
    return(
        <View style={styles.wraper}>
            <AppHeader
                 bgColor={bgBlue}
                 leftImg={backArrow}
                 leftPress={goBack}
                 body={"Edition"}
            />
            <FlatList
             data={edition}
             keyExtractor={(item)=>{item.id}}
             renderItem={({item})=>{
                 return(
                    <EditionCard
                     navigation={navigation}
                     item={item}
                    />     
                 )
             }}
            />
            <View style={styles.restorePurchase}>
                <Text style={styles.restoreText}>Restore purchases</Text>
                <Image
                source={repeat}
                style={styles.imgStyle}
                />
            </View>
        </View>
    )
}
export default EditionView;