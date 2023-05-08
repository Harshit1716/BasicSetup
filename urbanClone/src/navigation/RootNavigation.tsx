import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Cart, Dashboard, Home, Login, OnBoarding, Profile} from '../screens';
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
        {email == '' && (
          <RootStack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
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
        {!(email == '') && (
          <RootStack.Screen
            name="Cart"
            component={Cart}
            options={{
              headerShown: false,
            }}
          />
        )}
        {!(email == '') && (
          <RootStack.Screen
            name="Profile"
            component={Profile}
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
