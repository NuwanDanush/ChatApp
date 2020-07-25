import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
import Colours from './src/constants/Colours';
import firebaseInit from './src/config/FirebaseConfig';
import useCachedResources from './src/hooks/useCachedResources';

export default function App() {
  const isLoadingComplete = useCachedResources();
  if(!isLoadingComplete){
    return null;
  }
  try {
    console.log('start init firebase')
    firebaseInit()
    console.log('firebase init success')
  } catch (error) {
    alert(error)
  }
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
