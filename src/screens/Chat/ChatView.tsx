import * as React from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Grid,
  Row,
  Form,
  Item,
  Input,
  Label,
  Button,
  Picker,
  Icon,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Text,
} from "native-base";
import { FloatingAction } from "react-native-floating-action";
import Color from "../../constants/Colours";
import { RouteProp } from "@react-navigation/native";
import { TabOneParamList, Chat, User } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import * as firebase from "firebase";
import Loading from "../Loading";

type ChatListRouteProps = RouteProp<TabOneParamList, "ChatList">;
type ChatListNavigationProps = StackNavigationProp<TabOneParamList, "ChatList">;

type Props = {
  route: ChatListRouteProps;
  navigation: ChatListNavigationProps;
};
type UserWithChatId = {
  user:User;
  chatId:string|null|undefined;
}
interface ChatListProps {}
const ChatList = (props: Props) => {
  const user = firebase.auth().currentUser;
  const ref = firebase.database();
  const [chats, setChats] = React.useState<Array<Chat>>([]);
  const [userArray, setUser] = React.useState<Array<UserWithChatId>>([])
  const [isLoading, setLoading] = React.useState<boolean>(true);

  React.useEffect(()=>{
    loadChats();
    return()=>{
      setChats([])
    }
  },[])

  const loadChats = () => {
    setLoading(true);
    ref.ref("/User/" + user?.uid + "/").on("value", (snapshot) => {
      setLoading(true);
      setChats([]);
      setUser([]);
      let userData: User = snapshot.val();
      let chatIds: Array<string | null> | undefined = userData.chats;
      if (!chatIds) {
        setLoading(false);
        return;
      }
      let tempChat: Chat;
      chatIds?.map((value, i) => {
        ref
          .ref("/Chat/" + value + "/")
          .once("value")
          .then((snapshot) => {
            tempChat = snapshot.val();
            tempChat.id = value;
            setChats((prev) => [...prev, tempChat]);
            let userArray = tempChat.users?tempChat.users:[]

            let otherUser:string|undefined;
            if(userArray[0] === user?.uid){
              otherUser = userArray[1];
            }
            else{
              otherUser = userArray[0];
            }
            ref.ref('/User/'+otherUser+'/').once('value')
            .then((snapshot1)=>{
              let otherUserData:User = snapshot1.val();
              let chatUser:UserWithChatId={
                chatId:value,
                user:otherUserData,
              }
              setUser(prev=>[...prev,chatUser]);
            })

          })
          .catch((error) => {
            setLoading(false);
            alert(error.message);
          });
      });
      setLoading(false);
    });
  }