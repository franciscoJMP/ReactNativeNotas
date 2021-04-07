import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import DrawerHeaderButton from './DrawerHeaderButton';
import {
  NotesScreen,
  NoteScreen,
  SettingsScreen,
  CategoriesScreen,
} from 'ReactNativeNotas/src/screens';

const Stack = createStackNavigator();
const headerConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#0066ff',
    },

    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};
function Notas({navigation}) {
  return (
    <Stack.Navigator screenOptions={headerConfig.defaultNavigationOptions}>
      <Stack.Screen
        name="notesscreen"
        component={NotesScreen}
        options={{
          headerTitle: 'Notas',
          headerLeft: () => <DrawerHeaderButton navigation={navigation} />,
        }}></Stack.Screen>
      <Stack.Screen
        name="notescreen"
        component={NoteScreen}
        options={{headerTitle: 'Nota'}}></Stack.Screen>
    </Stack.Navigator>
  );
}
function Ajustes({navigation}) {
  return (
    <Stack.Navigator screenOptions={headerConfig.defaultNavigationOptions}>
      <Stack.Screen
        name="settingsscreen"
        component={SettingsScreen}
        options={{
          headerTitle: 'Ajustes',
          headerLeft: () => <DrawerHeaderButton navigation={navigation} />,
        }}></Stack.Screen>
    </Stack.Navigator>
  );
}
function Categorias({navigation}) {
  return (
    <Stack.Navigator screenOptions={headerConfig.defaultNavigationOptions}>
      <Stack.Screen
        name="categoriesscreen"
        component={CategoriesScreen}
        options={{
          headerTitle: 'Categorias',
          headerLeft: () => <DrawerHeaderButton navigation={navigation} />,
        }}></Stack.Screen>
    </Stack.Navigator>
  );
}
export {Notas, Ajustes, Categorias};
