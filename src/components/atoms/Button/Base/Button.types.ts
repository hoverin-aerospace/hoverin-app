import {ButtonProps, TextProps, TouchableOpacityProps} from 'react-native';
import {Colors} from '../../../../themes/type';

export interface MyButtonProps extends ButtonProps {
  /**
   *@property title - Button title to show
   *@property type - Type of Button - primary || Secondary
   *@property loading - Show loading indicator
   *@property style - style property of button container
   *@property textStyle - style property of text inside button
   */
  title: string;
  type?: 'PRIMARY' | 'PRIMARY_GRADIANT' | 'SECONDARY' | 'TERTIARY';
  loading?: boolean;
  style?: TouchableOpacityProps['style'];
  titleStyle?: TextProps['style'];
  buttonBgColor?: string;

  LeftIcon?: React.ReactNode;
}

export interface StylesDef {
  colors?: Colors;
  buttonBgColor?: MyButtonProps['buttonBgColor'];
}
