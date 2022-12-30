import {View} from 'react-native';
import React, {FC} from 'react';
import {Text} from '../../Text';
import {useTheme} from '@react-navigation/native';
import {Touchable} from '../../Touch';
interface ChipProps {
  color?: string;
  text: string;
  textColor?: string;
  onPress: any;
}
const Chip: FC<ChipProps> = ({color, text, textColor, onPress}) => {
  const {colors} = useTheme();
  return (
    <Touchable onPress={onPress}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 3,
          backgroundColor: color,
          alignSelf: 'flex-start',
          borderRadius: 5,
          marginRight: 15,
        }}>
        <Text
          style={{color: textColor ? textColor : colors.black}}
          textType="Paragraph_04">
          {text}
        </Text>
      </View>
    </Touchable>
  );
};

export default Chip;
