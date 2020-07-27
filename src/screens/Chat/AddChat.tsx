import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { User, Chat } from '../../types';
import { Container, Content, List, Text, View, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import Color from '../../constants/Colours';
import Loading from '../Loading';

interface AddChatProps { }

const AddChat = (props: AddChatProps) =>{
    const user = firebase.auth().currentUser;
    const ref = firebase.database();
    const [userList, setUserList] = React.useState<Array<User>>([])
    const [isLoading, setLoading] = React.useState<boolean>(true)
}
export default AddChat;

const styles = StyleSheet.create({
    container: {}
});
