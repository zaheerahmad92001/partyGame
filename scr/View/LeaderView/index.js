
import React, { useRef, useReducer, useEffect, useState } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import AppHeader from '../../Component/AppHeader'
import { bgBlue, greenColor, redColor } from '../../Constants/Colors'
import { backArrow, fireworks1, leader, cancel } from '../../Constants/images'
import EditionCard from "../../Component/EditionCard";
import styles from './styles'
import { totalSize } from 'react-native-dimension'
import { Icon } from 'native-base'
import PlayersList from "../../Component/Players";
import { players } from "../../Constants/Data";
import CustomButton  from "../../Component/CustomButton";
import { invite,lock } from "../../Constants/images";
import Clipboard from '@react-native-clipboard/clipboard';
import TalkBubble from "../../Component/TalkBubble";


function LeaderView({ navigation }) {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {

    }, [])

    function goBack() {
        navigation.pop()
    }

    const copyToClipboard = () => {
        Clipboard.setString('hello world');
        setVisible(true)

        setTimeout(()=>{
            setVisible(false)
        },1200)
      };

      const start =() =>{
        navigation.navigate('QuestionAnswer')
        // navigation.navigate('Results')
      }

    return (
        <View style={styles.wraper}>
            <AppHeader
                bgColor={bgBlue}
                leftImg={backArrow}
                leftPress={() => goBack()}
                body={"Players"}
            />
            <View style={styles.content}>
                <View style={styles.editionView}>
                    <Image
                        source={fireworks1}
                        style={styles.imgStyle}
                    />
                    <Text style={styles.editionStyle} >Edition</Text>
                    <Icon
                        name={'repeat'}
                        type={'Feather'}
                        style={styles.iconStyle}
                    />
                </View>
                <View style={styles.empityView}></View>
                <FlatList
                    data={players}
                    keyExtractor={(item) => { item.id }}
                    renderItem={({ item }) => {
                        return (
                            <PlayersList
                                item={item}
                            />
                        )
                    }}
                />
               
            </View>
            

            <View style={styles.buttonView}>
       { isVisible ?
            <View style={{position:'absolute',bottom:65,left:50}}>
               <TalkBubble/>
            </View>
            : null }

            <View style={{marginRight:10 ,flex:0.5}}>
            <CustomButton
             onPress={copyToClipboard}
             title={'INVITE'}
             titleStyle={{color:'white'}}
             img={invite}
             imageStyle={styles.btnImageStyle}
             innerBtnStyle={[styles.innerBtnStyle,{backgroundColor:redColor,}]}
             outerBtnStyle={[styles.outerBtnStyle,{backgroundColor:'white'}]}
            />
            </View>
            <View style={{marginLeft:10,flex:0.5}}>
            <CustomButton
             onPress={start}
             title={'START'}
             titleStyle={{color:greenColor}}
             PlayBtn={true}
             playBtnStyle={styles.playBtn}
             innerBtnStyle={styles.innerBtnStyle}
             outerBtnStyle={[styles.outerBtnStyle,]}
            />
            </View>
            
            </View>
        </View>
    )
}
export default LeaderView;