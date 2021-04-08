import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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


const CategoryPicker = ({
  selectedCategory,
  onChange,
  visible,
  onRequestClose,
  categories,
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

const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(CategoryPicker);
