import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { AuthParamList } from '../types';
import Login from '../screens/Login';
import Register from '../screens/Registration';
import BottomTabNavigator from './bottomTabNavigator';
import * as firebase from 'firebase';

export default function Navigator() {
    const [authToken,setToken] = React.useState('')
    React.useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            setToken(user?.uid?user?.uid:'')
        })
    },[])
    return (
        <NavigationContainer>
            {authToken?
                <BottomTabNavigator/>
                :
                <AuthNavigator/>
            }
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

