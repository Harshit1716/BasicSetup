import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, ICONS, SHADOW, SIZES} from '../resources';
import {useAppSelector} from '../stateManagemer/Store';

interface MainViewTypes {
  style?: any;
  //   children: any;
  isVisible: boolean;
}

const MainView = (props: any) => {
  const cart = useAppSelector(state => state.userReducer.cart);
  return (
    <View style={styles.container}>
      {props.children}
      {(cart?.totalAmount ?? 0) > 0 && (
        <View
          style={{
            position: 'absolute',
            // height: 100,
            paddingVertical: '5%',
            width: '100%',
            backgroundColor: COLORS.lightGray1,
            borderTopStartRadius: 40,
            borderTopEndRadius: 20,
            ...SHADOW,
            bottom: '0%',

            alignSelf: 'center',
            // marginTop: '55%',
            paddingHorizontal: '5%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{borderRadius: 20}}>
            <Text style={{...FONTS.h3}}>Total amount</Text>
            <Text style={{...FONTS.body3, marginTop: '3%'}}>
              Rs. {cart.totalAmount} /-
            </Text>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={[styles.loginBtn]}
              onPress={() => {
                // const data = {
                //   email: 'harry@yopmail.com',
                //   name: 'Harry Potter',
                // };
                // dipatch(login(data));
                // navigation?.navigate('BottomTabs');
                console.log(cart);
              }}>
              <Text
                style={{color: COLORS.white, ...FONTS.h3, textAlign: 'center'}}>
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  loginBtn: {
    padding: 20,
    width: '80%',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },
});
