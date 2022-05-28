import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from '../style/homeStyle';
import Gendre from '../componen/gendre';
import TopThreeFilm from '../componen/topThreeFilm';
import Populer from '../componen/populer';
import {useSelector, useDispatch} from 'react-redux';
import {fetchApiRanking} from '../redux/action';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.color}>
      <ScrollView>
        <View style={styles.margin}>
          <Text style={styles.textTitle}>Movix</Text>
          <View style={styles.view20} />

          <Gendre />

          <View style={styles.view30} />

          <TopThreeFilm />

          <View style={styles.view30} />

          <Text style={styles.textSubTittle}>List Film</Text>
          <View style={styles.view20} />

          <Populer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
