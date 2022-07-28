import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Touchable = ({onPress, children}: any) => {
  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
  );
};
export default Touchable;
