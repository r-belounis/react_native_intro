import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Navbar from './components/core/Navbar/Navbar'

class App extends Component {

  render() {
    return (
      <View style={{width: '100', height: '100'}}>
        <Navbar />
        <Text style={styles.container}>This is a test text</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;