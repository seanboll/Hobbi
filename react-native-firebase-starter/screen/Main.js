import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'

import Login from './Login';

export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    /*
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
    */

  }

  render() {
    const { currentUser } = this.state

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            Hobbi
          </Text>
        </View>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <View style={styles.circleGradient}>
            <Text style={styles.visit}>Login with Email</Text>
          </View>  
      </TouchableOpacity>
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