import {StyleSheet} from 'react-native';

const styles = () =>
  StyleSheet.create({
    box: {
      alignItems: 'center',
      paddingVertical: 5,
      borderRadius: 50,
      position: 'relative',
      height: 32,
      width: 60,
    },
    iconBox: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
