import {View} from 'react-native';
import React, {FC} from 'react';
import {TitleProps} from './Title.types';
import styles from './Title.styles';
import {useTheme} from '@react-navigation/native';
import {Text} from '@atoms';
const Title: FC<TitleProps> = ({title, style, textStyle}) => {
  const {colors} = useTheme();
  return (
    <View style={style}>
      <Text
        textType="Paragraph_06"
        style={[styles({colors}).titleText, textStyle]}>
        {title}
      </Text>
    </View>
  );
};

export default Title;
