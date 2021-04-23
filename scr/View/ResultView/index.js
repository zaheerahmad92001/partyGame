
import React, { useRef, useReducer, useEffect, useState, } from 'react'
import {
    View, Text, TouchableOpacity,
    Image, SafeAreaView,
    TextInput, Platform,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native'
import AppHeader from '../../Component/AppHeader'
import { colorBackArrow, colorFirework } from '../../Constants/images'
import styles from './styles'
import { bgBlue, dimGray, greenColor } from '../../Constants/Colors';
import ResultBubble from "../../Component/ResultBubble";
import { FlatList } from 'react-native-gesture-handler';
import { answerList } from "../../Constants/Data";
import CustomButton from "../../Component/CustomButton";

function ResultsView({ navigation }) {
    useEffect(() => {

    }, [])
    const goBack = () => {
        navigation.pop()
    }

    return (
        <View style={styles.wraper}>
            <AppHeader
                bgColor={'white'}
                leftImg={colorBackArrow}
                leftPress={goBack}
                body={'Results'}
                bodyStyle={{ color: bgBlue }}
            />
            <View style={styles.empityView}></View>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>How old is Name 2?</Text>
            </View>
            <View style={styles.empityView}></View>
            <View style={styles.correctAnsView}>
                <ResultBubble
                    answer={'22'}
                    correctAns={true}
                />
                <Text style={styles.textStyle}>Name 2</Text>
            </View>

            <FlatList
                data={answerList}
                keyExtractor={(item) => { item.id }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.answerList}>
                            <ResultBubble
                              item={item}
                            />
                        </View>
                    )
                }}
            />
    <View style={styles.absoluteView}>
    <CustomButton
        onPress ={()=>navigation.navigate('Waiting')}
        title="NEXT"
        titleStyle={{color:'white'}}
        outerBtnStyle={{backgroundColor:dimGray}}
        innerBtnStyle={{backgroundColor:bgBlue}}
        PlayBtn={true}
        playBtnStyle={{borderBottomColor:'white'}}

    />
    </View>

        </View>
    )

}
export default ResultsView;
