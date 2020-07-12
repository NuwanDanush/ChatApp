import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Grid, Row, Form, Item, Input, Button } from 'native-base';
import Colours from '../constants/Colours'
import Layout from '../constants/Layout';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../types';
import { RouteProp } from '@react-navigation/native';
import Login from './Login';

type RegisterProps = RouteProp<AuthParamList, 'Register'>;
type RegisterNavigationProps = StackNavigationProp<AuthParamList, 'Register'>;

type props = {
  route: RegisterProps
  navigation: RegisterNavigationProps
}


const Register = ({ route, navigation }: props)=> {

  const [value, onChangeText] = React.useState('');
  return (
    <Container style={{ backgroundColor: Colours.WHITE }}>
      <Content style={{ backgroundColor: Colours.WHITE }}>
        <Grid>
          <Row style={{ flex: 1, height: Layout.window.height, justifyContent: 'center', alignItems: 'center', backgroundColor: Colours.GRAY }}>
            <Form style={{ flex: 1, paddingHorizontal: 25 }}>
              <Text style={{ fontSize: 45, fontWeight: "bold", alignItems: 'center', justifyContent: 'center' }}>Register</Text>
              <Item rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>
                <Input placeholder="FirstName" />
              </Item>
              <Item rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>
                <Input placeholder="LastName" />
              </Item>
              <Item rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>
                <Input placeholder="Email" />
              </Item>
              <Item rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>
                <Input placeholder="Password" />
              </Item>
              <Item rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>
                <Input placeholder="Confirm Password" />
              </Item>
              <Button rounded style={{ marginHorizontal: 85, alignItems: 'center', justifyContent: 'center', borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20, backgroundColor: Colours.BLACK }}>
                <Text style={{ color: Colours.WHITE }}>LOGIN</Text>
              </Button>
              <Text>Already have an account?</Text>
              <Item onPress={() => { navigator.push(Login) }}>
                <Text style={{ color: Colours.PRIMARYCOLOR }}>Login now</Text>
              </Item>
            </Form>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
