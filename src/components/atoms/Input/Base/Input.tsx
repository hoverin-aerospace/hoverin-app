import {Text, TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';
import styles from './Input.styles';
import {useTheme} from '@react-navigation/native';
import Error from 'react-native-vector-icons/MaterialIcons';
import {MyTextInputProps} from './Input.type';

const Input: FC<MyTextInputProps> = props => {
  const {colors} = useTheme();
  const {
    title,
    textValue,
    setValue,
    error,
    rightIcon,
    titleStyle,
    placeholder,
  } = props;
  const [focus, setFocus] = useState(false);

  return (
    <View>
      {title && (
        <Text style={[styles({colors}).title, titleStyle]}>{title}</Text>
      )}
      <View
        style={[
          styles({colors}).inputBox,
          {borderWidth: focus ? 1 : 0, borderColor: colors.neutral_600},
        ]}>
        <TextInput
          value={textValue}
          onChangeText={setValue}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={[styles({colors}).input]}
          placeholder={placeholder}
          placeholderTextColor={colors.neutral_700}
          {...props}
        />
        {rightIcon}
      </View>
      {error && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Error name="error-outline" size={16} color={colors.error} />
          <Text style={[styles({colors}).error]}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
