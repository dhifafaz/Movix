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

import Ionicons from 'react-native-vector-icons/Ionicons';

import detailPageStyles from '../styles/detailPageStyles';

const ProfilPage = () => {
  return (
    <SafeAreaView>
      <View style={detailPageStyles.container}>
        <View style={detailPageStyles.header}>
          <View style={detailPageStyles.leftContent}>
            <Ionicons
              name="ios-chevron-back-circle-sharp"
              style={detailPageStyles.Icon}
            />
          </View>
          <View style={detailPageStyles.rightImage}>
            <Text>TES</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilPage;
