import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ColorView} from 'ReactNativeNotas/src/components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});

const CategoryItem = ({item, openChangeColor,onChangeText,onRemove}) => {
  const {category, color} = item;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => openChangeColor(item)}>
        <ColorView color={color} />
      </TouchableOpacity>
      <TextInput style={styles.text} onChangeText={onChangeText} value={category} />
      <TouchableOpacity onPress={onRemove}>
        <Icon name="delete" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
