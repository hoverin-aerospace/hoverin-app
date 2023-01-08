import React, {FC, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Calendar, Crops, Home, Profile} from '@screens';
import {SCREENS, TAB_SCREENS} from '@utils';
import {Text} from '@atoms';
import styles from './styles';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

const BottomNav: FC = () => {
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
        name={TAB_SCREENS.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: SCREENS.CROP,
          tabBarIcon: ({color, size}) => (
            <Icon name="sun" color={color} size={24} />
          ),
        }}
        name={TAB_SCREENS.PROFILE}
        component={Crops}
      />
      <Tab.Screen
        options={{
          tabBarLabel: SCREENS.CALENDAR,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calendar-range"
              color={color}
              size={24}
            />
          ),
        }}
        name={TAB_SCREENS.CALENDAR}
        component={Calendar}
      />
      <Tab.Screen
        options={{
          tabBarLabel: SCREENS.PROFILE,
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={24} />
          ),
        }}
        name={TAB_SCREENS.CROP}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

// Custom Bottom Nav Container
function MyTabBar({state, descriptors, navigation}: any) {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
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
          scaling.value = withTiming(1);
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const scaling = useSharedValue(0);
        const animatedStyle = useAnimatedStyle(() => {
          return {
            transform: [{scaleX: scaling.value}],
          };
        });
        useEffect(() => {
          if (!isFocused) {
            scaling.value = 0;
          } else {
            onPress();
          }
        }, [isFocused]);
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            activeOpacity={1}
            key={index}
            style={{flex: 1, padding: 10}}>
            <View style={{alignItems: 'center'}}>
              {options?.tabBarIcon && (
                <AnimationIcon
                  isFocused={isFocused}
                  animatedStyle={animatedStyle}
                  icon={options.tabBarIcon}
                />
              )}
              <Text
                textType="Paragraph_05"
                style={{
                  color: isFocused ? colors.success_500 : '#222',
                  fontWeight: isFocused ? '700' : 'normal',
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

// Animation Content
const AnimationIcon = (props: any) => {
  const {colors} = useTheme();
  const {isFocused, animatedStyle, icon} = props;
  const Ico = icon;
  return (
    <View>
      <Animated.View
        style={[
          {
            backgroundColor: isFocused ? colors.green : 'transparent',
          },
          styles().box,
          animatedStyle,
        ]}
      />
      <View style={styles().iconBox}>
        <Ico color={isFocused ? colors.success_500 : '#222'} />
      </View>
    </View>
  );
};
