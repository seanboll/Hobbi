import React from 'react'
import { StyleSheet, Text, TextInput, View, Button,  TouchableOpacity, TouchableHighlight} from 'react-native'
import firebase from 'react-native-firebase'
import { Switch } from 'react-native-switch'
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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

export default class SignUpInfo extends React.Component {
  state =  {  name: '', age: 0, location: '', aboutMe: '', funFact: '', spiritAnimal: '', selectedHobbies: []}

  writeUserData = () => {
        const uid = firebase.auth().currentUser.uid;
        const { name, age, location, aboutMe, funFact, spiritAnimal, selectedHobbies} = this.state

        firebase.database().ref(`Users/${uid}/info`).set(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
      // only write when it's different with the new state
      this.writeUserData();
  }


  handleSignUp = () => {
    this.props.navigation.navigate('HomePage')
  }

  componentDidMount() {

    const uid = firebase.auth().currentUser.uid;
    let itemsRefInfo = firebase.database().ref(`/Users/${uid}/info`);

    let userName = "";
    let userAge = "";
    let userLocation = "";
    let userMe = "";
    let userFun = "";
    let userAnimal = "";
    let userHobbies = [];

    itemsRefInfo.on('value', snapshot => {
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
  onSelectedItemsChange = (selectedHobbies) => {
    this.setState({ selectedHobbies });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
         style={styles.chatButton}
         onPress={() => this.props.navigation.navigate('HomePage')}>
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
          placeholder="   Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          placeholder="   Age"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={age => this.setState({ age })}
          value={String(this.state.age)}
        />
        <TextInput
          placeholder="   Location"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={location => this.setState({ location })}
          value={this.state.location}
        />
        <TextInput
          placeholder="   Fun Fact"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={funFact => this.setState({ funFact })}
          value={this.state.funFact}
        />
        <TextInput
          placeholder="   Spirit Animal"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={spiritAnimal => this.setState({ spiritAnimal })}
          value={this.state.spiritAnimal}
        />
        <TextInput
          placeholder="   About Me"
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
            selectText='Pick Items'
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='gray'
            tagBorderColor='gray'
            tagTextColor='gray'
            borderColor= 'gray'
            selectedItemTextColor='gray'
            selectedItemIconColor='gray'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: 'gray' }}
            submitButtonColor='gray'
            submitButtonText='Submit'
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
    backgroundColor: '#DFB662'
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