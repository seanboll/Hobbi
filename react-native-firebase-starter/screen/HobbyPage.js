import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class HobbyPage extends React.Component {
  state =  {  name: '', age: 0, location: '', aboutMe: '', funFact: '', spiritAnimal: '', selectedHobbies: [], recommendedList: [], placement: 0}

  componentDidMount() {

    // let sports = {
    //   kayak: require('../assets/kayak.png')
    // }
    let userList = ['CTjWBCqgkebT3VwOdYRj7JwsinX2', 'ClwYkWiZb2Vx0pdgs9YKJotgsAJ3', 'R9qltYPso0ZmWJF12P5VgTrJ35b2', 'cFTtuBU6UDVpUXc7z8myIIyUaYD2', 'cN934MXOLxdzf6seneAcKegArCc2', 'dUgMunm9aNdXNeNVfEKtnUyTOC62', 'fuovv4RAVUOExunutZeEAOAwjWK2', 'g0zbdloUcVXMAFISgYYE1ptWwKC3', 'u4n366uT7yedQlNRMZAyOidvYdV2', 'zGROJ2SbL4UxJNYV3HzsGOkzn4F2']
    let params = this.props.navigation.state.params
    let random;
    let myPlacement;
    if (params == null){
      random = userList[0]
      myPlacement = 4
    } else {
      random = this.props.navigation.state.params.name
      myPlacement = this.props.navigation.state.params.placement 
    }

    // const uid = auth.currentUser.uid;
    let itemsRef = firebase.database().ref(`/Users/${random}/info`);
    // hard coded the friend uid, should be generated by the matching algorithms

    let userName = "";
    let userAge = "";
    let userLocation = "";
    let userMe = "";
    let userFun = "";
    let userAnimal = "";
    let userHobbies = [];
    this.setState({ name:userName, age:userAge, location:userLocation, aboutMe:userMe, funFact:userFun, spiritAnimal:userAnimal, selectedHobbies: userHobbies, recommendedList: userList, placement:myPlacement});

    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      if (snapshot.hasChild("name")) {
        userName = data.name;
      }
      if (snapshot.hasChild("age")) {
        userAge = data.age;
      } 
      if (snapshot.hasChild("location")) {
        userLocation = data.location;
      } 
      if (snapshot.hasChild("aboutMe")) {
        userMe = data.aboutMe;
      } 
      if (snapshot.hasChild("funFact")) {
        userFun = data.funFact;
      } 
      if (snapshot.hasChild("spiritAnimal")) {
        userAnimal = data.spiritAnimal;
      } 
      if (snapshot.hasChild("selectedHobbies")) {
        userHobbies = data.selectedHobbies;
      } 
      // let items = Object.values(data);
      this.setState({ name:userName, age:userAge, location:userLocation, aboutMe:userMe, funFact:userFun, spiritAnimal:userAnimal, selectedHobbies: userHobbies, recommendedList:userList, placement:myPlacement });
    })
  }
  
  render() {
    return (
      <View
        style={styles.container}>

        <TouchableHighlight
         style={styles.logoButton}
         onPress={() => this.props.navigation.navigate('HomePage', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement})}>
          <Image source = {require('../assets/Logo.png')}
            style = {styles.logo} />
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.EventButton}
         onPress={() => this.props.navigation.navigate('EventPage', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement})}>
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
         onPress={() => this.props.navigation.navigate('HomePage', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement})}>
        <View style={styles.rectangle}>
        </View>
        </TouchableHighlight>


        <TouchableHighlight
         style={styles.profileButton}
         onPress={() => this.props.navigation.navigate('Profile', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement})}>
         <Icon name="user"  size={30} color = 'gray' style = {styles.profileButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.chatButton}
         onPress={() => this.props.navigation.navigate('Chat', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement})}>
         <Icon name="comments"  size={30} color = 'gray' style = {styles.chatButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.checkButton}
         onPress={() => this.props.navigation.navigate('HomePage', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement})}>
         <Icon name="check-circle"  size={100} color = 'green' style = {styles.checkButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.xButton}
         onPress={() => this.props.navigation.navigate('HomePage', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement})}>
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
