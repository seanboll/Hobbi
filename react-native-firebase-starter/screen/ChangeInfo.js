import React from 'react'
import { StyleSheet, Text, TextInput, View, Button,  TouchableOpacity} from 'react-native'
import firebase from 'react-native-firebase'
import { Switch } from 'react-native-switch'
// import CustomMultiPicker from "react-native-multiple-select-list"
//import MultipleChoice from 'react-native-multiple-choice'


export default class ChangeInfo extends React.Component {
  state =  {  name: '', age: 0, location: '', aboutMe: '', funFact: ''}

  componentDidMount() {

    const uid = firebase.auth().currentUser.uid;
    let itemsRef = firebase.database().ref(`/Users/${uid}/info`);

    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let userName = data.name;
      let userAge = data.age;
      let userLocation = data.location;
      let userMe = data.aboutMe;
      let userFun = data.funFact;
      let userAnimal = data.spiritAnimal;
      // let items = Object.values(data);
      this.setState({ name:userName, age:userAge, location:userLocation, aboutMe:userMe, funFact:userFun, spiritAnimal:userAnimal  });
    })
  }


  writeUserData = () => {

    const uid = firebase.auth().currentUser.uid;
    const { errorMessage, name, age, location, funFact, spiritAnimal, aboutMe} = this.state

    firebase.database().ref(`Users/${uid}/info`).set(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    // check on previous state, how to keep the previous state???
    // only write when it's different with the new state
    this.writeUserData();
  }

  // Go to profile page, and reset matching, place hold
  handleSubmit = () => {
    this.props.navigation.navigate('Profile')
  }

  hobbySelect = () => {
    this.writeUserData();
    this.props.navigation.navigate('SelectHobbies')
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rectangle}>
        </View>
        <View style={styles.getStartedContainer}>
        <TouchableOpacity onPress={() => this.hobbySelect}>
          <Text style={styles.getStartedText}>
            My Hobbi(s)
          </Text>
        </TouchableOpacity>
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

        <Button style = {styles.buttonStyle} title="Submit" onPress={this.handleSubmit} />
        <Button style = {styles.buttonStyle} title="Cancel" onPress={this.cancel} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  buttonStyle: {
    top: 630
  },
  loginText: {
    position: 'absolute',
    left: 87,
    top: 610,
    fontFamily: "Montserrat-ExtraBold",
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'left',
    color: 'white'
  },
  rectangle: {
    position: 'absolute',
    width: 208,
    height: 60,
    left: 85,
    top: 195,

    backgroundColor: 'white',
    borderWidth: 3, //solid #FFFBFB,
    borderColor: '#DFB662',
    borderRadius: 34.5
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    color: 'black',
    backgroundColor: 'white'
  },
  switch: {
    marginTop: 15
  },
  getStartedContainer: {
    alignItems: 'center',
  },
  getStartedText: {
    fontFamily: "Montserrat-ExtraBold",
    fontSize: 25,
    color: '#DFB662',
    textAlign: 'center',
  }
})
