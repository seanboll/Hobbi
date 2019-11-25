import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function update() {
  let ref = firebase.database().ref("Users");
  return ref.once("value");
}
export default class Chat extends React.Component {
  state =  {  name: '', age: 0, location: '', aboutMe: '', funFact: '', spiritAnimal: '', selectedHobbies: [], recommendedList: [], placement: 0}

  componentDidMount() {

    const uid = firebase.auth().currentUser.uid;
    let userList = ['CTjWBCqgkebT3VwOdYRj7JwsinX2', 'ClwYkWiZb2Vx0pdgs9YKJotgsAJ3', 'R9qltYPso0ZmWJF12P5VgTrJ35b2', 'cFTtuBU6UDVpUXc7z8myIIyUaYD2', 'cN934MXOLxdzf6seneAcKegArCc2', 'dUgMunm9aNdXNeNVfEKtnUyTOC62', 'fuovv4RAVUOExunutZeEAOAwjWK2', 'g0zbdloUcVXMAFISgYYE1ptWwKC3', 'u4n366uT7yedQlNRMZAyOidvYdV2', 'zGROJ2SbL4UxJNYV3HzsGOkzn4F2']
    let itemsRef2 = firebase.database().ref(`/Users/${uid}/info`);


    let params = this.props.navigation.state.params
    let random;
    let myPlacement;
    if (params == null){
      random = userList[0]
      myPlacement = 0
    } else {
      random = this.props.navigation.state.params.name
      myPlacement = this.props.navigation.state.params.placement 
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
    this.setState({ name:userName, age:userAge, location:userLocation, aboutMe:userMe, funFact:userFun, spiritAnimal:userAnimal, selectedHobbies: userHobbies, recommendedList: userList, placement:myPlacement});

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
      this.setState({ name:userName, age:userAge, location:userLocation, aboutMe:userMe, funFact:userFun, spiritAnimal:userAnimal, selectedHobbies: userHobbies, recommendedList: userList, placement:myPlacement});
    })
  }

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
         onPress={() => this.props.navigation.navigate('HomePage', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement})}>
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
