import React from 'react';
import {Text, View, Modal, StyleSheet} from 'react-native';
import ColorPalette from 'react-native-color-palette';
import basicStyles from 'ReactNativeNotas/src/styles/basicStyles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  content: {
    height: 100,
    maxWidth: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
const ColorPicker = ({
  selectedColor,
  onChange,
  visible,
  onRequestClose,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <View style={[basicStyles.paper, styles.content]}>
          <ColorPalette
            title={"Elige un color"}
            onChange={onChange}
            defaultColor={selectedColor || ''}
            colors={['#FFB3BA', '#FFDEB9', '#FFFFB9', '#B9FFC9', '#BAE0FF']}
            paletteStyles={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ColorPicker;
