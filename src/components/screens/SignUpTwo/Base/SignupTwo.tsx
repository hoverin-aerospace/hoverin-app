import {View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button, Input, Title} from '@atoms';
import {FacebookIcon, GoogleIcon, HoverInIcon} from '../../../../assets/icons';
import Icon from 'react-native-vector-icons/Ionicons';
import {AUTH_SCREENS} from 'src/utils/constant';
import {BackButton} from 'src/components/atoms/BackButton';

const SignupTwo = ({navigation}: any) => {
  const [phone, setPhone] = useState(false);
  const [pass, setPass] = useState(false);
  const [pass2, setPass2] = useState(false);
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
    <View style={{justifyContent: 'space-between', flex: 1}}>
      <BackButton navigation={navigation} />
      <ScrollView>
        <View style={{marginHorizontal: 15}}>
          <View style={{alignItems: 'center'}}>
            <HoverInIcon height={40} />
          </View>
          <Title
            title="Create an account"
            style={{marginVertical: 10, paddingTop: 30}}
          />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'height' : 'padding'}>
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
                textValue={inputs.email}
                placeholder="Enter your email"
                setValue={(e: any) => inputHandler('email', e)}
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
            <View style={{marginTop: 10}}>
              <Input
                error={
                  inputs.password && inputs.password !== inputs.confirmPassword
                    ? 'Password does not match.'
                    : ''
                }
                textValue={inputs.confirmPassword}
                placeholder="Confirm Password"
                setValue={(e: any) => inputHandler('confirmPassword', e)}
                rightIcon={
                  <Icon
                    name={pass2 ? 'eye-off' : 'eye-outline'}
                    onPress={() => setPass2(!pass2)}
                    size={20}
                  />
                }
                secureTextEntry={pass2}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <View style={{marginHorizontal: 15}}>
        <Button
          type="PRIMARY"
          loading={phone}
          title="Create an account"
          style={{marginBottom: 10}}
          onPress={() => navigation.navigate(AUTH_SCREENS.LOGIN_SCREEN)}
        />
      </View>
    </View>
  );
};

export default SignupTwo;
