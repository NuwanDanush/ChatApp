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
  
}