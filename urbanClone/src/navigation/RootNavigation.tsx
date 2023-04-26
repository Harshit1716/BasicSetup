import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard, Home, OnBoarding} from '../screens';
import BottomTab from './BottomTabs';

const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="OnBoarding"
          component={OnBoarding}
        />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="BottomTabs"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
