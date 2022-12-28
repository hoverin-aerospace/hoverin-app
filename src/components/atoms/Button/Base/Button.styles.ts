import {StyleSheet} from 'react-native';

import {StylesDef} from './Button.types';

const styles = ({colors}: StylesDef) =>
  StyleSheet.create({
    PRIMARY_container: {
      width: '100%',
      paddingVertical: 15,
      backgroundColor: colors?.primaryButton,
      borderRadius: 100,
    },
    PRIMARY_text: {
      color: colors?.shades_white,
      textAlign: 'center',
      fontSize: 14,
    },
    SECONDARY_container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 15,
      backgroundColor: colors?.shades_white,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: colors?.primaryBorderButton,
    },
    SECONDARY_text: {
      color: colors?.primaryButton,
      textAlign: 'center',
      fontSize: 14,
    },
    leftIcon: {
      paddingRight: 10,
    },
  });

export default styles;
