import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, ICONS, SHADOW, SIZES} from '../../resources';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../stateManagemer/Store';
import {OrderType} from '../../stateManagemer/models/UserProfileModel';
// import {removeFromCart} from '../../stateManagemer/slice/UserSlice';

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.userReducer.cart);
  const headerComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{padding: '2%', marginLeft: '2%'}}>
          <Image
            resizeMode="contain"
            style={{tintColor: COLORS.black, height: 30, width: 30}}
            source={ICONS.BACKWARD_ICON}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...FONTS.h2,
            flex: 1,
            textAlign: 'center',
            marginRight: '18%',
          }}>
          CART
        </Text>
      </View>
    );
  };
  const renderServiceItem = ({
    item,
    index,
  }: {
    item: OrderType;
    index: number;
  }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: '5%',
          borderBottomColor: COLORS.lightGray,
          margin: '2%',
          ...SHADOW,
          justifyContent: 'center',
          // backgroundColor: COLORS.white,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Text numberOfLines={2} style={{...FONTS.h3, marginBottom: '2%'}}>
            {item.serviceName}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '2%',
            }}>
            <Image
              style={{height: 15, width: 15, marginRight: '2%'}}
              source={ICONS.STAR_ICON}
            />
            <Text
              numberOfLines={2}
              style={{...FONTS.body4, color: COLORS.gray}}>
              4.12 (1.1 M)
            </Text>
          </View>
          <View style={{width: '100%'}}>
            <Text numberOfLines={1} style={{flex: 1, color: COLORS.gray}}>
              -----------------------------------
            </Text>
          </View>

          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.primary,
              marginBottom: '2%',
              marginLeft: '2%',
            }}>
            Rs. {item.orderAmount}/-
          </Text>
        </View>
        <View style={{alignSelf: 'flex-start'}}>
          <Image
            resizeMode="cover"
            style={{
              height: 100,
              width: 100,
              borderRadius: 10,
            }}
            source={ICONS.AC_SERVICE_ICON}
          />
          <TouchableOpacity
            onPress={() => {
              // dispatch(removeFromCart({id: index, price: item.orderAmount}));
            }}>
            <View
              style={{
                backgroundColor: 'white',
                top: -10,
                borderWidth: 1,
                padding: '3%',
                width: '70%',
                alignSelf: 'center',
                borderRadius: 5,
                ...SHADOW,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  ...FONTS.body4,
                  color: COLORS.secondary,
                }}>
                Remove
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const checkoutComponent = () => {
    return (
      <View style={{padding: '5%'}}>
        <Text style={{...FONTS.h2, color: COLORS.gray}}>Checkout</Text>
        <View
          style={{
            flexDirection: 'row',

            borderBottomWidth: 1,
            borderBottomColor: COLORS.lightGray,
            paddingBottom: '3%',
          }}>
          <Text style={{...FONTS.body3, flex: 1}}>
            Total :- {cart?.Orders.length ?? 0} Items
          </Text>
        </View>
      </View>
    );
  };
  const payNow = () => {
    return (
      <View
        style={{
          height: Platform.OS == 'android' ? '30%' : '25%',
          padding: '5%',
          borderTopWidth: 1,
          borderTopColor: COLORS.lightGray,

          marginHorizontal: '2%',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, ...FONTS.body3}}>Order Total: </Text>
          <Text style={{...FONTS.body3}}>1500/-</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, ...FONTS.body5}}>
            Tax Total {'(10%)'}
            {' :'}
          </Text>
          <Text style={{...FONTS.body5}}>150/- </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <Text style={{flex: 1, ...FONTS.h3}}>Total Bill: </Text>
          <Text style={{...FONTS.body3}}>1650/-</Text>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity style={[styles.loginBtn]}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
                textAlign: 'center',
              }}>
              PAY NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={{paddingTop: Platform.OS == 'ios' ? '13%' : '5%', flex: 1}}>
      {headerComponent()}
      {checkoutComponent()}
      {(cart?.Orders.length ?? -1) > 0 && (
        <FlatList data={cart?.Orders} renderItem={renderServiceItem}></FlatList>
      )}
      {payNow()}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  loginBtn: {
    marginTop: '5%',
    padding: 10,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  container: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 18,
    textAlign: 'center',
  },
});
