import {TextInputProps} from 'react-native';

export interface MyTextInputProps extends TextInputProps {
  title?: string;
  textValue?: string;
  setValue?: any;
  error?: string;
  rightIcon?: React.ReactNode;
  titleStyle?: any;
  placeholder?: string;
}
