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

import rankingPageStyles from '../style/rankingStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiRanking } from '../redux/action';

const RankingPage = ({ navigation }) => {
  const dispatch = useDispatch();

  const { dataRankingFilm, linkFoto } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchApiRanking());
  }, []);

  return (
    <SafeAreaView style={rankingPageStyles.container}>
      <ScrollView>
        <View style={rankingPageStyles.margin}>
          <Text style={[rankingPageStyles.color, rankingPageStyles.headerText]}>
            Popular
          </Text>
          <FlatList
            data={dataRankingFilm}
            renderItem={({ item, index, separators }) => {
              //filteredDataSource
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate('DetailPage', {
                      title: item.title,
                      rating: item.rating,
                      tahun_terbit: item.tahun_terbit,
                      genre: item.genre,
                      durasi: item.durasi,
                      description: item.description,
                      sutradara: item.sutradara,
                      image: linkFoto + item.image,
                    })
                  }}>
                  <View style={rankingPageStyles.box}>
                    <Image
                      source={{ uri: linkFoto + item.image }}
                      style={rankingPageStyles.image}></Image>

                    <View style={rankingPageStyles.textArea}>
                      <Text
                        style={rankingPageStyles.title}
                        ellipsizeMode="tail"
                        numberOfLines={2}>
                        {item.title}
                      </Text>
                      <View style={rankingPageStyles.rating}>
                        <Ionicons name="star" style={rankingPageStyles.Icon} />
                        <Text style={rankingPageStyles.ratingText}>
                          {item.rating}
                        </Text>
                      </View>
                      <Text style={rankingPageStyles.genre}>
                        Genre : {item.genre}
                      </Text>
                      <Text style={rankingPageStyles.durasi}>
                        Durasi : {item.durasi}
                      </Text>
                    </View>
                    <View style={rankingPageStyles.peringkat}>
                      <Feather
                        name="award"
                        style={rankingPageStyles.IconTrophy}
                      />
                      <Text style={rankingPageStyles.peringkatText}>
                        {index + 1}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
            keyExtractor={item => item.gendre}
          />
          <View style={{ height: 80 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RankingPage;
