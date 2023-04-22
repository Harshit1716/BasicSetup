import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Home} from './src/screens';
import {Provider} from 'react-redux';
import {store} from './src/stateManagemer/Store';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
