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
        style={styles.container}>
          <Text style={styles.getStartedText}>
            Hobbi
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.loginText}>Login with Email</Text>
          </TouchableOpacity>
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 375,
    height: 812,
    backgroundColor: '#DFB662'
  },
  circleGradient: {
    backgroundColor: "white",
    flex: 3,
    margin: 80
  },
  visit: {
    width: 283,
    height: 69,
    left: 46,
    top: 549,
  },
  loginText: {
    fontFamily: "Montserrat-ExtraBold",
    fontSize: 18,
    lineHeight: 22,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFEFE',
    width: 283,
    height: 69,
    left: 46,
    top: 549
  },
  getStartedText: {
    fontFamily: "MontserratAlternates-ExtraBold",
    fontSize: 50,
    color: 'white',
    lineHeight: 71,
    textAlign: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 279,
    height: 153,
    left: 67,
    top: 226
  },
});


/*
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
    backgroundColor: "#EBB448",
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
*/