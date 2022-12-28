import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, Input, Text, Title} from '@atoms';
import {FacebookIcon, GoogleIcon, HoverInIcon} from '../../../../assets/icons';
import {useTheme} from '@react-navigation/native';
import {Touchable} from '@atoms';
import Icon from 'react-native-vector-icons/Ionicons';
import {AUTH_SCREENS, SCREENS} from '@utils';
import AuthBottomContainer from 'src/components/atoms/AuthBottomContainer/Base/AuthBottomContainer';
import {color} from 'react-native-reanimated';
import {BackButton} from 'src/components/atoms/BackButton';
const SignIn = ({navigation}: any) => {
  console.log('navigation', navigation);
  const [google, setGoogle] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [phone, setPhone] = useState(false);
  const [pass, setPass] = useState(false);
  const {colors} = useTheme();
  const [inputs, setInputs] = useState({
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const inputHandler = (key: string, value: string) => {
    setInputs({...inputs, [key]: value});
  };
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{marginHorizontal: 20}}>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <HoverInIcon height={40} />
        </View>
        <Title title="Sign In" style={{marginVertical: 10, paddingTop: 30}} />
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
        </View>
        <View
          style={{
            borderBottomColor: colors.neutral_500,
            borderBottomWidth: 1,
          }}
        />
        <View style={{marginTop: 20}}>
          <View style={{marginTop: 10}}>
            <Input
              error=""
              textValue={inputs.phone}
              placeholder="Enter your phone number"
              setValue={(e: any) => inputHandler('phone', e)}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Input
              error=""
              textValue={inputs.password}
              placeholder="Password"
              setValue={(e: any) => inputHandler('password', e)}
              rightIcon={
                <Icon
                  name={pass ? 'eye-off' : 'eye-outline'}
                  onPress={() => setPass(!pass)}
                  size={20}
                />
              }
              secureTextEntry={pass}
            />
          </View>
        </View>
        <View style={{alignItems: 'flex-end', marginVertical: 15}}>
          <Touchable>
            <Text
              textType="Paragraph_05"
              style={{color: colors.gradientOne?.end}}>
              Forget password ?{' '}
            </Text>
          </Touchable>
        </View>
        <View>
          <Button
            type="PRIMARY"
            loading={phone}
            title="Login"
            style={{marginVertical: 10}}
            onPress={() => navigation.navigate(SCREENS.HOME)}
          />
        </View>
      </View>
      <AuthBottomContainer>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <Text textType="Paragraph_04" style={{color: colors.primaryButton}}>
            New to Hoverin Aerospace ?{' '}
          </Text>
          <Touchable
            onPress={() =>
              navigation.navigate(AUTH_SCREENS.REGISTER_ONE_SCREEN)
            }>
            <Text
              textType="Paragraph_04"
              style={{color: colors.gradientOne?.end, paddingHorizontal: 3}}>
              Create an account
            </Text>
          </Touchable>
        </View>
      </AuthBottomContainer>
    </View>
  );
};

export default SignIn;
