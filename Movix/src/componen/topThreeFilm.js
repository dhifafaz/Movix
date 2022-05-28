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

const TopThreeFilm = () => {

    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;


    return (
        <View>
            {/* <FlatList
                horizontal={true}
                data={gendreList}
                renderItem={({ item, index, separators }) => {
                    //filteredDataSource
                    return (
                        <View>
                            <Pressable>
                                
                            </Pressable>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.gendre}

            /> */}
            <Carousel

                data={ImageListTemporary}
                renderItem={({ item, index, separators }) => {
                    //filteredDataSource
                    return (
                        <View>
                            <Pressable>
                                <Image
                                    source={item.gendre}
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