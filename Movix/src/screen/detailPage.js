import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import detailPageStyle from '../style/detailStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const DetailPage = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={detailPageStyle.container}>
        <View style={detailPageStyle.header}>
          <View style={detailPageStyle.leftContent}>
            <Pressable
              onpress={() => {
                navigation.goBack();
              }}>
              <Ionicons
                name="ios-chevron-back-circle-sharp"
                style={detailPageStyle.Icon}
              />
            </Pressable>
            <View style={detailPageStyle.frame}>
              <Feather name="clock" style={detailPageStyle.clockIcon} />
              <Text style={detailPageStyle.kategori}>2h30m</Text>
            </View>
            <View style={detailPageStyle.frame}>
              <FontAwesome
                name="calendar"
                style={detailPageStyle.calendarIcon}
              />
              <Text style={detailPageStyle.kategori}>2019</Text>
            </View>
            <View style={detailPageStyle.frame}>
              <FontAwesome name="star" style={detailPageStyle.starIcon} />
              <Text style={detailPageStyle.kategori}>5.0</Text>
            </View>
          </View>
          <View style={detailPageStyle.rightImage}>
            <View style={detailPageStyle.imageFrame}></View>
            {/* <Image
              source={require('../image/IMG_9926.png')}
              style={{height: 200, width: 120, borderRadius: 10}}
            /> */}
          </View>
        </View>
        <View style={detailPageStyle.movDetail}>
          <View style={detailPageStyle.play}>
            <Text style={detailPageStyle.title}>The Shawshank Redemption</Text>
            <Pressable
              style={detailPageStyle.playButton}
              onpress={() => {
                console.log('play');
              }}>
              <Ionicons name="md-play" style={detailPageStyle.playIcon} />
            </Pressable>
          </View>
          <View style={{top: '-15%'}}>
            <Text style={detailPageStyle.sutradara}>Adalah Gwehj</Text>
            <View style={detailPageStyle.kategoriFrame}>
              <Text style={detailPageStyle.kategori}>Action</Text>
            </View>
            <View style={detailPageStyle.sinopsisArea}>
              <Text style={detailPageStyle.sinopsis}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailPage;
