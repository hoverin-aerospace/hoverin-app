import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {FlexBox, Text} from '@atoms';
import CheckBox from '@react-native-community/checkbox';
import {useTheme} from '@react-navigation/native';

export interface CheckBoxTextProps {
  check: boolean;
  setCheck: any;
  title: string;
  subText?: string;
  containerStyle?: {};
}

const CheckboxText: FC<CheckBoxTextProps> = props => {
  const {colors} = useTheme();
  const {check, setCheck, title, subText, containerStyle} = props;
  return (
    <FlexBox style={[containerStyle, {justifyContent: 'space-between'}]}>
      <FlexBox>
        <CheckBox
          disabled={false}
          value={check}
          onValueChange={(newValue: boolean) => setCheck(newValue)}
        />
        <Text
          style={{
            paddingLeft: 10,
            color: check ? colors.neutral_500 : colors.neutral_700,
          }}
          textType="Paragraph_03">
          {title}
        </Text>
      </FlexBox>
      <View>
        <Text style={{color: 'orange'}} textType="Paragraph_05">
          {subText}
        </Text>
      </View>
    </FlexBox>
  );
};

export default CheckboxText;

const styles = StyleSheet.create({});
