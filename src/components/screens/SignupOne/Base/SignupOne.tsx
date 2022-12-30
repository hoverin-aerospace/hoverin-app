import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, Text, Title} from '@atoms';
import {FacebookIcon, GoogleIcon, HoverInIcon} from '../../../../assets/icons';
import {useTheme} from '@react-navigation/native';
import {Touchable} from '@atoms';
import {AUTH_SCREENS} from '@utils';
import AuthBottomContainer from 'src/components/atoms/AuthBottomContainer/Base/AuthBottomContainer';
import {BackButton} from 'src/components/atoms/BackButton';
const SignupOne = ({navigation}: any) => {
  const [google, setGoogle] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [phone, setPhone] = useState(false);
  const [value, setValue] = useState('');
  const {colors} = useTheme();
  return (
    <View style={{flex: 1}}>
      <BackButton navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{marginHorizontal: 20}}>
          <View style={{alignItems: 'center'}}>
            <HoverInIcon height={40} />
          </View>
          <Title
            title="Create an account"
            style={{marginVertical: 10, paddingTop: 30}}
          />
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
              onPress={() =>
                navigation.navigate(AUTH_SCREENS.REGISTER_TWO_SCREEN)
              }
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
        </View>
        <AuthBottomContainer>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            <Text textType="Paragraph_04" style={{color: colors.primaryButton}}>
              Already have an account ?{' '}
            </Text>
            <Touchable
              onPress={() => navigation.navigate(AUTH_SCREENS.LOGIN_SCREEN)}>
              <Text
                textType="Paragraph_04"
                style={{color: colors.gradientOne?.end, paddingHorizontal: 3}}>
                Sign in
              </Text>
            </Touchable>
          </View>
        </AuthBottomContainer>
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
    </View>
  );
};

export default SignupOne;
