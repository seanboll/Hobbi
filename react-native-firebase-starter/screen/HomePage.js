import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'

export default class HomePage extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}>
        //rectangle
        <View style={styles.rectangle}>
        </View>


      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC'
  },
  rectangle: {
    height: 493,
    width: 357,
    backgroundColor: '#EBB448',
    opacity: 0.3,
    position: 'absolute', 
    top: 163,
    left: 9
  },
  xButton: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 43,
    top: 676,
  }
});
