import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ChatProps {}

const Chat = (props: ChatProps) => {
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {}
});
