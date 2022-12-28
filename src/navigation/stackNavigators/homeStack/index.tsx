import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@screens';
import BottomNav from 'src/navigation/bottomNavigators';
import {SCREENS} from '@utils';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const HomeStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={SCREENS.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
