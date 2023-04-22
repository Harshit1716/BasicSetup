import React from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {COLORS, FONTS, SIZES, ICONS} from '../../resources';

const onBoardings = [
  {
    title: 'House Cleaning',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: ICONS.ONBOARDING_ONE_ICON,
  },
  {
    title: 'Laundry Service',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: ICONS.ONBOARDING_TWO_ICON,
  },
  {
    title: 'Electrician',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: ICONS.ONBOARDING_THREE_ICON,
  },
];

const OnBoarding = () => {
  const scrollX = new Animated.Value(0);

  // Render

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {onBoardings.map((item, index) => (
          <View key={`img-${index}`} style={styles.imageAndTextContainer}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image
                source={item.img}
                resizeMode="contain"
                style={{
                  marginTop: '-20%',
                  width: '75%',
                  height: '75%',
                }}
              />
              <View style={{padding: '2%', marginTop: '-35%'}}>
                <Text
                  style={{
                    //   ...FONTS.h1,
                    fontSize: SIZES.h1,
                    color: COLORS.gray,
                    textAlign: 'center',
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    //   ...FONTS.body3,
                    padding: '2%',
                    fontSize: SIZES.body3,
                    textAlign: 'center',
                    marginTop: SIZES.base,
                    color: COLORS.gray,
                  }}>
                  {item.description}
                </Text>
              </View>
              <TouchableOpacity
                style={[{marginVertical: '7%'}, styles.loginBtn]}
                onPress={() => {
                  console.log('button pressed');
                }}>
                <Text style={{color: COLORS.white, fontSize: SIZES.h2}}>
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  console.log('button pressed');
                }}>
                <Text style={{color: COLORS.white, fontSize: SIZES.h2}}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, {width: dotSize, height: dotSize}]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: 'white', flex: 3}}>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  imageAndTextContainer: {
    width: SIZES.width,
    flex: 2,
    // backgroundColor:'red'
  },
  dotsRootContainer: {
    position: 'absolute',
    // bottom: SIZES.height > 700 ? '%' : '20%',
    bottom: '1%',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding / 2,
    marginBottom: SIZES.padding * 2,
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.radius / 2,
  },
  loginBtn: {
    width: '80%',
    // height: '10%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },
});

export default OnBoarding;
