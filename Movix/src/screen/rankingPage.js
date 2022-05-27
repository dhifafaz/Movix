import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import rangkingPageStyles from '../styles/rangkingPageStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const RankingPage = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Spiderman HomeComing',
      image: 'https://m.media-amazon.com/images/I/91HzykE4bdL._AC_SL1500_.jpg',
      rating: '4.9',
      Genre: 'Horror',
      durasi: '2h30m',
    },
    {
      id: 2,
      title: 'Spiderman HomeComing',
      image: 'https://m.media-amazon.com/images/I/91HzykE4bdL._AC_SL1500_.jpg',
      rating: '4.9',
      Genre: 'Horror',
      durasi: '2h30m',
    },
  ]);

  const showData = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        return (
          <View key={index} style={rangkingPageStyles.box}>
            <View style={rangkingPageStyles.imageFrame}>
              <Image
                source={require('../image/poster.png')}
                style={rangkingPageStyles.image}></Image>
            </View>
            <View style={rangkingPageStyles.textArea}>
              <Text style={rangkingPageStyles.title}>{item.title}</Text>
              <View style={rangkingPageStyles.rating}>
                <Ionicons name="star" style={rangkingPageStyles.Icon} />
                <Text style={rangkingPageStyles.ratingText}>5.0</Text>
              </View>
              <Text style={rangkingPageStyles.genre}>Genre : {item.Genre}</Text>
              <Text style={rangkingPageStyles.durasi}>
                Durasi : {item.durasi}
              </Text>
            </View>
            <View style={rangkingPageStyles.peringkat}>
              <Feather name="award" style={rangkingPageStyles.IconTrophy} />
              <Text style={rangkingPageStyles.peringkatText}>{index + 1}</Text>
            </View>
          </View>
        );
      });
    } else {
      return <Text>No Data</Text>;
    }
  };

  return (
    <SafeAreaView>
      <View style={rangkingPageStyles.container}>
        <View style={rangkingPageStyles.header}>
          <Text
            style={[rangkingPageStyles.color, rangkingPageStyles.headerText]}>
            Popular
          </Text>
        </View>
        <View style={rangkingPageStyles.body}>{showData()}</View>
      </View>
    </SafeAreaView>
  );
};

export default RankingPage;
