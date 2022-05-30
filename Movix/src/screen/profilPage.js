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
  Pressable,
  Linking,
} from 'react-native';
import styles from '../style/profilSyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfilPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.picture} source={require('../image/singa.jpg')} />
        <Text style={styles.nameText}> FADI AUMAY</Text>
      </View>
      <Pressable
        style={styles.thirdTab}
        // onPress={Linking.openURL('https://google.com')}
      >
        <MaterialCommunityIcons
          name="instagram"
          size={32}
          style={{color: 'white', marginTop: 8, marginLeft: 10}}
        />
        <Text style={styles.subJud}> afarras27 </Text>
      </Pressable>
      <Pressable
        style={styles.thirdTab}
        // onPress={Linking.openURL('https://google.com')}
      >
        <MaterialCommunityIcons
          name="instagram"
          size={32}
          style={{color: 'white', marginTop: 8, marginLeft: 10}}
        />
        <Text style={styles.subJud}> dhifafaz </Text>
      </Pressable>
      <Pressable
        style={styles.thirdTab}
        // onPress={Linking.openURL('https://google.com')}
      >
        <MaterialCommunityIcons
          name="instagram"
          size={32}
          style={{color: 'white', marginTop: 8, marginLeft: 10}}
        />
        <Text style={styles.subJud}> mayang.h.a </Text>
      </Pressable>
      <Pressable
        style={styles.thirdTab}
        // onPress={Linking.openURL('https://google.com')}
      >
        <MaterialCommunityIcons
          name="instagram"
          size={32}
          style={{color: 'white', marginTop: 8, marginLeft: 10}}
        />
        <Text style={styles.subJud}> auliarahmanz </Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default ProfilPage;
