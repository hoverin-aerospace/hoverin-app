import {Text, TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import Error from 'react-native-vector-icons/MaterialIcons';

const FlexBox: FC<any> = props => {
  const {style, children} = props;

  return (
    <View style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
      {children}
    </View>
  );
};

export default FlexBox;
