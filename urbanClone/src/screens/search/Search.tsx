import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SearchComponent} from '../../components/Header';
import {COLORS, FONTS, ICONS, SHADOW, SIZES} from '../../resources';
import {
  ACServices,
  CarServices,
  ELectricianServices,
  LaundaryServices,
  ServiceData,
} from '../../resources/DataSet';
import {useAppDispatch, useAppSelector} from '../../stateManagemer/Store';
import {addToCart} from '../../stateManagemer/slice/UserSlice';
import {
  AddOrderType,
  OrderType,
} from '../../stateManagemer/models/UserProfileModel';
import MainView from '../../components/MainView';

const Search = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.userReducer.cart);
  const [txt, setTxt] = useState<string>('');
  const [list, setList] = useState([
    ...ACServices,
    ...LaundaryServices,
    ...CarServices,
    ...ELectricianServices,
  ]);
  const [filteredList, setFilteredList] = useState([
    ...ACServices,
    ...LaundaryServices,
    ...CarServices,
    ...ELectricianServices,
  ]);

  // useEffect(() => {}, []);

  const handleChange = (text: string) => {
    setTxt(text);
    let ar = list.filter(item => item.name.includes(text));
    setFilteredList(ar);
  };

  const searchBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{width: '85%'}}>
          <SearchComponent value={txt} onChangeText={handleChange} />
        </View>
        <TouchableOpacity style={{marginTop: '5%'}}>
          <Image style={{height: 40, width: 40}} source={ICONS.FILTER_ICON} />
        </TouchableOpacity>
      </View>
    );
  };
  const selectorBtn = () => {
    const [providerSelected, setProviderSelected] = useState<boolean>(false);
    return (
      <View
        style={{
          marginTop: '5%',
          borderRadius: 10,
          height: SIZES.height * 0.07,
          width: '90%',
          backgroundColor: COLORS.white,
          alignSelf: 'center',
          flexDirection: 'row',
          ...SHADOW,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (providerSelected) setProviderSelected(false);
          }}
          style={{
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: SIZES.height * 0.07,
            // width: '80%',
            flex: 1,
            backgroundColor: providerSelected ? COLORS.white : COLORS.primary,
            alignSelf: 'center',
            ...SHADOW,
          }}>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.h2,
              color: !providerSelected ? COLORS.white : COLORS.primary,
            }}>
            Service
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (!providerSelected) setProviderSelected(true);
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            height: SIZES.height * 0.07,
            backgroundColor: !providerSelected ? COLORS.white : COLORS.primary,
            alignSelf: 'center',
            flex: 1,
            ...SHADOW,
          }}>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.h2,
              color: providerSelected ? COLORS.white : COLORS.primary,
            }}>
            Provider
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderServiceItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // console.log(item.)
          const data: AddOrderType = {
            orderAmount: item?.price,
            serviceType: item?.type,
            serviceName: item?.name,
            serviceId: item?.serviceId,
          };
          dispatch(addToCart(data));
        }}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightGray,
          paddingVertical: '5%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Text numberOfLines={2} style={{...FONTS.h3, marginBottom: '2%'}}>
            {item.name}
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
              {item.rating}
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
              Add
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const serviceRow = () => {
    return (
      <View style={{paddingHorizontal: '5%', paddingTop: '5%', flex: 1}}>
        <FlatList
          data={filteredList}
          renderItem={renderServiceItem}
          ListFooterComponent={() => {
            return (
              <>
                {(cart?.totalAmount ?? 0) > 0 && (
                  <View
                    style={{height: SIZES.height * 0.15, width: '100%'}}></View>
                )}
              </>
            );
          }}
        />
      </View>
    );
  };
  return (
    <MainView>
      <View style={{flex: 1, paddingTop: '10%', backgroundColor: COLORS.white}}>
        {searchBar()}
        {selectorBtn()}
        {serviceRow()}
      </View>
    </MainView>
  );
};

export default Search;

const styles = StyleSheet.create({});
