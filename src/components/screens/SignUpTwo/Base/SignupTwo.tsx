import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, Title} from '@atoms';
import {FacebookIcon, GoogleIcon} from '../../../../assets/icons';

const SignupTwo = () => {
  const [google, setGoogle] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <Title title="Sign In" style={{marginVertical: 40}} />
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
        loading={login}
        title="Continue with Phone"
        style={{marginBottom: 10}}
        onPress={() => setLogin(true)}
      />
    </View>
  );
};

export default SignupTwo;
