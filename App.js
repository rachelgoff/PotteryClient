
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import PotteryType from './src/components/PotteryType/PotteryType';
import ClayType from './src/components/PotteryType/ClayType';
import Card from './src/components/PotteryType/Card';
import clayData from './src/components/clayData';
import GlazeType from './src/components/PotteryType/GlazeType';
import FiringType from './src/components/PotteryType/FiringType';
import AfterFirstFiring from './src/components/PotteryType/AfterFirstFiring';
import CameraScreen from './src/components/PotteryType/CameraScreen';
import PotteryLists from './src/components/SummaryPage/PotteryLists';
import ajax from './src/ajax';

const RootStack = createStackNavigator(
  {
    Login: {screen: Login},
    Card: {screen: Card},
    PotteryType: {screen: PotteryType},
    ClayType: {screen: ClayType},
    GlazeType: {screen: GlazeType},
    FiringType: {screen: FiringType},
    AfterFirstFiring: {screen: AfterFirstFiring},
    CameraScreen: {screen: CameraScreen},
    PotteryLists: {screen: PotteryLists}
  },
  {
    initialRouteName:'Login',
    headerMode:'none'
  }
  )

export default class App extends Component {
  render(){
    return (
      <RootStack clayTypes={clayData.clayType}/>
      )
  }
}
