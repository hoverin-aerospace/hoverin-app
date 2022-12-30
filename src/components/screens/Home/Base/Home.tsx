import {ScrollView, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Chip, FlexBox, Text} from '@atoms';
import {CheckboxText} from '@organisms';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useTheme} from '@react-navigation/native';
import {CropsFieldNames} from './data';

const Home = () => {
  const {colors} = useTheme();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <View style={{flex: 1, padding: 10}}>
      <Text textType="Heading_01">Good Morning</Text>
      <View style={{marginTop: 20}}>
        <Text textType="Heading_07">Planned Activities</Text>
        <View style={{marginVertical: 10}}>
          <CheckboxText
            check={toggleCheckBox}
            setCheck={setToggleCheckBox}
            title={' Spraying Wheat Field'}
            subText={'After 2 days'}
          />
          <CheckboxText
            check={toggleCheckBox}
            setCheck={setToggleCheckBox}
            title={' Spraying Wheat Field'}
            subText={'After 2 days'}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text textType="Heading_07">My Fields</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlexBox style={{marginVertical: 15}}>
              {CropsFieldNames.map((name: string, index: number) => (
                <Chip
                  onPress={() => {
                    setActive(index);
                  }}
                  key={name}
                  text={name}
                  color={active === index ? colors.success : colors.neutral_200}
                  textColor={
                    active === index ? colors.shades_white : colors.modal_bg
                  }
                />
              ))}
            </FlexBox>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;
