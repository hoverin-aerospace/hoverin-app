import React, {FunctionComponent, useMemo} from 'react';
import {Text as T} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {TextProps, StylesDef, FontFamily} from './Text.types';
import Styles from './Text.styles';

const Text: FunctionComponent<TextProps> = props => {
  const {colors} = useTheme();

  const {
    textType,
    highlighted = false,
    style,
    children,
    invertColor = false,
  } = props;

  const myStyle = useMemo((): StylesDef => {
    let color;

    if (invertColor) color = colors.shades_white;
    else if (highlighted) color = colors.secondary_500;
    else color = colors.neutral_700;

    switch (textType) {
      case 'Heading_01':
        return {
          color,
          fontSize: 32,
          fontFamily: FontFamily.Inter_Bold,
          lineHeight: 40,
          textTransform: 'none',
        };
      case 'Heading_02':
        return {
          color,
          fontSize: 28,
          fontFamily: FontFamily.Inter_Bold,
          lineHeight: undefined,
          textTransform: 'none',
        };
      case 'Heading_03':
        return {
          color,
          fontSize: 24,
          fontFamily: FontFamily.Inter_Bold,
          lineHeight: undefined,
          textTransform: 'none',
        };
      case 'Heading_04':
        return {
          color,
          fontSize: 20,
          fontFamily: FontFamily.Inter_Bold,
          lineHeight: undefined,
          textTransform: 'none',
        };
      case 'Heading_05':
        return {
          color,
          fontSize: 20,
          fontFamily: FontFamily.Inter_Medium,
          lineHeight: undefined,
          textTransform: 'none',
        };
      case 'Heading_06':
        return {
          color,
          fontSize: 16,
          fontFamily: FontFamily.Inter_Bold,
          lineHeight: undefined,
          textTransform: 'uppercase',
        };
      case 'Heading_07':
        return {
          color,
          fontSize: 16,
          fontFamily: FontFamily.Inter_Bold,
          lineHeight: 20,
          textTransform: 'none',
        };
      case 'Paragraph_01':
        return {
          color,
          fontSize: 16,
          fontFamily: FontFamily.Inter_Medium,
          lineHeight: 20,
          textTransform: 'none',
        };
      case 'Paragraph_02':
        return {
          color,
          fontSize: 16,
          fontFamily: FontFamily.Inter_Regular,
          lineHeight: 20,
          textTransform: 'none',
        };
      case 'Paragraph_03':
        return {
          color,
          fontSize: 14,
          fontFamily: FontFamily.Inter_Regular,
          lineHeight: 18.2,
          textTransform: 'none',
        };
      case 'Paragraph_04':
        return {
          color,
          fontSize: 14,
          fontFamily: FontFamily.Inter_Bold,
          lineHeight: undefined,
          textTransform: 'none',
        };
      case 'Paragraph_05':
        return {
          color,
          fontSize: 12,
          fontFamily: FontFamily.Inter_Regular,
          lineHeight: 15.6,
          textTransform: 'none',
        };
      case 'Paragraph_06':
        return {
          color,
          fontSize: 10,
          fontFamily: FontFamily.Inter_Regular,
          lineHeight: 15.6,
          textTransform: 'none',
        };
      case 'Paragraph_07':
        return {
          color,
          fontSize: 10,
          fontFamily: FontFamily.Inter_Bold,
          lineHeight: 15.6,
          textTransform: 'none',
        };

      default:
        return {
          color,
          fontSize: 32,
          fontFamily: FontFamily.Inter_Bold,
          lineHeight: undefined,
          textTransform: 'none',
        };
    }
  }, [highlighted, colors, invertColor, textType]);

  return (
    <T
      {...props}
      style={[Styles({...myStyle}).text, style]}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}>
      {children}
    </T>
  );
};

export default Text;
