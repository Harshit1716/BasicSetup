import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  I18nManager,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
import {Alert} from 'react-native';
import EventBus from 'react-native-event-bus';
// import EventBus from 'react-native-event-bus';
import {COLORS, ICONS, SIZES} from '../../resources';
import {useAppDispatch, useAppSelector} from '../../stateManagemer/Store';
import {setFlag} from '../homeScreen/HomeSlice';

const dummyArray = [
  {
    id: 2,
    name: 'Trudoc24*7team',

    header: false,
    width: 20,
    height: 16,
  },
  {
    id: 3,
    name: 'HealthDigest',

    header: false,
    width: 20,
    height: 16,
  },
  {
    id: 4,
    name: 'HealthMatrics',

    header: false,
    width: 20,
    height: 16,
  },
  {
    id: 5,
    name: 'MySubscriptions',

    header: false,
    width: 18,
    height: 19,
  },

  {
    id: 6,
    name: 'Feedback&Support',

    header: false,
    width: 18,
    height: 18,
  },
  {
    id: 7,
    name: 'rateourapp',

    header: false,
    width: 15,
    height: 18,
  },
  {
    id: 8,
    name: 'AboutUs',

    header: false,
    width: 15,
    height: 18,
  },
  // {
  //   id: 9,
  //   name:"ConditionWeCanManage",
  //   image: Images.about3x,
  //   header: false,
  //   width: 15,
  //   height: 18,
  // },

  {
    id: 10,

    name: 'CommunicationHistory',

    header: false,

    width: 18,

    height: 18,

    tintcolor: '#fff',
  },
  {
    id: 11,

    name: 'CommunicationHistory',

    header: false,

    width: 18,

    height: 18,

    tintcolor: '#fff',
  },
  {
    id: 12,

    name: 'CommunicationHistory',

    header: false,

    width: 18,

    height: 18,

    tintcolor: '#fff',
  },
  {
    id: 13,

    name: 'CommunicationHistory',

    header: false,

    width: 18,

    height: 18,

    tintcolor: '#fff',
  },
  {
    id: 14,

    name: 'CommunicationHistory',

    header: false,

    width: 18,

    height: 18,

    tintcolor: '#fff',
  },
  {
    id: 15,

    name: 'CommunicationHistory',

    header: false,

    width: 18,

    height: 18,

    tintcolor: '#fff',
  },
];

const SideBarScreen = () => {
  //   const [scroll, setScrool] = useState(false);
  const flag = useAppSelector(state => state.homeReducer.flag);
  const dispatch = useAppDispatch();
  // const scrollViewRef = useRef();
  //   var scroll = true;

  //   EventBus.getInstance().addListener('scrollEnable', async (data: any) => {
  //     console.log(data);
  //   });

  const ItemView = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          EventBus.getInstance().fireEvent(
            'scrollEnable',
            {
              scroll: false,
            },
            () => {
              dispatch(setFlag(!flag));
            },
          );
        }}
        style={{
          flexDirection: 'row',
          width: '90%',
          padding: 20,
          backgroundColor: COLORS.primary,
          //   borderTopLeftRadius: item.header == true ? 15 : 0,
          //   borderTopRightRadius: item.header == true ? 15 : 0,
          //   borderBottomLeftRadius: item.header == true ? 15 : 0,
          //   borderBottomRightRadius: item.header == true ? 15 : 0,
          marginTop: 10,
          alignSelf: 'center',
          justifyContent: 'flex-start',
        }}>
        <Image
          source={ICONS.ACCOUNT_TAB_ICON}
          style={[
            styles.profileImg1,
            {
              width: item.width,
              height: item.height,
              //   color: '#fff',
              tintColor: item.tintcolor,
            },
          ]}
        />
        <Text style={{left: item.header == true ? 40 : 10, color: 'white'}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#fff',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView
        nestedScrollEnabled={true}
        scrollEnabled={false}
        // scrollEnabled={!scroll}
        onScroll={event => {
          if (event) {
            setScrool(true);
          }
          console.log(event);
        }}
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: COLORS.white,
          height: SIZES.height,
          borderTopRightRadius: 10,
          marginTop: 5,
        }}> */}
      <ScrollView scrollEnabled={flag} nestedScrollEnabled={flag}>
        <FlatList
          nestedScrollEnabled={true}
          // scrollEnabled={() => {
          //   scroll;
          // }}
          scrollEnabled={flag}
          data={dummyArray}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    flex: 1,
  },
  listItem: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginTop: 20,
    alignSelf: 'center',
  },
  profileImg1: {
    alignSelf: 'center',
  },
  sidebarDivider: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
});

export default SideBarScreen;
