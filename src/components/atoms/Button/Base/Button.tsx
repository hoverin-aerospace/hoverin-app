import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  Platform,
  TouchableNativeFeedbackBase,
  TouchableNativeFeedback,
} from 'react-native';
import React, {FC, useEffect} from 'react';
import {Text, Touchable} from '@atoms';
import {useTheme} from '@react-navigation/native';
import styles from './Button.styles';

const CustomButton: FC<any> = ({
  title,
  type,
  disabled,
  loading,
  style,
  titleStyle,
  onPress,
  children,
  LeftIcon,
  buttonBgColor,
}) => {
  const {colors} = useTheme();
  const getTheme = () => {
    switch (type) {
      case 'PRIMARY':
        return {
          container: styles({colors}).PRIMARY_container,
          text: styles({colors}).PRIMARY_text,
        };
      case 'SECONDARY':
        return {
          container: styles({colors}).SECONDARY_container,
          text: styles({colors}).SECONDARY_text,
        };
      default:
        return {
          container: styles({colors}).PRIMARY_container,
          text: styles({colors}).PRIMARY_text,
        };
    }
  };
  console.log(type);
  return (
    <>
      {loading ? (
        <View style={[getTheme().container, style]}>
          <ActivityIndicator />
        </View>
      ) : (
        <Touchable onPress={onPress}>
          <View style={[getTheme().container, style]}>
            {LeftIcon && <View style={styles({}).leftIcon}>{LeftIcon}</View>}
            {title && (
              <Text
                textType="Paragraph_06"
                style={[getTheme().text, titleStyle]}>
                {title}
              </Text>
            )}
            {children}
          </View>
        </Touchable>
      )}
    </>
  );
};

export default CustomButton;
