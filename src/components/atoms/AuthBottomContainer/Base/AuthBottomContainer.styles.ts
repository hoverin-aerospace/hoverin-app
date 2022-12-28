import {Colors} from '@themes';
import {StyleSheet} from 'react-native';

const styles = ({colors}: {colors?: Colors}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: 14,
      backgroundColor: colors?.neutral_100,
      alignItems: 'center',
    },
    text: {
      color: colors?.shades_black,
    },
  });

export default styles;
