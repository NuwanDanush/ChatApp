import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Grid, Row, Form, Item, Input, Button } from 'native-base';
import Colours from '../constants/Colours'
import Layout from '../constants/Layout';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../types';
import { RouteProp } from '@react-navigation/native';
import Login from './Login';
import * as firebase from 'firebase';

type RegisterProps = RouteProp<AuthParamList, 'Register'>;
type RegisterNavigationProps = StackNavigationProp<AuthParamList, 'Register'>;

type props = {
  route: RegisterProps
  navigation: RegisterNavigationProps
}


const Register = ({ route, navigation }: props) => {

  const [FName, setFname] = React.useState('');
  const [LName, setLName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [pwd, setPWD] = React.useState('')
  const [cpwd, setcPWD] = React.useState('')

  const register=()=>{

    // if(pwd!==cpwd)
    // {
    //   return false;
    // }
    firebase.auth().createUserWithEmailAndPassword(email,pwd)
    .then(()=>{
      const user = firebase.auth().currentUser;
      const token = user?.uid;
      user?.updateProfile({
        displayName:FName+" "+LName,
        photoURL:''
      })
      const ref = firebase.database();
      ref.ref('User/'+token+'/').set({
        fname:FName,
        lname:LName,
      }).catch(err=>alert(err))
    })
    .catch(err=>{
      console.log(err);
      alert(err)
    });
  }

  return (
    <Container style={{ backgroundColor: Colours.WHITE }}>
      <Content style={{ backgroundColor: Colours.WHITE }}>
        <Grid>
          <Row style={{ flex: 1, height: Layout.window.height, justifyContent: 'center', alignItems: 'center', backgroundColor: Colours.WHITE }}>
            <Form style={{ flex: 1, paddingHorizontal: 25 }}>
              <Text style={{ fontSize: 45, fontWeight: "bold", alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>Register</Text>
              <Item rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>
                <Input placeholder="FirstName" 
                onChangeText= {txt=> { setFname(txt)} }
                value={FName}
                />
              </Item>
              <Item rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>
                <Input placeholder="LastName"
                onChangeText= {txt=> {setLName(txt)}} 
                value={LName}
                />
              </Item>
              <Item rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>
                <Input placeholder="Email" 
                onChangeText= {txt=> {setEmail(txt)}} 
                value={email}
                />
              </Item>
              <Item rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>
                <Input placeholder="Password" 
                onChangeText= {txt=> {setPWD(txt)}} 
                value={pwd}
                />
              </Item>
              <Item rounded style={{ borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20 }}>
                <Input placeholder="Confirm Password" 
                onChangeText= {txt=> {setcPWD(txt)}} 
                value={cpwd}/>

              </Item>
              <Button rounded style={{ marginHorizontal: 85, alignItems: 'center', justifyContent: 'center', borderColor: Colours.BLACK, marginBottom: 20, marginTop: 20, backgroundColor: Colours.BLACK }} onPress={()=>register()} >
                <Text style={{ color: Colours.WHITE }}>REGISTER</Text>
              </Button>

              <Item onPress={() => { navigation.push('Login') }}>
                <Text style={{ justifyContent: 'center', alignItems: 'center', marginLeft:75 }}>Already have an account?</Text>
                <Text style={{ color: Colours.PRIMARYCOLOR }} >Login now</Text>
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
