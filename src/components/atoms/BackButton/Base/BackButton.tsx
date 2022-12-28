import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const BackButton = ({navigation}: any) => {
  console.log('navigfation===>', navigation);
  return (
    <View style={{padding: 20}}>
      <Icon name={'arrowleft'} onPress={() => navigation.goBack()} size={20} />
    </View>
  );
};

export default BackButton;
