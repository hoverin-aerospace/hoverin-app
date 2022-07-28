import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, Input, Text, Title} from '@atoms';
import {FacebookIcon, GoogleIcon} from '../../../../assets/icons';
import {useTheme} from '@react-navigation/native';
import {Touchable} from '@atoms';
import Icon from 'react-native-vector-icons/Ionicons';

const SignupOne = () => {
  const [google, setGoogle] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [phone, setPhone] = useState(false);
  const [value, setValue] = useState('');
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <Title title="Create an account" style={{marginVertical: 40}} />
      <View>
        <Button
          LeftIcon={<GoogleIcon />}
          type="SECONDARY"
          loading={google}
          title="Continue with Google"
          style={{marginBottom: 10}}
          onPress={() => setGoogle(true)}
        />

        <Button
          LeftIcon={<FacebookIcon />}
          type="SECONDARY"
          loading={facebook}
          title="Continue with Facebook"
          style={{marginBottom: 20}}
          onPress={() => setFacebook(true)}
        />
        <Button
          type="PRIMARY"
          loading={phone}
          title="Continue with Phone"
          style={{marginBottom: 10}}
          onPress={() => setPhone(true)}
        />
      </View>
      <View style={{flexWrap: 'wrap', flexDirection: 'row', marginTop: 10}}>
        <Text textType="Paragraph_05" style={{color: colors.primaryButton}}>
          By creating an account, you agree to our and
        </Text>
        <Touchable onPress={() => console.log('terms pressed')}>
          <Text
            textType="Paragraph_05"
            style={{color: colors.gradientOne?.end, paddingHorizontal: 3}}>
            Terms & Conditions
          </Text>
        </Touchable>
        <Text textType="Paragraph_05" style={{color: colors.primaryButton}}>
          and
        </Text>
        <Touchable onPress={() => console.log('policy pressed')}>
          <Text
            textType="Paragraph_05"
            style={{color: colors.gradientOne?.end, paddingHorizontal: 3}}>
            Privacy Policy.
          </Text>
        </Touchable>
      </View>
      {/* <View style={{marginTop: 10}}>
        <Input
          error=""
          textValue={value}
          placeholder="Enter you phone number"
          setValue={setValue}
          title={'Enter Phone'}
          rightIcon={<Icon name="eye-outline" size={24} />}
          secureTextEntry={true}
        />
      </View> */}
    </View>
  );
};

export default SignupOne;
