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
import {COLORS, FONTS, ICONS, SIZES} from '../../resources';
import Carousel from 'react-native-snap-carousel';
import HeaderComponent from '../../components/Header';
import {DataSet} from '../../resources';
import {Banners} from '../../components';
import {serviceData} from '../../resources/DataSet';

const Dashboard = () => {
  const [item, setItems] = useState(DataSet.OfferData);

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
          paddingVertical: '5%',
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
          horizontal
          contentContainerStyle={{marginTop: '5%'}}
          data={serviceData}
          // nestedScrollEnabled={true}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
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
                  {item.text}
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
          paddingVertical: '5%',
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
          horizontal
          contentContainerStyle={{marginTop: '5%'}}
          data={serviceData}
          // nestedScrollEnabled={true}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
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
                  {item.text}
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
          paddingVertical: '5%',
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
          horizontal
          contentContainerStyle={{marginTop: '5%'}}
          data={serviceData}
          // nestedScrollEnabled={true}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
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
                <Text style={[styles.serviceText]}>{item.text}</Text>
                <Text style={{...FONTS.body5}}>Rating : 4.12{'(1.1 M)'}</Text>
                <Text style={{...FONTS.body5}}>Rs. 542</Text>
              </TouchableOpacity>
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
          paddingVertical: '5%',
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
          scrollEnabled={false}
          // horizontal
          numColumns={2}
          contentContainerStyle={{marginTop: '5%'}}
          data={serviceData}
          // nestedScrollEnabled={true}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  // borderWidth: 1,
                  // borderColor: COLORS.gray,
                  marginHorizontal: 10,
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
                <Text style={[styles.serviceText]}>{item.text}</Text>
                <Text style={{...FONTS.body5}}>Rating : 4.12{'(1.1 M)'}</Text>
                <Text style={{...FONTS.body5}}>Rs. 542</Text>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
    );
  };

  const categorySection = (title: string) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: '5%',
          marginBottom: '5%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: '5%',
            // alignItems: 'center',
          }}>
          {headingComponent(title)}
          <TouchableOpacity style={{marginTop: '7%'}}>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          contentContainerStyle={{marginTop: '5%'}}
          data={serviceData}
          // nestedScrollEnabled={true}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
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
                <Text style={[styles.serviceText]}>{item.text}</Text>
                <Text style={{...FONTS.body5}}>Rating : 4.12{'(1.1 M)'}</Text>
                <Text style={{...FONTS.body5}}>Rs. 542</Text>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
    );
  };

  return (
    <ScrollView
      // nestedScrollEnabled={true}
      bounces={false}
      style={styles.container}>
      <HeaderComponent />
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: '5%',
          marginVertical: '5%',
        }}>
        {headingComponent('Offers for you')}
        <Banners data={item} />
      </View>

      {categoriesComponent()}
      {mostBooked()}
      {TopRated()}
      {categorySection('AC Services')}
      {recomendedCategoriesComponent()}
      {categorySection('Quick Home Services')}
    </ScrollView>
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
    ...FONTS.body4,
    // color: COLORS.primary,
  },
});
