import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DrawerHeaderButton from './DrawerHeaderButton';
import {
  NotesScreen,
  NoteScreen,
  CategoriesScreen,
  Screen1,
  Screen2,
  Screen3,
} from 'ReactNativeNotas/src/screens';
import {colors} from 'ReactNativeNotas/src/styles/withColors';
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const headerConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },

    headerTintColor: colors.background,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};
const tabHeaderConfig = {
  defaultTabHeaderOptions: {
    labelStyle: {color: colors.background},

    style: {backgroundColor: colors.primary},
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
function PantallasAjustes({navigation}) {
  return (
    <Tab.Navigator tabBarOptions={tabHeaderConfig.defaultTabHeaderOptions}>
      <Tab.Screen
        name="screen1"
        component={Screen1}
        options={{
          headerTitle: 'Ajustes',
          headerLeft: () => <DrawerHeaderButton navigation={navigation} />,
        }}></Tab.Screen>
      <Tab.Screen
        name="screen2"
        component={Screen2}
        options={{
          headerTitle: 'Ajustes',
          headerLeft: () => <DrawerHeaderButton navigation={navigation} />,
        }}></Tab.Screen>
      <Tab.Screen
        name="screen3"
        component={Screen3}
        options={{
          headerTitle: 'Ajustes',
          headerLeft: () => <DrawerHeaderButton navigation={navigation} />,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

function Ajustes({navigation}) {
  return (
    <Stack.Navigator screenOptions={headerConfig.defaultNavigationOptions}>
      <Stack.Screen
        name="settingsscreen"
        component={PantallasAjustes}
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
