import {StyleSheet, View, Image} from 'react-native';
import React, {FC} from 'react';
import {FlexBox, Text} from '@atoms';
import {useTheme} from '@react-navigation/native';
import {ImagesAssets} from 'src/assets';
import {CloudRain, Sun, Wind} from 'src/assets/icons';
import {CropCardProps} from './CropCards.types';

const CropCard: FC<CropCardProps> = props => {
  const {colors} = useTheme();
  const {fieldName, location, temperature, wind, humidity, upcomingActivity} =
    props.field;
  return (
    <View
      style={{
        borderRadius: 10,
        marginRight: 25,
        overflow: 'hidden',
        flex: 1,
        width: 300,
        borderWidth: 1,
        borderColor: '#dbdbdb',
      }}>
      <Image source={ImagesAssets.wheat} style={{width: 300, height: 120}} />
      <View style={{margin: 15}}>
        <View>
          <Text textType="Heading_03" style={{fontWeight: '600'}}>
            {fieldName}
          </Text>
          <Text textType="Paragraph_03" style={{color: colors.neutral_700}}>
            {location}
          </Text>
        </View>
        <FlexBox style={{marginVertical: 20}}>
          <Sun />
          <View style={{marginLeft: 20}}>
            <Text textType="Heading_03" style={{fontWeight: '700'}}>
              {temperature}°C
            </Text>
            <FlexBox
              style={{
                justifyContent: 'space-between',
                flex: 1,
                width: '60%',
              }}>
              <FlexBox style={{alignItems: 'flex-end'}}>
                <Wind />
                <Text
                  textType="Paragraph_04"
                  style={{
                    textAlignVertical: 'top',
                    color: colors.neutral_700,
                    paddingLeft: 5,
                  }}>
                  {wind}ms
                </Text>
              </FlexBox>
              <FlexBox style={{alignItems: 'flex-end'}}>
                <CloudRain />
                <Text
                  textType="Paragraph_04"
                  style={{color: colors.neutral_700, paddingLeft: 5}}>
                  {humidity}mm
                </Text>
              </FlexBox>
            </FlexBox>
          </View>
        </FlexBox>
        {upcomingActivity && (
          <FlexBox>
            <Text textType="Paragraph_03" style={{marginRight: 15}}>
              Planned Activity
            </Text>
            <Text textType="Paragraph_03" style={{fontWeight: '700'}}>
              {upcomingActivity}
            </Text>
          </FlexBox>
        )}
      </View>
    </View>
  );
};

export default CropCard;

const styles = StyleSheet.create({});
