import * as React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import Layout from '../constants/Layout';
import Color from '../constants/Colours';
import { Container, Content, Grid, Row, Text, List, ListItem, Left, Button, Icon, Body, Right, Switch } from 'native-base';

// interfaceimport { Form } from 'native-base';
//  ProfileProps {}
const image = { uri: "https://montanusphotography.com/coverphotos/WiscoyFalls-CharlotteNY-MontanusPhoto.jpg" };
interface ProfileProps { }
const Profile = (props: ProfileProps) => {
  return (
    <Container>
      <Content>
        <Grid>
          <Row style={{ height: Layout.window.height * 0.3, }}>
            
            <ImageBackground source={image} style={styles.image}>
              <Avatar rounded size='xlarge' containerStyle={{ marginTop: 60, borderWidth: 4, borderColor: Color.WHITE }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQl2fWPROdS8pukewyAzcDzsD_ffortpxCXeg&usqp=CAU" }} />
              
            </ImageBackground>
          </Row>
          <Row style={{ height: Layout.window.height * 0.05, flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Alice Tall</Text>

          </Row>
          <Row style={{ height: Layout.window.height * 0.05, flex: 1, justifyContent: "center" }}>
            <Text note>Freelance Developer</Text>
          </Row>
          <Row style={{ height: Layout.window.height * 0.4 }}>
            <List>
            <ListItem icon noBorder style={{width:Layout.window.width}} noIndent>
                <Left>
                  <Icon active style={{ color: Color.GRAY }} name="ios-person" />
                </Left>
                <Body>
                  <Text style={{ color: Color.BLACK }}>FirstName:Alice</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder style={{width:Layout.window.width}} noIndent>
                <Left>
                  <Icon active style={{ color: Color.GRAY }} name="ios-person" />
                </Left>
                <Body>
                  <Text style={{ color: Color.BLACK }}>LastName:Tall</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder style={{width:Layout.window.width}} noIndent>
                <Left>
                  <Icon active style={{ color: Color.GRAY }} name="ios-mail" />
                </Left>
                <Body>
                  <Text style={{ color: Color.BLACK }}>Email:avhfrgh100@gmail.com</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder style={{width:Layout.window.width}} noIndent>
                <Left>
                  <Icon active style={{ color: Color.GRAY }} name="ios-call" />
                </Left>
                <Body>
                  <Text style={{ color: Color.BLACK }}>PhoneNumber:11287000364</Text>
                </Body>
              </ListItem>
               

            </List>
          </Row>
          <Row style={{ height: Layout.window.height * 0.2}} >

          </Row>


        </Grid>
      </Content>

    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {},
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center'
  },
});
