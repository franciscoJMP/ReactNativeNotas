import React, {Component} from 'react';
import {View, Text} from 'react-native';
import basicStyles from 'ReactNativeNotas/src/styles/basicStyles';
export default class Screen1 extends Component {
  render() {
    return (
      <View style={basicStyles.container}>
        <Text> Ajustes 1</Text>
      </View>
    );
  }
}
