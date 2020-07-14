import * as React from 'react';
import { Text, View, StyleSheet, TextInput, LayoutAnimation } from 'react-native';
import { Button, Form, Container, Header, Content, Input, Item, Grid, Row } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../types';
import Colours from '../constants/Colours';
import Register from './Registration';
import * as firebase from 'firebase';

type LoginRouteProps = RouteProp<AuthParamList, 'Login'>;
type LoginNavigationProps = StackNavigationProp<AuthParamList, 'Login'>;

type props = {
  route: LoginRouteProps,
  navigation: LoginNavigationProps
}

const Login = ({ route, navigation }: props) => {

  const [email, setEmail] = React.useState('')
  const [pwd, setPWD] = React.useState('')

  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, pwd)
      .catch(err => alert(err))
  }

  return (
    <Container style={{ backgroundColor: Colours.WHITE }}>
      <Content style={{ backgroundColor: Colours.WHITE }}>
        <Grid>
          <Row style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 300, backgroundColor: Colours.WHITE }}>
            <Text style={{ fontSize: 45, fontWeight: "bold" }}>Login</Text>
          </Row>
          <Row style={{ justifyContent: 'center', alignItems: 'center', height: 300 }}>
            <Form style={{ flex: 1, paddingHorizontal: 20 }}>
              <Item rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>

                <Input placeholder="Email"
                  onChangeText={txt => setEmail(txt)}
                  value={email}
                />
              </Item>
              <Item last rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>
                <Input placeholder="Password"
                  onChangeText={txt => setPWD(txt)}
                  value={pwd}
                />
              </Item>
              <Button rounded style={{ marginHorizontal: 85, alignItems: 'center', justifyContent: 'center', borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20, backgroundColor: Colours.BLACK }} onPress={() => login()}>
                <Text style={{ color: Colours.WHITE }}>LOGIN</Text>
              </Button>
            </Form>
          </Row>
          <Row style={{ marginVertical: 30, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Don't have an account?</Text>
            <Item onPress={() => { navigation.push('Register') }}>
              <Text style={{ color: Colours.PRIMARYCOLOR }}>Register now</Text>
            </Item>
          </Row>
        </Grid>
      </Content>
    </Container>
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