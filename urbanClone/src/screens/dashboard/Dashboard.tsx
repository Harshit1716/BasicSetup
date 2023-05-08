import {
  Animated,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {COLORS, FONTS, ICONS, SHADOW, SIZES} from '../../resources';
import Carousel from 'react-native-snap-carousel';
import HeaderComponent from '../../components/Header';
import {DataSet} from '../../resources';
import {Banners} from '../../components';
import {MostBooked, ServiceData, serviceData} from '../../resources/DataSet';
import MainView from '../../components/MainView';
import {
  AddOrderType,
  serviceType,
} from '../../stateManagemer/models/UserProfileModel';
import {ACServices} from '../../resources/DataSet';
import {CarServices} from '../../resources/DataSet';
import {LaundaryServices} from '../../resources/DataSet';
import {ELectricianServices} from '../../resources/DataSet';
import {useAppDispatch, useAppSelector} from '../../stateManagemer/Store';
import {addToCart} from '../../stateManagemer/slice/UserSlice';

const Dashboard = ({navigation}: any) => {
  const [item, setItems] = useState(DataSet.OfferData);
  const cart = useAppSelector(state => state.userReducer.cart);
  const dispatch = useAppDispatch();
  const headingComponent = (txt: string) => {
    return (
      <>
        <Text style={styles.heading}>{txt}</Text>
      </>
    );
  };

  const categoriesComponent = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: '3%',
          marginBottom: '5%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: '5%',
            // alignItems: 'center',
          }}>
          {headingComponent('Categories')}
          <TouchableOpacity style={{marginTop: '7%'}}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{marginTop: '5%'}}
          data={ServiceData}
          // nestedScrollEnabled={true}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ServiceStack', {
                    screen: 'ServiceDetail',
                    params: {
                      data: item,
                    },
                  });
                }}
                style={{
                  borderRadius: 10,
                  // borderWidth: 1,
                  // borderColor: COLORS.gray,
                  marginHorizontal: 10,
                }}>
                <Image
                  style={{height: 100, width: 100, borderRadius: 10}}
                  source={item?.img}
                />
                <Text style={[{textAlign: 'center'}, styles.viewAllTxt]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
    );
  };
  const recomendedCategoriesComponent = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: '3%',
          marginBottom: '5%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: '5%',
            // alignItems: 'center',
          }}>
          {headingComponent('Recomended')}
          <TouchableOpacity style={{marginTop: '7%'}}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{marginTop: '5%'}}
          data={ServiceData}
          // nestedScrollEnabled={true}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ServiceStack', {
                    screen: 'ServiceDetail',
                    params: {
                      data: item,
                    },
                  });
                }}
                style={{
                  borderRadius: 10,
                  // borderWidth: 1,
                  // borderColor: COLORS.gray,
                  marginHorizontal: 10,
                }}>
                <Image
                  style={{height: 100, width: 100, borderRadius: 10}}
                  source={item?.img}
                />
                <Text style={[{textAlign: 'center'}, styles.viewAllTxt]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
    );
  };

  const mostBooked = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: '3%',
          marginBottom: '5%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: '5%',
            // alignItems: 'center',
          }}>
          {headingComponent('Most Booked')}
          <TouchableOpacity style={{marginTop: '7%'}}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{marginTop: '5%'}}
          data={MostBooked}
          // nestedScrollEnabled={true}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  borderRadius: 10,
                  // borderWidth: 1,
                  // borderColor: COLORS.gray,
                  marginHorizontal: 10,
                }}>
                <Image
                  style={{height: 150, width: 150, borderRadius: 10}}
                  source={item?.img}
                />
                <Text style={[styles.serviceText]}>{item.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: 15,
                      width: 15,
                      marginRight: 2,
                      marginLeft: -2,
                    }}
                    source={ICONS.STAR_ICON}
                  />
                  <Text style={{...FONTS.body5, color: COLORS.gray}}>
                    {item.rating}
                  </Text>
                </View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.gray,
                    marginLeft: 2,
                    marginBottom: 5,
                  }}>
                  Rs. {item.price}/-
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    // console.log(item.)
                    const data: AddOrderType = {
                      orderAmount: item?.price,
                      serviceType: item?.type,
                      serviceName: item?.name,
                      serviceId: item?.serviceID,
                    };
                    dispatch(addToCart(data));
                  }}
                  style={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    padding: '3%',
                    width: '70%',
                    // alignSelf: 'center',
                    borderRadius: 5,
                    ...SHADOW,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      ...FONTS.body4,
                      color: COLORS.primary,
                    }}>
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}></FlatList>
      </View>
    );
  };
  const TopRated = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: '3%',
          marginBottom: '5%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: '5%',
            // alignItems: 'center',
          }}>
          {headingComponent('TOP RATED')}
          <TouchableOpacity style={{marginTop: '7%'}}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          // horizontal
          numColumns={2}
          contentContainerStyle={{marginTop: '5%'}}
          data={MostBooked}
          // nestedScrollEnabled={true}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  borderRadius: 10,
                  // borderWidth: 1,
                  // borderColor: COLORS.gray,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}>
                <Image
                  resizeMode="cover"
                  style={{
                    height: SIZES.height * 0.2,
                    width: SIZES.width * 0.45,
                    borderRadius: 10,
                  }}
                  source={item?.img}
                />
                <Text style={[styles.serviceText]}>{item.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: 15,
                      width: 15,
                      marginRight: 2,
                      marginLeft: -2,
                    }}
                    source={ICONS.STAR_ICON}
                  />
                  <Text style={{...FONTS.body5, color: COLORS.gray}}>
                    {item.rating}
                  </Text>
                </View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.gray,
                    marginLeft: 2,
                    marginBottom: 5,
                  }}>
                  Rs. {item.price}/-
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    // console.log(item.)
                    const data: AddOrderType = {
                      orderAmount: item?.price,
                      serviceType: item?.type,
                      serviceName: item?.name,
                      serviceId: item?.serviceID,
                    };
                    dispatch(addToCart(data));
                  }}
                  style={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    padding: '3%',
                    width: '70%',
                    // alignSelf: 'center',
                    borderRadius: 5,
                    ...SHADOW,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      ...FONTS.body4,
                      color: COLORS.primary,
                    }}>
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}></FlatList>
      </View>
    );
  };

  const categorySection = (title: string) => {
    let listData = [];
    let txt = '';
    switch (title) {
      case serviceType.acService + '':
        listData = ACServices;
        txt = 'Ac Service';
        break;
      case serviceType.carService + '':
        listData = CarServices;
        txt = 'Car Service';
        break;
      case serviceType.laundryService + '':
        listData = LaundaryServices;
        txt = 'Laundary Service';
        break;
      case serviceType.electrician + '':
        listData = ELectricianServices;
        txt = 'Electrician Service';
        break;
      default:
        listData = ACServices;
        txt = 'Ac Service';
    }

    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: '3%',
          marginBottom: '5%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: '5%',
            // alignItems: 'center',
          }}>
          {headingComponent(txt)}
          <TouchableOpacity style={{marginTop: '7%'}}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{marginTop: '5%'}}
          data={listData}
          // nestedScrollEnabled={true}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  borderRadius: 10,
                  // borderWidth: 1,
                  // borderColor: COLORS.gray,
                  marginHorizontal: 10,
                }}>
                <Image
                  style={{height: 150, width: 150, borderRadius: 10}}
                  source={item?.img}
                />
                <Text style={[styles.serviceText]}>{item.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: 15,
                      width: 15,
                      marginRight: 2,
                      // marginLeft: -2,
                    }}
                    source={ICONS.STAR_ICON}
                  />
                  <Text style={{...FONTS.body5, color: COLORS.gray}}>
                    {item.rating}
                  </Text>
                </View>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.gray,
                    marginLeft: 2,
                    marginBottom: 5,
                  }}>
                  Rs. {item.price}/-
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    // console.log(item.)
                    const data: AddOrderType = {
                      orderAmount: item?.price,
                      serviceType: item?.type,
                      serviceName: item?.name,
                      serviceId: item?.serviceID,
                    };
                    dispatch(addToCart(data));
                  }}
                  style={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    padding: '3%',
                    width: '70%',
                    // alignSelf: 'center',
                    borderRadius: 5,
                    ...SHADOW,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      ...FONTS.body4,
                      color: COLORS.primary,
                    }}>
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}></FlatList>
      </View>
    );
  };

  return (
    <MainView isVisible={false}>
      <ScrollView
        // nestedScrollEnabled={true}
        bounces={false}
        style={styles.container}>
        <HeaderComponent />
        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: '3%',
            marginBottom: '5%',
          }}>
          {headingComponent('Offers for you')}
          <Banners data={item} />
        </View>

        {categoriesComponent()}
        {mostBooked()}
        {TopRated()}
        {/* <View
        style={{
          backgroundColor: 'white',
          paddingVertical: '5%',
          marginBottom: '5%',
        }}>
        {headingComponent('Offers for you')}
        <Banners data={item} />
      </View> */}
        {categorySection(serviceType.acService + '')}
        {recomendedCategoriesComponent()}
        {categorySection(serviceType.carService + '')}
        {(cart?.totalAmount ?? 0) > 0 && (
          <View style={{height: SIZES.height * 0.1, width: '100%'}}></View>
        )}
      </ScrollView>
    </MainView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray1,
    flex: 1,
    // alignItems: 'center',
    // paddingTop: '10%',
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.radius / 2,
  },
  heading: {
    marginLeft: '5%',
    marginTop: '5%',
    color: COLORS.primary,
    ...FONTS.h2,
  },
  viewAllTxt: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
  serviceText: {
    marginTop: 5,
    ...FONTS.body4,
    color: COLORS.primary,
  },
});
