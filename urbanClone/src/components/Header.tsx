import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, ICONS, SIZES} from '../resources';

interface SearchProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchComponent = (props: SearchProps) => {
  return (
    <View
      style={{
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: '1%',
        borderRadius: 10,
        marginTop: '5%',
        marginHorizontal: '3%',
        flexDirection: 'row',
        paddingVertical: '4%',
        shadowColor: COLORS.lightGray,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        borderColor: COLORS.lightGray,
        elevation: 4,
      }}>
      <Image
        resizeMode="contain"
        style={{
          marginRight: '2%',
          height: 30,
          width: 30,
          tintColor: 'orange',
        }}
        source={ICONS.SEARCH_ICON}
      />
      <TextInput
        placeholder="Search for (cleaning service)"
        style={{
          width: '90%',
          ...FONTS.body4,
          color: COLORS.primary,
          paddingRight: '3%',
        }}
      />
    </View>
  );
};
const HeaderComponent = () => {
  return (
    <View
      style={{
        paddingTop: Platform.OS == 'ios' ? '13%' : '5%',
        paddingBottom: '5%',
        // height: '20%',
        width: '100%',
        paddingHorizontal: '2%',
        backgroundColor: COLORS.lightGray1,
        shadowColor: COLORS.lightGray,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.6,
        shadowRadius: 3,
        borderColor: COLORS.lightGray,
        elevation: 4,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            style={{tintColor: COLORS.primary, height: 40, width: 40}}
            source={ICONS.LOCATION_ICON}
          />
          <View>
            <Text style={{color: COLORS.primary, fontSize: SIZES.h4}}>
              location
            </Text>
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: '700',
                fontSize: SIZES.h3,
              }}>
              Bangluru
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              height: 60,
              width: 60,
              borderRadius: 80,
            }}
            source={ICONS.PROFILE_ICON}
          />
        </TouchableOpacity>
      </View>
      <SearchComponent />
    </View>
  );
};

export default HeaderComponent;
