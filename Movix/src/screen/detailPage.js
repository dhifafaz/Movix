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
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const DetailPage = () => {

  const navigation = useNavigation();

  const route = useRoute().params

  return (
    <SafeAreaView style={{ backgroundColor: '#14162F', flex: 1 }}>
      <ScrollView>
        <View style={detailPageStyle.container}>
          <View style={detailPageStyle.header}>
            <View style={detailPageStyle.leftContent}>
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Ionicons
                  name="ios-chevron-back-circle-sharp"
                  style={detailPageStyle.Icon}

                />
              </Pressable>
              <View style={detailPageStyle.frame}>
                <Feather name="clock" style={detailPageStyle.clockIcon} />
                <Text style={detailPageStyle.kategori}>{route.durasi}</Text>
              </View>
              <View style={detailPageStyle.frame}>
                <FontAwesome
                  name="calendar"
                  style={detailPageStyle.calendarIcon}
                />
                <Text style={detailPageStyle.kategori}>{route.tahun_terbit}</Text>
              </View>
              <View style={detailPageStyle.frame}>
                <FontAwesome name="star" style={detailPageStyle.starIcon} />
                <Text style={detailPageStyle.kategori}>{route.rating}</Text>
              </View>
            </View>
            <View style={detailPageStyle.rightImage}>
              {/* <View style={detailPageStyle.imageFrame}></View> */}
              <Image
                source={{ uri: route.image }}
                style={detailPageStyle.imageFrame}
              />
            </View>
          </View>
          <View style={detailPageStyle.movDetail}>
            <View style={detailPageStyle.play}>
              <Text style={detailPageStyle.title}>{route.title}</Text>
              <Pressable
                style={detailPageStyle.playButton}
                onpress={() => {
                  console.log('play');
                }}>
                <Ionicons name="md-play" style={detailPageStyle.playIcon} />
              </Pressable>
            </View>
            <View style={{ top: '-15%' }}>
              <Text style={detailPageStyle.sutradara}> {route.sutradara}</Text>
              <View style={detailPageStyle.kategoriFrame}>
                <Text style={detailPageStyle.kategori1}>{route.genre}</Text>
              </View>
              <View style={detailPageStyle.sinopsisArea}>
                <Text style={detailPageStyle.sinopsis}>
                  {route.description}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailPage;
