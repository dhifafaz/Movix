import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  Pressable,
} from 'react-native';

import rangkingPageStyles from '../styles/rangkingPageStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiRanking } from "../redux/action";

const RankingPage = () => {

  const dispatch = useDispatch()

  const { dataRankingFilm, linkFoto } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchApiRanking())

  }, []);


  return (
    <SafeAreaView style={rangkingPageStyles.container}>
      <ScrollView >

        <View style={rangkingPageStyles.margin}>
          <Text
            style={[rangkingPageStyles.color, rangkingPageStyles.headerText]}>
            Popular
          </Text>
          <FlatList
            data={dataRankingFilm}
            renderItem={({ item, index, separators }) => {
              //filteredDataSource
              return (
                <Pressable >
                  <View style={rangkingPageStyles.box}>

                    <Image
                      source={{ uri: linkFoto + item.image }}

                      style={rangkingPageStyles.image}></Image>

                    <View style={rangkingPageStyles.textArea}>
                      <Text style={rangkingPageStyles.title} ellipsizeMode='tail' numberOfLines={2}>
                        {item.title}
                      </Text>
                      <View style={rangkingPageStyles.rating}>
                        <Ionicons name="star" style={rangkingPageStyles.Icon} />
                        <Text style={rangkingPageStyles.ratingText}>{item.rating}</Text>
                      </View>
                      <Text style={rangkingPageStyles.genre}>Genre : {item.genre}</Text>
                      <Text style={rangkingPageStyles.durasi}>
                        Durasi : {item.durasi}
                      </Text>
                    </View>
                    <View style={rangkingPageStyles.peringkat}>
                      <Feather name="award" style={rangkingPageStyles.IconTrophy} />
                      <Text style={rangkingPageStyles.peringkatText}>{index + 1}</Text>
                    </View>
                  </View>
                </Pressable>
              )
            }}
            keyExtractor={(item) => item.gendre}
          />
          <View style={{ height: 80 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RankingPage;
