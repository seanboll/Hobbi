import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import { f, auth, database, storage } from '../config/config';

export default class HomePage extends React.Component {
  state =  {  name: '', age: 0, location: '', aboutMe: '', funFact: '', spiritAnimal: '', selectedHobbies: []}

  componentDidMount() {

    const uid = firebase.auth().currentUser.uid;
    let itemsRef = firebase.database().ref(`/Users/${uid}/info`);

    let userName = "";
    let userAge = "";
    let userLocation = "";
    let userMe = "";
    let userFun = "";
    let userAnimal = "";
    let userHobbies = [];

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


  render() {
    return (
      <View
        style={styles.container}>

        <Image source = {require('../assets/profile_picture_example2.png')}
          style = {styles.profilePicture} />

        <Text style = {styles.profileBioHeader4}>
          <Text style = {styles.profileBioHeader3}>   {this.state.name.charAt(0).toUpperCase()}{this.state.name.substr(1)}, {this.state.age} {"\n"}</Text>
        </Text>
        <Text style = {styles.profileBioHeader}>
          {"\n"}
          {"\n"}
          <Text style = {styles.profileBioHeader3}>   Location: </Text> <Text style = {styles.profileBioHeader2}> {this.state.location} {"\n"}</Text>
          <Text style = {styles.profileBioHeader3}>   Fun Fact: </Text> <Text style = {styles.profileBioHeader2}> {this.state.funFact} {"\n"}</Text>
          <Text style = {styles.profileBioHeader3}>   Spirit Animal: </Text> <Text style = {styles.profileBioHeader2}> {this.state.spiritAnimal} {"\n"}</Text>
          <Text style = {styles.profileBioHeader3}>   About me: </Text> <Text style = {styles.profileBioHeader2}> {this.state.aboutMe} {"\n"}</Text>
        </Text>

        <TouchableHighlight
         style={styles.settingButton}
         onPress={() => this.props.navigation.navigate('Main')}>
         <Image source = {require('../assets/logout.png')}
          style = {styles.settingButtonIcon} />
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.arrowButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
         <Icon name="chevron-right"  size={30} color = 'gray' style = {styles.arrowButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <View style={styles.editCenter}>
        <TouchableHighlight
         style={styles.editInfo}
         onPress={() => this.props.navigation.navigate('ChangeInfo')}>
         <Icon name="edit"  size={30} color = 'gray' style = {styles.editInfoIcon}>
        </Icon>
        </TouchableHighlight>
        </View>
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
  profilePicture: {
    width: '52%',
    height: '23%',
    borderRadius: 175.5,
    borderColor: 'black',
    top: '21%',
    borderWidth: 1
  },
  settingButton: {
    position: 'absolute',
    width: '13%',
    height: '5.7%',
    left: '5%',
    top: '4%',
    backgroundColor: '#ECECEC'
  },
  editInfo: {
    position: 'absolute',
    width: '13%',
    height: '5.2%',
    top: '85%',
    backgroundColor: '#ECECEC'
  },
  editCenter: {
    flex: 3,
    alignItems: 'center',
  },
  editInfoIcon: {
    position: 'absolute',
    backgroundColor: '#ECECEC'
  },
  settingButtonIcon: {
    position: 'absolute',
    width: '50%',
    height: '50%',
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
    textAlign: 'left'
  },
  profileBioHeader2: {
    fontFamily: 'Montserrat-Regular'
  },
  profileBioHeader3: {
    fontFamily: 'Montserrat-Black'
  },
  profileBioHeader4: {
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
  arrowButton: {
    position: 'absolute',
    width: '13%',
    height: '5.7%',
    right: '0%',
    top: '4%',
    backgroundColor: '#ECECEC'
  },
  arrowButtonIcon: {
    position: 'absolute',
    backgroundColor: '#ECECEC'
  }
});

/*
import React from 'react'
import { StyleSheet, Button, ScrollView, Platform, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Font} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class HomePage extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}>

        <Image source = {require('../assets/profile_picture_example2.png')}
          style = {styles.profilePicture} />

        <Text style = {styles.profileBioHeader}>
        Jen, 23
        </Text>

        <TouchableHighlight
         style={styles.settingButton}
         onPress={() => this.props.navigation.navigate('Main')}>
         <Image source = {require('../assets/logout.png')}
          style = {styles.settingButtonIcon} />
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.arrowButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
         <Icon name="chevron-right"  size={30} color = 'gray' style = {styles.arrowButtonIcon}>
        </Icon>
        </TouchableHighlight>

        <TouchableHighlight
         style={styles.editInfo}
         onPress={() => this.props.navigation.navigate('ChangeInfo')}>
         <Icon name="edit"  size={30} color = 'gray' style = {styles.editInfoIcon}>
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
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 175.5,
    borderColor: 'black',
    left: 79,
    top: 190,
    borderWidth: 1
  },
  settingButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 15,
    top: 30,
    backgroundColor: '#ECECEC'
  },
  editInfo: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 88,
    top: 481,
    backgroundColor: '#ECECEC'
  },
  editInfoIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: '#ECECEC'
  },
  settingButtonIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
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
  arrowButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 312,
    top: 30,
    backgroundColor: '#ECECEC'
  },
  arrowButtonIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: '#ECECEC'
  }
});
*/