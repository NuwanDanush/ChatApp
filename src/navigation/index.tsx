import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { AuthParamList } from '../types';
import Login from '../screens/Login';
import Register from '../screens/Registration';

export default function Navigator() {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}

const AuthStack = createStackNavigator<AuthParamList>();

function AuthNavigator() {
    return (
        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen 
             name='Login' 
             component={Login} 
             />
             <AuthStack.Screen 
              name='Register'
              component={Register}
              />
        </AuthStack.Navigator>
    );
}

