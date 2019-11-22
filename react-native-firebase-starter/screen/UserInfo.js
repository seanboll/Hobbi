import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font, TextInputt} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class HomePage extends React.Component {
  state =  {  name: '', age: 0, location: '', aboutMe: '', funFact: '', animal: '', selectedHobbies: []}

  componentDidMount() {

    //const uid = firebase.auth().currentUser.uid;
    //let itemsRefInfo = firebase.database().ref(`/Users/${uid}/info`);
    let usersRef = firebase.database().ref('/Users/')
    let itemsRef = firebase.database().ref(`/Users/ClwYkWiZb2Vx0pdgs9YKJotgsAJ3/info`);

    let userName = "";
    let userAge = "";
    let userLocation = "";
    let userMe = "";
    let userFun = "";
    let userAnimal = "";
    let userHobbies = [];

    usersRef.on('value', snapshot =>{
      for (var key in snapshot.val()) {
        itemsRef = firebase.database().ref(`/Users/{snapshot.val()[key]}/info`);
      }
    })

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
      this.setState({ name:userName, age:userAge, location:userLocation, aboutMe:userMe, funFact:userFun, spiritAnimal:userAnimal, selectedHobbies: userHobbies  });
    })
  }

  //this.state.selectedHobbies.map((type)=> <TextInput placeholder={type} />)

  //<Text style = {styles.profileBioHeader2}> {this.state.selectedHobbies} (5), kayaking (4), basketball (1), tennis (2), mountain biking (2) {"\n"}</Text>
  
  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight
         style={styles.logoButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
          <Image source = {require('../assets/Logo.png')}
            style = {styles.logo} />
        </TouchableHighlight>

        <ScrollView>
        <Text style = {styles.profileBioHeader}>
          <Text style = {styles.profileBioHeader3}>Hobby(s): </Text><Text style = {styles.profileBioHeader2}> {this.state.selectedHobbies} (5), kayaking (4), basketball (1), tennis (2), mountain biking (2) {"\n"}</Text>
          <Text style = {styles.profileBioHeader3}>About Me:</Text><Text style = {styles.profileBioHeader2}> {this.state.aboutMe}  {"\n"}</Text>
          <Text style = {styles.profileBioHeader3}>Location:</Text><Text style = {styles.profileBioHeader2}> {this.state.location} {"\n"}</Text>
          <Text style = {styles.profileBioHeader3}>Fun Fact:</Text><Text style = {styles.profileBioHeader2}> {this.state.funFact} {"\n"}</Text>
          <Text style = {styles.profileBioHeader3}>Spirit Animal:</Text><Text style = {styles.profileBioHeader2}> {this.state.animal}</Text>

        </Text>
        </ScrollView>

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
    backgroundColor: '#ECECEC'
  },
  logo: {
    width: 80,
    height: 66.85,
    position: 'absolute',
  },
  logoButton: {
    width: 80,
    height: 66.85,
    position: 'absolute',
    left: 148,
    top: 69,
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
    left: 12,
    top: 200,

    fontSize: 18,
    lineHeight: 35,
    textAlign: 'left'
  },
  profileBioHeader2: {
    fontFamily: 'Montserrat-Regular'
  },
  profileBioHeader3: {
    fontFamily: 'Montserrat-Black'
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
  rectangleButton: {
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
