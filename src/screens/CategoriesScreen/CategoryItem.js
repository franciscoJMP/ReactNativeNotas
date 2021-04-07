import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  colorView: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});

const CategoryItem = ({item, openChangeColor}) => {
  const {category, color} = item;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => openChangeColor(item)}>
        <View style={[styles.colorView, {backgroundColor: color}]} />
      </TouchableOpacity>
      <TextInput style={styles.text} value={category} />
      <TouchableOpacity>
        <Icon name="delete" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
