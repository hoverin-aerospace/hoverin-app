import {TextProps as TP} from 'react-native';

export enum FontFamily {
  Black = 'Inter-Black',
  Bold = 'Inter-Bold',
  SemiBold = 'Inter-SemiBold',
  Medium = 'Inter-Medium',
  Regular = 'Inter-Regular',
}

export interface TextProps extends TP {
  textType:
    | 'Heading_01'
    | 'Heading_02'
    | 'Heading_03'
    | 'Heading_04'
    | 'Heading_05'
    | 'Heading_06'
    | 'Heading_07'
    | 'Paragraph_01'
    | 'Paragraph_02'
    | 'Paragraph_03'
    | 'Paragraph_04'
    | 'Paragraph_05'
    | 'Paragraph_06'
    | 'Paragraph_07';
  highlighted?: boolean;
  invertColor?: boolean;
}

export interface StylesDef {
  color?: string;
  fontSize?: number;
  fontFamily?: FontFamily;
  lineHeight?: number;
  textTransform?: 'uppercase' | 'capitalize' | 'none';
}
