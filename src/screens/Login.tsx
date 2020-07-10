import * as React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import {Button} from 'native-base';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { AuthParamList } from '../types';

type LoginRouteProps = RouteProp<AuthParamList, 'Login'>;
type LoginNavigationProps = StackNavigationProp<AuthParamList, 'Login'>;

type props =  {
  route :LoginRouteProps,
  navigation: LoginNavigationProps
}

const Login = ({route, navigation}:props) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button onPress={()=>navigation.push('Register')}>
        <Text>Register</Text>
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});
