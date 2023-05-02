import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard, Home, OnBoarding} from '../screens';
import BottomTab from './BottomTabs';
import ServiceStack from './ServiceStack';
import {useAppSelector} from '../stateManagemer/Store';

const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  const email = useAppSelector(state => state.userReducer.email);
  const name = useAppSelector(state => state.userReducer.name);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {email == '' && (
          <RootStack.Screen
            options={{
              headerShown: false,
            }}
            name="OnBoarding"
            component={OnBoarding}
          />
        )}
        {!(email == '') && (
          <RootStack.Screen
            name="BottomTabs"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
        )}
        {!(email == '') && (
          <RootStack.Screen
            name="ServiceStack"
            component={ServiceStack}
            options={{
              headerShown: false,
            }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
