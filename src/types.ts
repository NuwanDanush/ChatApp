export type AuthParamList = {
    Login:undefined;
    Register:undefined;
}
export type BottomTabParamList={
    TabOne:undefined;
    TabTwo:undefined;
}
export type TabOneParamList={
    Chat:undefined;
}
export type TabTwoParamList={
    Profile:undefined;
}
export type User ={
    uid?:string;
    email?:string;
    fname?:string;
    lname?:string;
    gender?:string;
    phone?:string;
    chats?:Array<string|null>;
    friends?:Array<string|undefined>;
}
export type Chat = {
    id?:string|null;
    users?:Array<string|undefined>;
    messages:Array<Message>;
}
export type ChatUser = {
    _id:string;
    name:string;
    avatar:string;
}
export type Message = {
    _id:string;
    text:string;
    createdAt:Date;
    user:ChatUser;
}