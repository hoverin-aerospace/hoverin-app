import {StyleSheet} from 'react-native';

import {StylesDef} from './Text.types';

const Styles = ({
  color,
  fontSize,
  fontFamily,
  lineHeight,
  textTransform,
}: StylesDef) =>
  StyleSheet.create({
    text: {
      color,
      fontSize,
      fontFamily: fontFamily || 'Inter-Bold',
      lineHeight: lineHeight || 26,
      textTransform: textTransform || 'none',
    },
  });

export default Styles;
