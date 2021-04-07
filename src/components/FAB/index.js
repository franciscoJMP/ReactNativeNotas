import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const size = 50;

const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    backgroundColor: '#0000ff',
    alignItems: 'center',
    shadowOffset: {width: 1, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
const FAB = props => {
  const {
    style,
    textStyle,
    text,
    children,
    primary,
    secondary,
    accent,
    colors,
    ...otherProps
  } = props;
  return (
    <TouchableOpacity style={styles.container} {...otherProps}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FAB;
