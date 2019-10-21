import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'

export default class HomePage extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            Hobbi
          </Text>
        </View>
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFB662'
  },
  circleGradient: {
    backgroundColor: "white",
    flex: 3,
    margin: 80
  },
  visit: {
    margin: 3,
    flex: 3,
    textAlign: "center",
    backgroundColor: "#DFB662",
    color: 'white',
    lineHeight:30,
    fontSize: 20,
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontFamily: "MontserratAlternates-ExtraBold",
    fontSize: 50,
    color: 'white',
    lineHeight: 300,
    marginTop: 120,
    textAlign: 'center',
  },
});
