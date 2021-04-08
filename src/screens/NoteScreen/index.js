import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import basicStyles from 'ReactNativeNotas/src/styles/basicStyles';
import {
  HR,
  CategoryPicker,
  ColorView,
  Button,
} from 'ReactNativeNotas/src/components';

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
    this.updateNoteState({category});
  };

  updateNoteState = property => {
    const newNote = {...this.state.note, ...property};
    this.setState({note: newNote});
  };
  render() {
    const {note, modalVisible} = this.state;
    const {title, text, created, category} = note || {};

    return (
      <View style={[basicStyles.container, styles.container]}>
        <View style={styles.timestamp}>
          {created && (
            <Text>
              {created.toLocaleTimeString()} - {created.toLocaleDateString()}
            </Text>
          )}
        </View>
        <Text style={basicStyles.title}>{title || 'Nueva Nota'}</Text>
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
              <ColorView color={category.color} />
              <Text>{category.category}</Text>
            </React.Fragment>
          )}
          {!category && <Text>Elige categoría</Text>}
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <View style={{marginRight:30}}>
            <Button primary title="Guardar" />
          </View>

          <Button danger title="Eliminar" />
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

export default NoteScreen;
