import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import basicStyles from 'ReactNativeNotas/src/styles/basicStyles';
import {HR, CategoryPicker} from 'ReactNativeNotas/src/components';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  input: {
    width: '90%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 16,
    textAlignVertical: 'top',
  },
  timestamp: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  categoryRow: {
    width: '100%',
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorView: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
});

class NoteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.route.params.note,
      modalVisible: false,
    };
  }

  toggleCategoryPicker = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };

  handleChangeColor = category => {
    this.setState({modalVisible: false});
    this.updateNoteState({category});
  };

  updateNoteState = property => {
    const newNote = {...this.state.note, ...property};
    this.setState({note: newNote});
  };
  render() {
    const {note, modalVisible} = this.state;
    const {title, text, created, category} = note;
    return (
      <View style={[basicStyles.container, styles.container]}>
        <View style={styles.timestamp}>
          {created && (
            <Text>
              {created.toLocaleTimeString()} - {created.toLocaleDateString()}
            </Text>
          )}
        </View>
        <Text style={basicStyles.title}> Crear Una Nota</Text>
        <TextInput
          style={[styles.input, styles.title]}
          placeholder="Título"
          value={title}
          onChangeText={text => this.updateNoteState({title: text})}
        />
        <HR />
        <TextInput
          styles={[styles.input, styles.note]}
          placeholder="Nota"
          value={text}
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity
          style={styles.categoryRow}
          onPress={this.toggleCategoryPicker}>
          {category && (
            <React.Fragment>
              <View
                style={[styles.colorView, {backgroundColor: category.color}]}
              />
              <Text>{category.category}</Text>
            </React.Fragment>
          )}
          {!category && <Text>Elige categoría</Text>}
        </TouchableOpacity>

        <CategoryPicker
          visible={modalVisible}
          onChange={this.handleChangeColor}
          onRequestClose={this.toggleCategoryPicker}
        />
      </View>
    );
  }
}

export default NoteScreen;
