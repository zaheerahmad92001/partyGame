
import React, { useRef, useReducer, useEffect, useState, } from 'react'
import {
    View, Text, TouchableOpacity,
    Image, SafeAreaView,
    TextInput, Platform,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native'
import AppHeader from '../../Component/AppHeader'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { colorBackArrow, colorFirework } from '../../Constants/images'
import EditionCard from "../../Component/EditionCard";
import styles from './styles'
import { totalSize } from 'react-native-dimension'
import { send } from '../../Constants/images'

function QuestionAnswerView({ navigation }) {
    inputRef = useRef()
    const [Answer, setAnswer] = useState('')

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };

    }, [])

    const _keyboardDidShow = (event) => {
        console.log("Keyboard Shown", typeof (event.endCoordinates.height));
        // updateState({ keboardoffset: event.endCoordinates.height })
    };

    const _keyboardDidHide = () => {
        console.log("Keyboard Hidden");
        // updateState({ keboardoffset: 0 })
    };
   const sendAnswer = () => {
        setAnswer('')
        inputRef.current.focus()
        navigation.navigate('Results')
    }

    function goBack() {
        navigation.pop()
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => inputRef.current.blur()}
        >
            <View style={styles.wraper}>
                <AppHeader
                    bgColor={'white'}
                    leftImg={colorBackArrow}
                    leftPress={() => goBack()}
                />
                <View style={styles.empityView}></View>
                <View style={{ flex: 1 }}>
                    <View style={styles.questionContainer}>
                        <Image
                            source={colorFirework}
                            style={styles.imgStyle}
                        />
                        <Text style={styles.questionText}>How old is Name 2?</Text>
                    </View>
                </View>
                <SafeAreaView style={{
                    // flexDirection: 'row',
                    // alignItems: 'center',
                    // marginHorizontal: 10,
                    // backgroundColor:'black',
                    maxHeight: 100,
                    marginBottom: Platform.OS === 'android' ? 2 : 0
                }}>
                    <View style={styles.answerWraper}>
                        <TextInput
                            placeholder={"Your answer ..."}
                            placeholderTextColor={'grey'}
                            onChangeText={(text) => setAnswer(text)}
                            value={Answer}
                            multiline={true}
                            blurOnSubmit={false}
                            autoFocus={false}
                            ref={inputRef}
                            style={styles.inputStyle}
                        />

                        <TouchableOpacity
                            style={{ alignSelf: 'flex-end', marginLeft: 5 }}
                            onPress={Answer.trim().length > 0 ? sendAnswer : null}>

                            <Image
                                source={send}
                                style={styles.imgStyle2}
                            />

                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                {Platform.OS === 'ios' ?
                    <KeyboardSpacer /> : null}

            </View>
        </TouchableWithoutFeedback>
    )
}
export default QuestionAnswerView;
