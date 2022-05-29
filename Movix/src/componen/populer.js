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
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiListFilm } from "../redux/action";
import { useNavigation } from '@react-navigation/native';

const Populer = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const { dataListFilm, linkFoto, gendreSelect } = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchApiListFilm())

    }, []);

    return (
        <View>
            <FlatList
                horizontal={true}
                data={dataListFilm}
                renderItem={({ item, index, separators }) => {
                    if (gendreSelect == 'All') {
                        return (
                            <Pressable
                                style={{ width: 120, marginRight: 10 }}
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
                                }}

                            >
                                <Image
                                    source={{ uri: linkFoto + item.image }}
                                    style={{ height: 200, width: 120, borderRadius: 10 }}
                                />
                                <View style={styles.view10} />
                                <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>{item.title}</Text>
                                <View style={styles.row}>
                                    <MaterialCommunityIcons name="star" color={'#F8B911'} size={15} />
                                    <Text style={styles.textReting}>{item.rating}</Text>
                                </View>
                            </Pressable>
                        )
                    } else {
                        if (gendreSelect == item.genre) {
                            return (
                                <Pressable
                                    style={{ width: 120, marginRight: 10 }}
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
                                    }}

                                >
                                    <Image
                                        source={{ uri: linkFoto + item.image }}
                                        style={{ height: 200, width: 120, borderRadius: 10 }}
                                    />
                                    <View style={styles.view10} />
                                    <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>{item.title}</Text>
                                    <View style={styles.row}>
                                        <MaterialCommunityIcons name="star" color={'#F8B911'} size={15} />
                                        <Text style={styles.textReting}>{item.rating}</Text>
                                    </View>
                                </Pressable>
                            )
                        }
                    }

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


export default Populer;