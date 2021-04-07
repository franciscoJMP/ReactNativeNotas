import React, {Component} from 'react';
import {View, Text} from 'react-native';
import basicStyles from 'ReactNativeNotas/src/styles/basicStyles';
export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={basicStyles.container}>
        <Text> Ajustes</Text>
      </View>
    );
  }
}
