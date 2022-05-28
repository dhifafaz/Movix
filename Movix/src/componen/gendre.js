import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { gendreList } from "../data/dataGendre";
import { useSelector, useDispatch } from 'react-redux';
import { setGendreFilm } from "../redux/action";



const Gendre = () => {
    const dispatch = useDispatch()

    const [gendrePic, setGenrePic] = useState('All')

    const chengeGendre = (item) => {
        dispatch(setGendreFilm(item))
        console.log(item)
        setGenrePic(item)
    }

    return (
        <View>
            <FlatList
                horizontal={true}
                data={gendreList}
                renderItem={({ item, index, separators }) => {
                    //filteredDataSource
                    return (
                        <View>
                            <TouchableOpacity style={gendrePic == item.gendre ? styles.touch1 : styles.touch} onPress={() => chengeGendre(item.gendre)}>
                                <Text style={styles.text}>{item.gendre}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.gendre}

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
    }

})


export default Gendre;