import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ServiceDetail} from '../screens';

const ServiceStackNavigator = createNativeStackNavigator();

const ServiceStack = () => {
  return (
    <ServiceStackNavigator.Navigator>
      <ServiceStackNavigator.Screen
        options={{headerShown: true}}
        component={ServiceDetail}
        name="ServiceDetail"
      />
    </ServiceStackNavigator.Navigator>
  );
};

export default ServiceStack;

const styles = StyleSheet.create({});
