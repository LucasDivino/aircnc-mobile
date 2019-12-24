import React from 'react';
import { YellowBox} from 'react-native'
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/Routes'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <Routes/>
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
