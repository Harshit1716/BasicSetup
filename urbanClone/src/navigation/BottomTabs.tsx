import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Dashboard, Home, Search} from '../screens';
import {COLORS, ICONS, SIZES} from '../resources';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                }}
                source={ICONS.HOME_TAB_ICON}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  height: 35,
                  width: 35,
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                }}
                source={ICONS.SEARCH_ICON}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  height: 35,
                  width: 35,
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                }}
                source={ICONS.ACCOUNT_TAB_ICON}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
