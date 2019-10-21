import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator, SwitchNavigator } from 'react-navigation'

// import different screens
import Loading from './screen/Loading'
import SignUp from './screen/SignUp'
import Login from './screen/Login'
import Main from './screen/Main'
import HomePage from './screen/HomePage'

// create our app's navigation stack
const AppStack = createSwitchNavigator(
{
	Loading: {
		screen: Loading,
		navigationOptions: {
			header: null,
		}
	},
	SignUp: {
		screen: SignUp
	},
	Login: {
		screen: Login
	},
	HomePage: {
		screen: HomePage
	},
	Main: {
		screen: Main
	}
});
export default createAppContainer(
  AppStack
);
