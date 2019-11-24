import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Chat extends React.Component {
  render() {
    return (
      <View
        style={styles.container}>

        <View
        style={styles.container2}>
          <Icon name="comments"  size={60} color = '#EBB448' style = {styles.chatPageLogo}>
          </Icon>
        </View>

          <Image source = {require('../assets/profile_picture_example2.png')}
            style = {styles.profilePicture} />


        <TouchableHighlight
         style={styles.homepageButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
         <Icon name="chevron-left"  size={30} color = 'gray' style = {styles.homepageButtonIcon}>
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
  },
  container2: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignItems: 'center'
  },
  chatPageLogo: {
    position: 'absolute',
    top: '4%',
  },
  profilePicture: {
    position: 'absolute',
    width: '17.5%',
    height: '7.28%',
    borderRadius: 140,
    borderColor: 'black',
    left: '10%',
    top: '15%',
    borderWidth: 1
  },
  homepageButton: {
    position: 'absolute',
    width: '13%',
    height: '5.7%',
    left: '5%',
    top: '4%',
    backgroundColor: '#ECECEC'
  },
  homepageButtonIcon: {
    position: 'absolute',
    backgroundColor: '#ECECEC'
  }
});
