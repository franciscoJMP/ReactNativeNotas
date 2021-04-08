import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import basicStyles from 'ReactNativeNotas/src/styles/basicStyles';
import {HR, ColorPicker, ColorView} from 'ReactNativeNotas/src/components';
import CategoryItem from './CategoryItem';
import withColors from 'ReactNativeNotas/src/styles/withColors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  row: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  addInput: {
    flex: 1,
  },
});
const categories = [
  {
    id: 1,
    category: 'Personal',
    color: '#FFB3BA',
  },
  {id: 2, category: 'Trabajo', color: '#FFDEB9'},
  {id: 3, category: 'Casa', color: '#FFFFB9'},
];
class CategoriesScreen extends Component {
  constructor(props) {
    super(props);

    this.defaultNewCat = {
      category: null,
      color: props.colors.categoryColors[0],
    };

    this.state = {
      modalVisible: false,
      itemSelected: null,
      newCategory: this.defaultNewCat,
    };
  }

  openChangeColor = item => {
    this.setState({
      modalVisible: true,
      itemSelected: item,
    });
  };

  handleChangeColor = color => {
    this.setState({modalVisible: false, itemSelected: null});
  };
  updateNewCategory = category => {
    this.setState({newCategory: {...this.state.newCategory, category}});
  };
  updateCategoryName = (category, name) => {
    this.props.updateCategory({
      ...category,
      category: name,
    });
  };

  removeCategory = category => {
    Alert.alert(
      'Borrar categoría',
      `Quieres borrar '${category.category}' de la lista y de todas las notas?`,
      [
        {text: 'Cancelar', style: 'cancel'},
        {
          text: 'Borrar',
          style: 'destructive',
          onPress: () => this.props.removeCategory(category.id),
        },
      ],
    );
  };

  render() {
    const {modalVisible, itemSelected, newCategory} = this.state;
    return (
      <View style={[basicStyles.container, styles.container]}>
        <View style={styles.row}>
          <TextInput
            style={styles.addInput}
            placeholder="Nueva categoría"
            value={newCategory.category}
            onChangeText={this.updateNewCategory}
          />
          <TouchableOpacity onPress={() => this.openChangeColor(null)}>
            <ColorView color={newCategory.color} />
          </TouchableOpacity>
          <Button title="+" />
        </View>
        <HR />
        <FlatList
          style={styles.list}
          data={categories}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <CategoryItem item={item} openChangeColor={this.openChangeColor} />
          )}
          ItemSeparatorComponent={() => <HR color="#aaa" size="100%" />}
        />

        <ColorPicker
          visible={modalVisible}
          onChange={this.handleChangeColor}
          selectedColor={itemSelected ? itemSelected.color : newCategory.color}
        />
      </View>
    );
  }
}
export default withColors(CategoriesScreen);
