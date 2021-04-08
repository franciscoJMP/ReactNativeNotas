import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import basicStyles from 'ReactNativeNotas/src/styles/basicStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 130,
  },
  title: {
    fontWeight: 'bold',
  },
  text: {},
});

const NoteGridItem = ({note, onPress,categories}) => {
  const {title, description, categoryId} = note;
  const category = categories.find(c => c.id === categoryId);

  return (
    <TouchableOpacity
      style={[
        basicStyles.paper,
        styles.container,
        {backgroundColor: (category && category.color) || "white"},
      ]}
      onPress={() => onPress(note)}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text} numberOfLines={5}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};
const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};
export default connect(mapStateToProps)(NoteGridItem);
