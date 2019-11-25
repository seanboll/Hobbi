import React from 'react'
import { StyleSheet, Text, TextInput, View, Button,  TouchableOpacity, TouchableHighlight} from 'react-native'
import firebase from 'react-native-firebase'
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import CustomMultiPicker from "react-native-multiple-select-list"
//import MultipleChoice from 'react-native-multiple-choice'

const hobbies = [{
  id: 'Badminton',
  name: 'Badminton'
}, {
  id: 'Basketball',
  name: 'Basketball'
}, {
  id: 'Bowling',
  name: 'Bowling'
}, {
  id: 'Chess',
  name: 'Chess'
}, {
  id: 'Football',
  name: 'Football'
}, {
  id: 'Fishing',
  name: 'Fishing'
}, {
  id: 'Kayaking',
  name: 'Kayaking'
}, {
  id: 'Rock Climbing',
  name: 'Rock Climbing'
}, {
  id: 'Skiing',
  name: 'Skiing'
}, {
  id: 'Snowboarding',
  name: 'Snowboarding'
}, {
  id: 'Soccer',
  name: 'Soccer'
}, {
  id: 'Tennis',
  name: 'Tennis'
}]

export default class ChangeInfo extends React.Component {
  state =  {  name: '', age: 0, location: '', aboutMe: '', funFact: '', spiritAnimal: '', selectedHobbies: [], recommendedList: [], placement: 0}

  componentDidMount() {

    let userList = ['CTjWBCqgkebT3VwOdYRj7JwsinX2', 'ClwYkWiZb2Vx0pdgs9YKJotgsAJ3', 'R9qltYPso0ZmWJF12P5VgTrJ35b2', 'cFTtuBU6UDVpUXc7z8myIIyUaYD2', 'cN934MXOLxdzf6seneAcKegArCc2', 'dUgMunm9aNdXNeNVfEKtnUyTOC62', 'fuovv4RAVUOExunutZeEAOAwjWK2', 'g0zbdloUcVXMAFISgYYE1ptWwKC3', 'u4n366uT7yedQlNRMZAyOidvYdV2', 'zGROJ2SbL4UxJNYV3HzsGOkzn4F2']
    const uid = firebase.auth().currentUser.uid;
    let itemsRefInfo = firebase.database().ref(`/Users/${uid}/info`);

    let userName = "";
    let userAge = "";
    let userLocation = "";
    let userMe = "";
    let userFun = "";
    let userAnimal = "";
    let userHobbies = [];

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

    let nameHold = "Name"
    let ageHold = "Age"
    let locationHold = "Location"
    let factHold = "Fun Fact"
    let animalHold = "Spirit Animal"
    let aboutMeHold = "About Me"

    itemsRefInfo.on('value', snapshot => {
      let data = snapshot.val();
      if (snapshot.hasChild("name")) {
        userName = data.name;
        nameHold = data.name;
      }
      if (snapshot.hasChild("age")) {
        userAge = data.age;
        ageHold = data.age;
      } 
      if (snapshot.hasChild("location")) {
        userLocation = data.location;
        locationHold = data.location;
      } 
      if (snapshot.hasChild("aboutMe")) {
        userMe = data.aboutMe;
        aboutMeHold = data.aboutMe;
      } 
      if (snapshot.hasChild("funFact")) {
        userFun = data.funFact;
        factHold = data.funFact;
      } 
      if (snapshot.hasChild("spiritAnimal")) {
        userAnimal = data.spiritAnimal;
        animalHold = data.spiritAnimal;
      }
      if (snapshot.hasChild("selectedHobbies")) {
        userHobbies = data.selectedHobbies;
      } 
      // let items = Object.values(data);
      this.setState({ name:userName, age:userAge, location:userLocation, aboutMe:userMe, funFact:userFun, spiritAnimal:userAnimal, selectedHobbies: userHobbies, recommendedList: userList, placement:myPlacement});
    })
  }


  writeUserData = () => {

    const uid = firebase.auth().currentUser.uid;
    const { name, age, location, aboutMe, funFact, spiritAnimal, selectedHobbies} = this.state

    firebase.database().ref(`Users/${uid}/info`).set(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    // check on previous state, how to keep the previous state???
    // only write when it's different with the new state
    this.writeUserData();
  }

  // Go to profile page, and reset matching, place hold
  handleSubmit = () => {
    this.props.navigation.navigate('Profile', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement})
  }

  onSelectedItemsChange = (selectedHobbies) => {
    this.setState({ selectedHobbies });
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };




  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
           style={styles.chatButton}
           onPress={() => this.props.navigation.navigate('Profile', {name: this.state.recommendedList[this.state.placement], placement: this.state.placement})}>
           <Icon name="chevron-right"  size={30} color = 'gray' style = {styles.chatButtonIcon}>
          </Icon>
          </TouchableHighlight>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            Hobbi
          </Text>
        </View>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}

        <TextInput
          placeholder="   {userName}"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          placeholder="   {userAge}"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={age => this.setState({ age })}
          value={String(this.state.age)}
        />
        <TextInput
          placeholder="   {userLocation}"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={location => this.setState({ location })}
          value={this.state.location}
        />
        <TextInput
          placeholder="   {userFun}"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={funFact => this.setState({ funFact })}
          value={this.state.funFact}
        />
        <TextInput
          placeholder="   {userAnimal}"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={spiritAnimal => this.setState({ spiritAnimal })}
          value={this.state.spiritAnimal}
        />
        <TextInput
          placeholder="   {userMe}"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={aboutMe => this.setState({ aboutMe })}
          value={this.state.aboutMe}
          multiline={true}
          numberOfLines={5}
        />
        <View style={styles.multiSelectContainer}>
          <MultiSelect
            items={hobbies}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedHobbies}
            selectText='Pick Hobbies'
            searchInputPlaceholderText='Search Hobbies...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='gray'
            tagBorderColor='gray'
            tagTextColor='gray'
            borderColor = 'gray'
            selectedItemTextColor='gray'
            selectedItemIconColor='gray'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: 'gray' }}
            removeSelected
          />
        </View>
      </View>
      

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC'
  },
  multiSelectContainer: {
    height: '5%',
    width: '90%',
    marginTop: '2%'
  },
  button: {
    marginTop: 20
  },
  rectangle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3, //solid #FFFBFB,
    borderColor: '#DFB662',
    borderRadius: 34.5
  },
  textInput: {
    height: '5%',
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: '2%',
    color: 'black',
    backgroundColor: 'white'
  },
  getStartedContainer: {
    alignItems: 'center',
  },
  getStartedText: {
    fontFamily: "Montserrat-ExtraBold",
    fontSize: 25,
    color: '#DFB662',
    textAlign: 'center',
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
})
