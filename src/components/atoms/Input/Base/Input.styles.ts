import {Colors} from '@themes';
import {StyleSheet} from 'react-native';

const styles = ({colors}: {colors?: Colors}) =>
  StyleSheet.create({
    title: {
      color: colors?.primaryButton,
      paddingBottom: 10,
    },
    input: {flex: 1},
    error: {
      color: colors?.error,
      fontSize: 13,
      paddingVertical: 2,
      paddingLeft: 5,
    },
    inputBox: {
      paddingHorizontal: 20,
      paddingVertical: 2,
      backgroundColor: colors?.neutral,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      borderRadius: 100,
    },
  });

export default styles;
