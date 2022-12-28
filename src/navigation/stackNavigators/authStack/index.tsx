import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OtpScreen, SignIn, SignupOne, SignupTwo} from '@screens';
import {AUTH_SCREENS} from '@utils';
import BottomNav from 'src/navigation/bottomNavigators';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const AuthenticationStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={AUTH_SCREENS.LOGIN_SCREEN}
      screenOptions={screenOptions}>
      <Stack.Screen
        name={AUTH_SCREENS.REGISTER_ONE_SCREEN}
        component={SignupOne}
      />
      <Stack.Screen
        name={AUTH_SCREENS.REGISTER_TWO_SCREEN}
        component={SignupTwo}
      />
      <Stack.Screen name={AUTH_SCREENS.LOGIN_SCREEN} component={SignIn} />
      <Stack.Screen
        name={AUTH_SCREENS.ENTER_OTP_SCREEN}
        component={OtpScreen}
      />
      <Stack.Screen name={AUTH_SCREENS.HOME} component={BottomNav} />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
