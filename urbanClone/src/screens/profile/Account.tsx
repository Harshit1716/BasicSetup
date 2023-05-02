import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS, ICONS} from '../../resources';
import {useAppDispatch, useAppSelector} from '../../stateManagemer/Store';
import {logout} from '../../stateManagemer/slice/UserSlice';
const options = [
  {
    title: 'My Wallet',
    screen: 'My Wallet',
  },
  {
    title: 'My Booking',
    screen: 'My Booking',
  },
  {
    title: 'Manage Address',
    screen: 'Manage Address',
  },
  {
    title: 'My Rating',
    screen: 'My Rating',
  },
  {
    title: 'Refer and Earn',
    screen: 'Refer and Earn',
  },
  {
    title: 'Manage Payment Options',
    screen: 'Manage Payment Options',
  },
  {
    title: 'Settings',
    screen: 'Settings',
  },
  {
    title: 'About',
    screen: 'About',
  },
  {
    title: 'Logout',
    screen: 'Logout',
  },
];
const Account = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.userReducer);
  const listRow = ({item, index}: {item: any; index: number}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.title == 'Logout') dispatch(logout());
        }}
        style={styles.rowContainer}>
        <Text style={{flex: 1, ...FONTS.body3, marginLeft: '5%'}}>
          {item.title}
        </Text>
        <Image
          style={{tintColor: COLORS.gray, height: 30, width: 30}}
          source={ICONS.FORWARD_ICON}
        />
      </TouchableOpacity>
    );
  };
  const accountRow = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.white,
          padding: '4%',
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightGray1,
          marginBottom: '5%',
          marginTop: '10%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginVertical: '2%',
              height: 60,
              width: 60,
              backgroundColor: COLORS.lightGray1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 60,
            }}>
            <Image
              style={{height: 40, width: 40}}
              source={ICONS.ACCOUNT_TAB_ICON}
            />
          </View>

          <View style={{flex: 1, paddingHorizontal: '5%'}}>
            <Text style={{...FONTS.body2}}>{user.name}</Text>
            <Text>{user.email}</Text>
          </View>
          <Image
            style={{tintColor: COLORS.gray, height: 30, width: 30}}
            source={ICONS.FORWARD_ICON}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const versionComponent = () => {
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: '5%'}}>
        <Text style={{...FONTS.body3, color: COLORS.gray}}>Version 5.4.3</Text>
        <Text style={{...FONTS.body4, color: COLORS.gray}}>Urban Homes</Text>
        <Text style={{...FONTS.body4, color: COLORS.gray}}>
          www.urbanhomes.com
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {accountRow()}
        <TouchableOpacity style={{marginBottom: '5%', ...styles.rowContainer}}>
          <Text
            style={{
              flex: 1,
              ...FONTS.body3,
              marginLeft: '5%',
            }}>
            Help Center
          </Text>
          <Image
            style={{tintColor: COLORS.gray, height: 30, width: 30}}
            source={ICONS.FORWARD_ICON}
          />
        </TouchableOpacity>
        <FlatList data={options} renderItem={listRow} />
        {versionComponent()}
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // padding: 0,
    backgroundColor: COLORS.lightGray1,
  },
  rowContainer: {
    backgroundColor: COLORS.white,
    padding: '4%',
    borderBottomWidth: 1,
    // marginBottom: '2%',
    borderBottomColor: COLORS.lightGray1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
