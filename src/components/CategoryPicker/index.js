import React from 'react';
import {Text, View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import basicStyles from 'ReactNativeNotas/src/styles/basicStyles';
import withColors from 'ReactNativeNotas/src/styles/withColors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  content: {
    padding: 15,
    maxWidth: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  colorView: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const categories = [
  {
    id: 1,
    category: 'Personal',
    color: '#FFB3BA',
  },
  {
    id: 2,
    category: 'Trabajo',
    color: '#FFDEB9',
  },
  {
    id: 3,
    category: 'Casa',
    color: '#FFFFB9',
  },
];

const CategoryPicker = ({
  selectedCategory,
  onChange,
  visible,
  onRequestClose,
}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onRequestClose}>
    <View style={styles.container}>
      <View style={[basicStyles.paper, styles.content]}>
        <Text style={styles.title}>Elige categoría:</Text>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={styles.row}
            onPress={() => onChange(category)}>
            <View
              style={[styles.colorView, {backgroundColor: category.color}]}
            />
            <Text>{category.category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </Modal>
);

export default CategoryPicker;
