import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button, Form } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../types';
import Colours from '../constants/Colours';

type LoginRouteProps = RouteProp<AuthParamList, 'Login'>;
type LoginNavigationProps = StackNavigationProp<AuthParamList, 'Login'>;

type props = {
  route: LoginRouteProps,
  navigation: LoginNavigationProps
}

const Login = ({ route, navigation }: props) => {

    const [fname, onChangeText] = React.useState('Nuwan');
    const [lname, onChangelname] = React.useState('danushka');
  
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:Colours.GRAY}}>
        <Text>{fname}</Text>
        <Text>{lname}</Text>
        <Button onPress={()=>{onChangeText('pakaya'),onChangelname('huthths')}}> 
          <Text>Button</Text>
        </Button>
      </View>
      // <TextInput
      //   style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      //   onChangeText={text => onChangeText(text)}
      //   value={value}
      // />
    );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

