import {Colors} from '@themes';
import {StyleSheet} from 'react-native';

const styles = ({colors}: {colors: Colors}) =>
  StyleSheet.create({
    titleText: {
      width: '100%',
      paddingVertical: 15,
      color: colors?.primaryButton,
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
    },
  });

export default styles;
