import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, ICONS, SHADOW, SIZES} from '../../resources';
import ReactNativeModal from 'react-native-modal';

const ServiceDetail = (params: any) => {
  const serviceHeader = () => {
    return (
      <View style={{padding: '5%', backgroundColor: COLORS.white}}>
        <Text style={{...FONTS.h2}}>CAR WASH </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{
              height: 35,
              width: 35,
              marginRight: '2%',
              marginVertical: '2%',
            }}
            source={ICONS.STAR_ICON}
          />
          <Text style={{...FONTS.body3, color: COLORS.black}}>
            4.12{'(1.1 M Booking)'}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{
              height: 35,
              width: 35,
              marginRight: '2%',
            }}
            source={ICONS.CLOCK_ICON}
          />
          <Text style={{...FONTS.body3, color: COLORS.black}}>
            4.12{'(1.1 M Booking)'}
          </Text>
        </View>
        <View style={{marginTop: 30, marginBottom: 10}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1, 2, 3, 4, 5]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,

                    marginRight: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: COLORS.secondary,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{height: 15, width: 15, marginRight: 10}}
                      resizeMode="contain"
                      source={ICONS.LABEL_ICON}
                    />
                    <Text style={{...FONTS.h3, color: COLORS.secondary}}>
                      Save upto 15% on every deal
                    </Text>
                  </View>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.primary,
                      marginTop: 5,
                    }}>
                    Get Plus Now
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  };

  const subServices = () => {
    return (
      <View
        style={{
          marginVertical: 10,
          backgroundColor: COLORS.white,
          //   padding: 20,
        }}>
        <FlatList
          nestedScrollEnabled={true}
          numColumns={3}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item, index}) => {
            return (
              <View style={{margin: 15}}>
                <Image
                  style={{
                    height: SIZES.width * 0.25,
                    width: SIZES.width * 0.25,
                    borderRadius: 10,
                  }}
                  source={
                    index % 2 == 0
                      ? ICONS.ELECTRICIAN_SERVICE_ICON
                      : ICONS.AC_SERVICE_ICON
                  }
                />
                <Text
                  numberOfLines={3}
                  style={{alignSelf: 'center', ...FONTS.body4, width: 80}}>
                  Car service
                </Text>
              </View>
            );
          }}
        />
      </View>
    );
  };
  const renderServiceItem = ({item, index}: any) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightGray,
          paddingVertical: '5%',
        }}>
        <View
          style={{
            paddingVertical: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Text numberOfLines={2} style={{...FONTS.h3, marginBottom: '2%'}}>
              Car Cleaning Service{' '}
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
                4.80 (36.7K)
              </Text>
            </View>
            <View style={{width: '100%'}}>
              <Text numberOfLines={1} style={{flex: 1, color: COLORS.gray}}>
                -----------------------------------
              </Text>
            </View>
            <View
              style={{
                // paddingVertical: '3%',
                paddingRight: '3%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  left: -10,
                }}>
                <Image
                  resizeMode="contain"
                  style={{height: 25, width: 25}}
                  source={ICONS.DOT_ICON}
                />
                <Text
                  numberOfLines={1}
                  style={{...FONTS.body4, color: COLORS.gray}}>
                  100% colophony free
                </Text>
              </View>

              <View
                style={{flexDirection: 'row', alignItems: 'center', left: -10}}>
                <Image
                  resizeMode="contain"
                  style={{height: 25, width: 25}}
                  source={ICONS.DOT_ICON}
                />
                <Text
                  numberOfLines={1}
                  style={{...FONTS.body4, color: COLORS.gray}}>
                  100% colophony free
                </Text>
              </View>
            </View>
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
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={{...FONTS.h3, color: COLORS.primary}}>
            View Details {'->'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const serviceRow = () => {
    return (
      <View
        style={{
          paddingHorizontal: '5%',
          paddingTop: '5%',
          flex: 1,
          backgroundColor: COLORS.white,
          marginBottom: 30,
        }}>
        <FlatList
          nestedScrollEnabled={true}
          data={[1, 2, 3, 4, 5]}
          renderItem={renderServiceItem}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        bounces={false}
        nestedScrollEnabled={true}
        style={{flex: 1, backgroundColor: COLORS.lightGray1}}>
        <Image
          resizeMode="cover"
          source={ICONS.CAR_SERVICE_ICON}
          style={{
            height: SIZES.height * 0.25,
            width: '100%',
            //   borderBottomLeftRadius: 20,
            //   borderBottomRightRadius: 20,
          }}
        />
        {serviceHeader()}
        {subServices()}
        {serviceRow()}
      </ScrollView>
    </View>
  );
};

export default ServiceDetail;

const styles = StyleSheet.create({});
