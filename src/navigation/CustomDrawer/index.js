import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ddd',
    padding: 10,
  },
  headerFooterText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  items: {
    flex: 1,
  },
  footer: {
    backgroundColor: '#ddd',
    padding: 10,
  },
});

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerFooterText}>Header</Text>
      </View>
      <View style={styles.items}>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.headerFooterText}>Footer</Text>        
      </View>
    </DrawerContentScrollView>
  );
}
export default CustomDrawer;
