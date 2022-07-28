import {TextProps, ViewProps} from 'react-native';

export interface TitleProps {
  title?: string;
  style?: ViewProps['style'];
  textStyle?: TextProps['style'];
}
