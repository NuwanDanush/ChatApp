import * as React from 'react';
import Colours from '../constants/Colours'
import { Text, View, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Right, Icon, Thumbnail, Body } from 'native-base';

interface ChatProps {}

const Chat = (props: ChatProps) => {
  return (
    <Container>
    <Header style={{height:0, backgroundColor:Colours.WHITE}} />
    <Content style={{}}>
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXpnH-00qStJwOZt4JB_XUYCv7XNcL0EKMhA&usqp=CAU' }} />
          </Left>
          <Body>
            <Text>Kumar Pratik</Text>
            <Text>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right style={{height:63.5}}>
            <Text>3:43 pm</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFns-rvzQJdg1L0OU7Rmzp1PG_Q4pyMBoupw&usqp=CAU' }} />
          </Left>
          <Body>
            <Text>Kumar Pratik</Text>
            <Text>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right style={{height:63.5}}>
            <Text>3:43 pm</Text>
          </Right>
        </ListItem>
      </List>
    </Content>
  </Container>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {}
});
