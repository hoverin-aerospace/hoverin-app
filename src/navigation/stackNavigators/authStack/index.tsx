import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OtpScreen, SignIn, SignupOne, SignupTwo} from '@screens';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const AuthenticationStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="IntroScreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="RegisterOneScreen" component={SignupOne} />
      <Stack.Screen name="RegisterTwoScreen" component={SignupTwo} />
      <Stack.Screen name="LoginScreen" component={SignIn} />
      <Stack.Screen name="EnterOTPScreen" component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
