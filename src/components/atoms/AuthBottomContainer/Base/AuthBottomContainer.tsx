import {View} from 'react-native';
import React, {FC} from 'react';
import {AuthBottomContainerProps} from './AuthBottomContainer.types';
import styles from './AuthBottomContainer.styles';
import {Text} from '../../Text';
import {useTheme} from '@react-navigation/native';

const AuthBottomContainer: FC<AuthBottomContainerProps> = ({
  text,
  children,
}) => {
  const {colors} = useTheme();
  return (
    <View style={styles({colors}).container}>
      {text && (
        <Text textType="Paragraph_03" style={styles({colors}).text}>
          {text}
        </Text>
      )}
      {children}
    </View>
  );
};

export default AuthBottomContainer;
