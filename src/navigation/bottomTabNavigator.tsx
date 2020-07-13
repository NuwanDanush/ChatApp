import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import Color from '../constants/Color';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(){
    return(
        <BottomTab.Navigator
         tabBarOptions={{activeTintColor:Color.tintColorLight}}>
            <BottomTab.Screen
             name='TabOne' 
             component={TabOne}
             options={{tabBarIcon:({color})=><TabBarIcon name='ios-chatbubbles' color={color}/>}}
             />
            <BottomTab.Screen
             name='TabTwo' 
             component={TabTwo}
             options={{tabBarIcon:({color})=><TabBarIcon name='ios-person' color={color}/>}}
             />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOne(){
    return(
        <TabOneStack.Navigator>
            <TabOneStack.Screen name='Chat' component={Chat}/>
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwo(){
    return(
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen name='Profile' component={Profile}/>
        </TabTwoStack.Navigator>
    );
}