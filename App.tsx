import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
import Colours from './src/constants/Colours';
export default function App() {
  return (
    <SafeAreaProvider>
      <Navigator/>
      <StatusBar backgroundColor={Colours.LIGHTGRAY}/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
