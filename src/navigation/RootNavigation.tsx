import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {AuthenticationStack} from './stackNavigators';
import {ThemeOne} from '@themes';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigation: FC = () => {
  return (
    // @ts-ignore:  //Added for ignoring next line code
    <NavigationContainer theme={ThemeOne}>
      <AuthenticationStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
