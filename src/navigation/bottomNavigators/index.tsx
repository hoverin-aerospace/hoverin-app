import React, {FC} from 'react';
import {Home} from '@screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from '@utils';
import {HomeStack} from '../stackNavigators';
import {TouchableOpacity, View, TouchableNativeFeedback} from 'react-native';
import {Text} from '@atoms';
import {FacebookIcon} from 'src/assets/icons';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

const BottomNav: FC = props => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={24} />
          ),
          tabBarBadge: 3,
        }}
        name={SCREENS.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: SCREENS.CROP,
          tabBarIcon: ({color, size}) => (
            <Icon name="sun" color={color} size={24} />
          ),
        }}
        name={SCREENS.PROFILE}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calendar-range"
              color={color}
              size={24}
            />
          ),
        }}
        name={SCREENS.Stats}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: SCREENS.PROFILE,
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={24} />
          ),
        }}
        name={SCREENS.CROP}
        component={Home}
      />
    </Tab.Navigator>
  );
};
function MyTabBar({state, descriptors, navigation}: any) {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: colors.bottomTabBackground,
      }}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const Ico = options.tabBarIcon;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, padding: 10}}>
            <View style={{alignItems: 'center'}}>
              {options?.tabBarIcon && (
                <View
                  style={{
                    alignItems: 'center',
                    backgroundColor: isFocused ? colors.green : 'transparent',
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderRadius: 50,
                  }}>
                  <Ico color={isFocused ? colors.success_500 : '#222'} />
                </View>
              )}
              <Text
                textType="Paragraph_05"
                style={{
                  color: isFocused ? colors.success_500 : '#222',
                  fontWeight: isFocused ? '500' : 'normal',
                  paddingTop: 2,
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomNav;
