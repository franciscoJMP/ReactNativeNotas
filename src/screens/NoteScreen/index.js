import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import basicStyles from 'ReactNativeNotas/src/styles/basicStyles';
import {
  HR,
  CategoryPicker,
  ColorView,
  Button,
} from 'ReactNativeNotas/src/components';
import {
  addNote,
  updateNote,
  removeNote,
} from 'ReactNativeNotas/src/redux/reducers/noteReducer';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
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
    borderWidth: 3,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 50,
  },
});
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
class NoteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.route.params.note,
      title: props.route.params.title,
      modalVisible: false,
    };
  }
  init() {
    this.props.navigation.setOptions({headerTitle: this.state.title});
  }
  componentDidMount() {
    this.init();
  }

  toggleCategoryPicker = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };

  handleChangeColor = category => {
    this.setState({modalVisible: false});
    this.updateNoteState({categoryId: category.id});
  };

  updateNoteState = property => {
    const newNote = {...this.state.note, ...property};
    this.setState({note: newNote});
  };

  saveNote = () => {
    const {note} = this.state;
    if (note.id) {
      this.props.updateNote(note);
    } else {
      const resp = this.props.addNote(note);
    }
    this.props.navigation.goBack();
  };

  removeNote = () => {
    this.props.removeNote(this.state.note.id);
    this.props.navigation.goBack();
  };
  getCategory = categoryId =>
    this.props.categories.find(c => c.id === categoryId);

  render() {
    const {note, modalVisible} = this.state;
    const {id, title, description, created, categoryId} = note || {};
    const category = this.getCategory(categoryId);
    return (
      <View style={[basicStyles.container, styles.container]}>
        <View style={styles.timestamp}>
          {created && (
            <Text>
              {new Date(created).toLocaleTimeString()} -{" "} {new Date(created).toLocaleDateString()}
            </Text>
          )}
        </View>
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
          value={description}
          multiline={true}
          numberOfLines={4}
          onChangeText={description => this.updateNoteState({description})}
        />
        <TouchableOpacity
          style={styles.categoryRow}
          onPress={this.toggleCategoryPicker}>
          {category && (
            <React.Fragment>
              <ColorView color={category.color} />
              <Text>{category.category}</Text>
            </React.Fragment>
          )}
          {!category && <Text>Elige categoría</Text>}
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <View style={{marginRight: 30}}>
            <Button primary title="Guardar" onPress={this.saveNote} />
          </View>

          {id && <Button danger title="Eliminar" onPress={this.removeNote} />}
        </View>

        <CategoryPicker
          visible={modalVisible}
          onChange={this.handleChangeColor}
          onRequestClose={this.toggleCategoryPicker}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNote,
      updateNote,
      removeNote,
    },
    dispatch,
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteScreen);
