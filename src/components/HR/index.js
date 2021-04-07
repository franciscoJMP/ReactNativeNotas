import React from 'react';
import {Text, View} from 'react-native';

const HR = ({size, color}) => (
  <View
    style={{
      borderBottomColor: color || '#666',
      borderBottomWidth: 1,
      margin: 10,
      width: size || '90%',
    }}
  />
);
export default HR;
