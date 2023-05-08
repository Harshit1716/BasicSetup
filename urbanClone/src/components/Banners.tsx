import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {SIZES} from '../resources';

interface BannerProps {
  data: any[];
}
const Banners = (Props: BannerProps) => {
  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: '-10%',
          // marginRight: Platform.OS == 'android' ? 70 : 0,
          marginTop: '5%',
        }}>
        <Image
          resizeMode="cover"
          style={{
            borderRadius: 20,
            height: SIZES.height * 0.2,
            width:
              Platform.OS == 'android' ? SIZES.width * 0.75 : SIZES.width * 0.8,
          }}
          source={item.img}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Carousel
        data={Props.data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={300}
        layout={'default'}
      />
    </View>
  );
};

export default Banners;

const styles = StyleSheet.create({});
