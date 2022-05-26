import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import styles from "../style/homeStyle"

const HomePage = () => {

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView>
                <View style={styles.margin}>
                    <Text style={styles.textTitle}>Movix</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}


export default HomePage;