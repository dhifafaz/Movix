import React, { useState, useEffect } from "react";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    Pressable,
} from 'react-native';
import { ImageListTemporary } from "../data/imageFilm";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const ComingSoon = () => {

    const [gendrePic, setGenrePic] = useState('All')

    const chengeGendre = (item) => {
        setGenrePic(item)
    }

    return (
        <View>
            <FlatList
                horizontal={true}
                data={ImageListTemporary}
                renderItem={({ item, index, separators }) => {
                    //filteredDataSource
                    return (
                        <Pressable>
                            <Image
                                source={item.gendre}
                                style={{ height: 150, width: 100, borderRadius: 10, marginRight: 10 }}
                            />
                            <View style={styles.view10} />
                            <Text style={styles.text}>{item.judul}</Text>
                            <View style={styles.row}>
                                <MaterialCommunityIcons name="star" color={'#F8B911'} size={15} />
                                <Text style={styles.textReting}>{item.bintang}</Text>
                            </View>
                        </Pressable>
                    )
                }}
                keyExtractor={(item) => item.gendre}

            />
        </View>
    )

}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    view10: {
        height: 10,
    },
    view30: {
        height: 30,
    },
    view40: {
        height: 40,
    },
    touch: {
        width: 100,
        height: 30,
        backgroundColor: '#4A6495',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    touch1: {
        width: 100,
        height: 30,
        backgroundColor: '#0054FE',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        fontFamily: 'Ubuntu-Medium',
        color: '#FFFFFF',
    },
    textReting: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Medium',
        color: '#FFFFFF',
        marginLeft: 5,
    }

})


export default ComingSoon;