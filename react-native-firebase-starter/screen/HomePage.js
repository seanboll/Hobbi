import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function update() {
  let ref = firebase.database().ref("Users");
  return ref.once("value");
}
export default class HomePage extends React.Component {
  state =  {  name: '', age: 0, location: '', aboutMe: '', funFact: '', spiritAnimal: '', selectedHobbies: [], recommendedList: [], placement: 0, currentlyMatched: []}

  handleMatch() {
    // this.setState(prevState => ({
    //   currentlyMatched: [...prevState.currentlyMatched, this.state.name]
    // }))
    temp = this.state.currentlyMatched
    temp.push(this.state.name)
    this.props.navigation.navigate('HomePage1', {name: this.state.recommendedList[(this.state.placement + 1) % this.state.recommendedList.length], placement: this.state.placement + 1, matches: temp})
  }

  componentDidMount() {

    const uid = firebase.auth().currentUser.uid;
    let userList = ['CTjWBCqgkebT3VwOdYRj7JwsinX2', 'ClwYkWiZb2Vx0pdgs9YKJotgsAJ3', 'R9qltYPso0ZmWJF12P5VgTrJ35b2', 'cFTtuBU6UDVpUXc7z8myIIyUaYD2', 'cN934MXOLxdzf6seneAcKegArCc2', 'dUgMunm9aNdXNeNVfEKtnUyTOC62', 'fuovv4RAVUOExunutZeEAOAwjWK2', 'g0zbdloUcVXMAFISgYYE1ptWwKC3', 'u4n366uT7yedQlNRMZAyOidvYdV2', 'zGROJ2SbL4UxJNYV3HzsGOkzn4F2']
    let itemsRef2 = firebase.database().ref(`/Users/${uid}/info`);

    let userImages = {
      profilePictures: {
        Alec: require('../assets/profile_picture_example_Alec.png')
      }
    }

    let params = this.props.navigation.state.params
    let random;
    let myPlacement;
    let userMatch = [];
    if (params == null){
      random = userList[0]
      myPlacement = 0
      userMatch = []
    } else {
      random = this.props.navigation.state.params.name
      myPlacement = this.props.navigation.state.params.placement
      userMatch = this.props.navigation.state.params.matches
    }
    itemsRef = firebase.database().ref(`/Users/${random}/info`);
    let userName = "";
    let userAge = "";
    let userLocation = "";
    let userMe = "";
    let userFun = "";
    let userAnimal = "";
    let userHobbies = [];
    //let myList = []

    // ref.once("value", function(snapshot) {
    //   snapshot.forEach(function(childSnapshot) {
    //     let childData = childSnapshot.key;
    //     this.myList.push(childData);
    //   });
    // });

    // update().then((snapshot) => {
    //   snapshot.forEach(function(childSnapshot) {
    //     let childData = childSnapshot.key;
    //     myList.push(childData);
    //   });
    // });

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
      this.setState({ name:userName, age:userAge, location:userLocation, aboutMe:userMe, funFact:userFun, spiritAnimal:userAnimal, selectedHobbies: userHobbies, recommendedList: userList, placement:myPlacement, currentlyMatched: userMatch});
    })
  }
  
  render() {
    return (
      <View
        style={styles.container}>

        <TouchableHighlight
         style={styles.logoButton}
         onPress={() => this.props.navigation.navigate('HobbyPage', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement, matches: this.state.currentlyMatched})}>
          <Image source = {require('../assets/Logo.png')}
            style = {styles.logo} />
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.EventButton}
         onPress={() => this.props.navigation.navigate('EventPage', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement, matches: this.state.currentlyMatched})}>
          <Image source = {require('../assets/People_switch.png')}
            style = {styles.Event} />
        </TouchableHighlight>

        <View style={styles.rectangle}>
        </View>
          

        <Image source = {require('../assets/profile_picture_example2.png')}
          style = {styles.profilePicture} />

        <Text style = {styles.profileBioHeader}>
          {this.state.name}, {this.state.age} {"\n"}
          {this.state.location}
        </Text>

        { this.state.selectedHobbies.map((item, key)=>(
         <Text key={key} style={styles.profileBio}> - {item} (3) </Text>)
         )}

        <TouchableHighlight
           style={styles.infoButton}
           onPress={() => this.props.navigation.navigate('UserInfo', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement, matches: this.state.currentlyMatched})}>
           <Icon name="info" size={30} color = '#696969'>
          </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.profileButton}
         onPress={() => this.props.navigation.navigate('Profile', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement, matches: this.state.currentlyMatched})}>
         <Icon name="user"  size={30} color = 'gray' style = {styles.profileButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.chatButton}
         onPress={() => this.props.navigation.navigate('Chat', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement, matches: this.state.currentlyMatched})}>
         <Icon name="comments"  size={30} color = 'gray' style = {styles.chatButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.checkButton}
         onPress={() => this.handleMatch()}>
         <Icon name="check-circle"  size={100} color = 'green' style = {styles.checkButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.xButton}
         onPress={() => this.props.navigation.navigate('HomePage1', {name: this.state.recommendedList[(this.state.placement + 1) % this.state.recommendedList.length], placement: this.state.placement + 1, matches: this.state.currentlyMatched})}>
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
  profilePicture: {
    width: '52%',
    height: '23%',
    borderRadius: 175.5,
    borderColor: 'black',
    top: '21%',
    borderWidth: 1
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
    width: '90%',
    height: '5%',
    top: '30%',

    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 35,
    textAlign: 'center'
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
  infoButton: {
    position: 'absolute',
    width: '9%',
    height: '3%',
    right: '7%',
    top: '46%'
  },
});
