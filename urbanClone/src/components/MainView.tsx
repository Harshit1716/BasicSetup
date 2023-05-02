import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../resources';

interface MainViewTypes {
  style?: any;
  //   children: any;
  isVisible: boolean;
}

const MainView = (props: any) => {
  return (
    <View style={styles.container}>
      {props.children}
      {props?.isVisible && (
        <View
          style={{
            position: 'absolute',
            height: 100,
            width: 200,
            backgroundColor: 'red',
            alignSelf: 'center',
            marginTop: '55%',
          }}></View>
      )}
    </View>
  );
};

export default MainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SIZES.height,
    width: SIZES.width,
    // backgroundColor: 'red',
  },
});
