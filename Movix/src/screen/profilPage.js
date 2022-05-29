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
} from 'react-native';
import styles from '../style/profilSyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfilPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.picture}
          source={require('../image/IMG_9926.png')}
        />
        <Text style={styles.nameText}> Bella Anastasia</Text>
      </View>
      <View style={styles.firstTab}>
        <MaterialCommunityIcons
          name="cards-heart"
          size={32}
          style={{color: 'white', marginTop: 8, marginLeft: 10}}
        />
        <Text style={styles.subJud}> Your Favorite </Text>
      </View>
      <View style={styles.secondTab}>
        <MaterialCommunityIcons
          name="pencil-outline"
          size={32}
          style={{color: 'white', marginTop: 8, marginLeft: 10}}
        />
        <Text style={styles.subJud}> Edit Profile </Text>
      </View>
      <View style={styles.thirdTab}>
        <MaterialCommunityIcons
          name="script-text-outline"
          size={32}
          style={{color: 'white', marginTop: 8, marginLeft: 10}}
        />
        <Text style={styles.subJud}> Subcriptions </Text>
      </View>
      <View style={styles.logout}>
        <Text style={styles.logoutText}> Logout</Text>
      </View>
    </SafeAreaView>
  );
};
export default ProfilPage;
