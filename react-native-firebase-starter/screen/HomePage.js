import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class HomePage extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}>

        <Image source = {require('../assets/Logo.png')}
          style = {styles.logo} />

        <View style={styles.rectangle}>
        </View>

        <Image source = {require('../assets/profile_picture_example.png')}
          style = {styles.profilePicture} />

        <Text style = {styles.profileBioHeader}>
        Jordan, 23
        </Text>

        <Text style = {styles.profileBio}>
          {"\n"}
          - rock climbing (5) {"\n"}
          - kayaking (4) {"\n"}
          - basketball (1) {"\n"}
          - tennis (2) {"\n"}
          - mountain biking (2)
        </Text>

        <TouchableHighlight
         style={styles.profileButton}
         onPress={() => this.props.navigation.navigate('Profile')}>
         <Icon name="user"  size={30} color = 'gray' style = {styles.profileButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.chatButton}
         onPress={() => this.props.navigation.navigate('Chat')}>
         <Icon name="comments"  size={30} color = 'gray' style = {styles.chatButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.checkButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
         <Icon name="check-circle"  size={100} color = 'green' style = {styles.checkButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.xButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
         <Icon name="times-circle"  size={100} color = 'red' style = {styles.xButtonIcon}>
        </Icon>
        </TouchableHighlight>
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC'
  },
  logo: {
    width: 80,
    height: 66.85,
    position: 'absolute',
    left: 148,
    top: 69,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 175.5,
    borderColor: 'black',
    left: 79,
    top: 190,
    borderWidth: 1
  },
  profileButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 15,
    top: 30,
    backgroundColor: '#ECECEC'
  },
  profileButtonIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: '#ECECEC'
  },
  profileBioHeader: {
    position: 'absolute',
    width: 352,
    height: 232,
    left: 12,
    top: 404,

    fontFamily: 'Montserrat-Black',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center'
  },
  profileBio: {
    position: 'absolute',
    width: 352,
    height: 232,
    left: 12,
    top: 404,

    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center'
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
  chatButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 312,
    top: 30,
    backgroundColor: '#ECECEC'
  },
  chatButtonIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: '#ECECEC'
  },
  checkButton: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 233,
    top: 676,
    backgroundColor: '#ECECEC'
  },
  checkButtonIcon: {
    position: 'absolute',
    backgroundColor: '#ECECEC'
  },
  xButton: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 43,
    top: 676,
    backgroundColor: '#ECECEC'
  },
  xButtonIcon: {
    position: 'absolute',
    backgroundColor: '#ECECEC'
  }
});
