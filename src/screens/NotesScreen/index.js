import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import basicStyles from 'ReactNativeNotas/src/styles/basicStyles';
import NoteGridItem from 'ReactNativeNotas/src/screens/NotesScreen/NoteGridItem';
import FAB from 'ReactNativeNotas/src/components/FAB';
const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class NotesScreen extends Component {
  openNote = note => {
    this.props.navigation.navigate('notescreen', {
      note: note,
      title: note ? 'Editar Nota' : 'Nueva Nota',
    });
  };
  getCategory = categoryId =>
    this.props.categories.find(c => c.id === categoryId);

  render() {
    const {notes} = this.props;
    return (
      <View style={basicStyles.container}>
        <FlatList
          style={styles.list}
          data={notes}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({item}) => (
            <NoteGridItem
              note={item}
              onPress={this.openNote}
              category={this.getCategory(item.categoryId)}
            />
          )}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text>No tienes ninguna nota</Text>
              <Text>Toca el botón inferior "+" para añadir notas</Text>
            </View>
          }
        />
        <FAB text="+" onPress={() => this.openNote(null)} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    categories: state.categories,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps)(NotesScreen);
