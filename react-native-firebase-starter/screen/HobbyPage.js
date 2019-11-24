import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class HobbyPage extends React.Component {
  render() {
    return (
      <View
        style={styles.container}>

        <TouchableHighlight
         style={styles.logoButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
          <Image source = {require('../assets/Logo.png')}
            style = {styles.logo} />
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.EventButton}
         onPress={() => this.props.navigation.navigate('EventPage')}>
          <Image source = {require('../assets/People_switch.png')}
            style = {styles.Event} />
        </TouchableHighlight>

        <Image source = {require('../assets/kayak.png')}
          style = {styles.kayak} />

        <Image source = {require('../assets/rock_climb.png')}
          style = {styles.rockClimb} />

        <Image source = {require('../assets/badminton.png')}
          style = {styles.badminton} />

        <Image source = {require('../assets/bowling.png')}
          style = {styles.bowling} />

        <Image source = {require('../assets/basketball.png')}
          style = {styles.basketball} />

        <Image source = {require('../assets/chess.png')}
          style = {styles.chess} />

        <TouchableHighlight
        style={styles.rectangleButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
        <View style={styles.rectangle}>
        </View>
        </TouchableHighlight>


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
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  logoButton: {
    width: '20%',
    height: '8%',
    position: 'absolute',
    alignItems: 'center',
    top: '8%',
  },
  Event: {
    width: '100%',
    height: '100%',
    resizeMode: "stretch"
  },
  EventButton: {
    width: '20%',
    height: '6%',
    position: 'absolute',
    left: '10%',
    top: '10%',
  },
  profileButton: {
    position: 'absolute',
    width: '13%',
    height: '5.7%',
    left: '5%',
    top: '4%',
    backgroundColor: '#ECECEC'
  },
  profileButtonIcon: {
    position: 'absolute',
    backgroundColor: '#ECECEC'
  },
  profileBioHeader: {
    position: 'absolute',
    width: '90%',
    height: '25%',
    top: '45%',

    fontFamily: 'Montserrat-Black',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center'
  },
  profileBio: {
    position: 'absolute',
    width: '90%',
    height: '25%',
    top: '50%',

    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 35,
    textAlign: 'center'
  },
  rectangleButton: {
    height: '65%',
    width: '95%',
    backgroundColor: '#EBB448',
    opacity: 0.3,
    position: 'absolute', 
    top: '17%',
  },
  rectangle: {
    height: '65%',
    width: '95%',
    backgroundColor: '#EBB448',
    opacity: 0.3,
    position: 'absolute', 
    top: '17%',
  },
  chatButton: {
    position: 'absolute',
    width: '13%',
    height: '5.7%',
    right: '0%',
    top: '4%',
    backgroundColor: '#ECECEC'
  },
  chatButtonIcon: {
    position: 'absolute',
    backgroundColor: '#ECECEC'
  },
  checkButton: {
    position: 'absolute',
    width: '26%',
    height: '10.4%',
    right: '10%',
    bottom:'5%',
    backgroundColor: '#ECECEC'
  },
  checkButtonIcon: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#ECECEC'
  },
  xButton: {
    position: 'absolute',
    width: '26%',
    height: '10.4%',
    left: '10%',
    bottom:'5%',
    backgroundColor: '#ECECEC'
  },
  xButtonIcon: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#ECECEC'
  },
  kayak: {
    position: 'absolute',
    width: '26%',
    height: '11%',
    left: '15%',
    top: '20%',
  },
  rockClimb: {
    position: 'absolute',
    width: '26%',
    height: '11%',
    right: '15%',
    top: '20%',
  },
  badminton: {
    position: 'absolute',
    width: '26%',
    height: '11%',
    left: '15%',
    top: '43%',
  },
  bowling: {
    position: 'absolute',
    width: '26%',
    height: '11%',
    right: '15%',
    top: '43%',
  },
  basketball: {
    position: 'absolute',
    width: '26%',
    height: '11%',
    left: '15%',
    bottom:'23%'
  },
  chess: {
    position: 'absolute',
    width: '26%',
    height: '11%',
    right: '15%',
    bottom:'23%'
  }
});
