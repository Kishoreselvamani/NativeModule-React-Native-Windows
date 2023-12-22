import {View, Text, Alert} from 'react-native';
import React from 'react';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOption,
  MenuOptions,
} from 'react-native-popup-menu';

const Menupage = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MenuProvider>
        <Menu>
          <MenuTrigger text="Select action" />
          <MenuOptions>
            <MenuOption onSelect={() => Alert.alert('Option 1')}>
              <Text style={{fontSize: 50}}>Option 1</Text>
            </MenuOption>
            <MenuOption onSelect={() => Alert.alert('Option 2')}>
              <Text style={{fontSize: 50}}>Option 2</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </MenuProvider>
    </View>
  );
};

export default Menupage;
