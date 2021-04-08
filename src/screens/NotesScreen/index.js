import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import basicStyles from 'ReactNativeNotas/src/styles/basicStyles';
import NoteGridItem from 'ReactNativeNotas/src/screens/NotesScreen/NoteGridItem';
import FAB from 'ReactNativeNotas/src/components/FAB';
const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});
const notas = [
  {
    id: 1,
    title: 'Nota 1',
    text: 'Contenido nota 1',
    category: {
      category: 'Personal',
      color: '#FFB3BA',
    },
    created: new Date(),
  },
  {
    id: 2,
    title: 'Nota 2',
    text: 'Contenido nota 2',
    category: {
      category: 'Trabajo',
      color: '#FFDEB9',
    },
    created: new Date(),
  },
  {
    id: 3,
    title: 'Nota 3',
    text: 'Contenido nota 3',
    category: {
      category: 'Casa',
      color: '#FFFFB9',
    },
    created: new Date(),
  },
  {
    id: 4,
    title: 'Nota 4',
    text: 'Contenido nota 4',
    category: {
      category: 'Viaje',
      color: '#BAE0FF',
    },
    created: new Date(),
  },
];
export default class NotesScreen extends Component {
  openNote = note => {
    this.props.navigation.navigate('notescreen', {
      note: note,
      title: note ? 'Editar Nota' : 'Nueva Nota',
    });
  };
  render() {
    return (
      <View style={basicStyles.container}>
        <FlatList
          style={styles.list}
          data={notas}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({item}) => (
            <NoteGridItem note={item} onPress={this.openNote} />
          )}
        />
        <FAB text="+" onPress={() => this.openNote(null)} />
      </View>
    );
  }
}
