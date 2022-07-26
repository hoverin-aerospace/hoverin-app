import {Text, View} from 'react-native';
import React from 'react';
import {AuthenticationStack} from './stackNavigators';
import {ThemeOne} from '@themes';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthenticationStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
