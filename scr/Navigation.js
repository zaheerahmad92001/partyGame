import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Starter from "../scr/View/Starter";
import LetsPlayView from '../scr/View/LetsPlay';
import EditionView from "../scr/View/Edition";
import LeaderView from '../scr/View/LeaderView';
import QuestionAnswerView from "../scr/View/QuestionAnswerView";
import ResultsView from "../scr/View/ResultView";
import WaitingView from "../scr/View/WaitingScreen";

const Stack = createStackNavigator();

function playNavigator() {
    return (
        <Stack.Navigator initialRouteName={'Starter'} headerMode={'none'}>
            <Stack.Screen name={'Starter'} component={Starter} />
            <Stack.Screen name={'LetsPlay'} component={LetsPlayView} />
        </Stack.Navigator>
    )
}
function AppNavigator() {
    return(
        <Stack.Navigator initialRouteName ='Edition'headerMode ={'none'} >
            <Stack.Screen name ={'Edition'} component={EditionView}/>
            <Stack.Screen name ={'Leader'} component={LeaderView}/>
            <Stack.Screen name ={'QuestionAnswer'} component={QuestionAnswerView}/>
            <Stack.Screen name ={'Results'} component={ResultsView}/>
            <Stack.Screen name ={'Waiting'} component={WaitingView}/>

        </Stack.Navigator>
    )
    
}

function AppContainer() {
    return (
        <NavigationContainer>
               <Stack.Navigator initialRouteName="playNavigator" headerMode={'none'}>
                <Stack.Screen name={'playNavigator'} component={playNavigator} />
                <Stack.Screen name={'AppNavigator'} component={AppNavigator} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default AppContainer