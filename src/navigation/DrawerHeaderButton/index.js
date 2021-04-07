import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerHeaderButton = props => {
  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };
  return (
    <TouchableOpacity onPress={toggleDrawer}>
      <Icon style={{color: '#fff', marginLeft: 15}} name="menu" size={25} />
    </TouchableOpacity>
  );
};

export default DrawerHeaderButton;
