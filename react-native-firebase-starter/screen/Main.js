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
      <View
        style={styles.container}>
        <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', paddingTop: '60%' }}>    
            <Image source = {require('../assets/Logo_main.png')}
              style = {styles.logo} />

            <Text style={styles.getStartedText}>Hobbi</Text>
        </View>
        <View style={{flex:2, alignItems:'center', marginBottom: '30%'}}>
          <View style={styles.rectangle}>
          </View>
          <TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.loginText}>Login with Email</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFB662',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    width: 50,
    height: 36,
  },
  visit: {
    width: 283,
    height: 69,
  },
  rectangle: {
    width: 200,
    height: 49,
    position: 'absolute',
    backgroundColor: '#EBB448',
    borderWidth: 3, //solid #FFFBFB,
    borderColor: "white",
    borderRadius: 34.5,
  },
  loginText: {
    fontFamily: "Montserrat-ExtraBold",
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFEFE',
    width: 283,
    height: 69,
  },
  touch: {  
    position: 'absolute',
    marginTop:'3%',
  },
  getStartedText: {
    fontFamily: "MontserratAlternates-ExtraBold",
    fontSize: 50,
    color: 'white',
  },
});

