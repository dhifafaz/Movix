import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    Pressable,
    Dimensions,
} from 'react-native';
import Carousel, { Pagination } from "react-native-snap-carousel";
import { ImageListTemporary } from "../data/imageFilm";
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiRanking } from "../redux/action";
import { useNavigation } from '@react-navigation/native';

const TopThreeFilm = () => {

    const navigation = useNavigation();

    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    const dispatch = useDispatch()

    const { dataRankingFilm, linkFoto } = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchApiRanking())

    }, []);

    // const topThree = () => {
    //     let temporaryData = []

    //     if (dataRankingFilm != null) {
    //         for (let i = 0; i < 3; i++) {
    //             temporaryData.push(dataRankingFilm[i])
    //         }
    //     }
    //     console.log('Masuk')
    //     console.log(temporaryData)
    //     return temporaryData
    // }


    return (
        <View>

            <Carousel

                data={dataRankingFilm}
                renderItem={({ item, index, separators }) => {
                    //console.log
                    return (
                        <View>
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
                                }}
                            >
                                <Image
                                    source={{ uri: linkFoto + item.image }}
                                    style={{ height: 200, width: 300, borderRadius: 10 }}
                                />
                            </Pressable>
                        </View>
                    )
                }}
                sliderWidth={windowWidth - 40}
                itemWidth={300}
                loop={true}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    view10: {
        height: 10,
    },
    view30: {
        height: 30,
    },
    view40: {
        height: 40,
    },
    // touch: {
    //     width: 100,
    //     height: 30,
    //     backgroundColor: '#4A6495',
    //     borderRadius: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginRight: 10,
    // },
    // touch1: {
    //     width: 100,
    //     height: 30,
    //     backgroundColor: '#0054FE',
    //     borderRadius: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginRight: 10,
    // },
    // text: {
    //     fontSize: 16,
    //     fontFamily: 'Ubuntu-Medium',
    //     color: '#FFFFFF',
    // }

})


export default TopThreeFilm;