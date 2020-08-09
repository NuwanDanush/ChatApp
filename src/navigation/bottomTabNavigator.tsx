import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
// import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import Color from '../constants/Colours';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ChatList, ChatView, AddChat } from '../screens/Chat';
import { RouteProp } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            tabBarOptions={{ activeTintColor: Color.tintColorLight }}>
            <BottomTab.Screen
                name='TabOne'
                component={TabOne}
                options={{ tabBarIcon: (color: string) => <TabBarIcon name='ios-chatbubbles' color={color} /> }}
            />
            <BottomTab.Screen
                name='TabTwo'
                component={TabTwo}
                options={{ tabBarIcon: (color: string) => <TabBarIcon name='ios-person' color={color} /> }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOne() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name='ChatList'
                component={ChatList}
                options={{
                    title: 'Chats',
                    headerTitleContainerStyle: { alignItems: 'center', }
                }}
            />
           <TabOneStack.Screen
             name='ChatView'
             component={ChatView}
             options={({route}:RouteProp<TabOneParamList,'ChatView'>)=>({ title: route.params.title })}
            />
            <TabOneStack.Screen
                name='AddChat'
                component={AddChat}
                options={{
                    title: 'Make Chat'
                }}
            />
        </TabOneStack.Navigator>
    );
}


const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwo() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen 
            name='Profile' 
            component={Profile}
            options={{
                title: 'Profile',
                headerTitleContainerStyle: { alignItems: 'center', }
            }} />
        </TabTwoStack.Navigator>
    );
}