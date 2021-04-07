import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Notas, Ajustes, Categorias} from './StackNavigator';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          width: '50%',
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Notas" component={Notas}></Drawer.Screen>
        <Drawer.Screen name="Ajustes" component={Ajustes}></Drawer.Screen>
        <Drawer.Screen name="Categorias" component={Categorias}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
