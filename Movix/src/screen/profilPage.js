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

const ProfilPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.picture}
          source={require('../image/singa.jpg')}
        />
        <Text style={styles.nameText}> FADI AUMAY</Text>
      </View>
      <View style={styles.thirdTab}>
        <MaterialCommunityIcons
          name="instagram"
          size={32}
          style={{ color: 'white', marginTop: 8, marginLeft: 10 }}
        />
        <Text style={styles.subJud}> afarras27 </Text>
      </View>
      <View style={styles.thirdTab}>
        <MaterialCommunityIcons
          name="instagram"
          size={32}
          style={{ color: 'white', marginTop: 8, marginLeft: 10 }}
        />
        <Text style={styles.subJud}> dhifafaz </Text>
      </View>
      <View style={styles.thirdTab}>
        <MaterialCommunityIcons
          name="instagram"
          size={32}
          style={{ color: 'white', marginTop: 8, marginLeft: 10 }}
        />
        <Text style={styles.subJud}> mayang.h.a </Text>
      </View>
      <View style={styles.thirdTab}>
        <MaterialCommunityIcons
          name="instagram"
          size={32}
          style={{ color: 'white', marginTop: 8, marginLeft: 10 }}
        />
        <Text style={styles.subJud}> auliarahmanz </Text>
      </View>

    </SafeAreaView>
  );
};
export default ProfilPage;
