import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import HomePage from '../screen/homePage';
import RankingPage from '../screen/rankingPage';
import ProfilPage from '../screen/profilPage';



const Tab = createBottomTabNavigator();

const MainContainer = ({ navigation }) => {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarActiveTintColor: '#0054FE',
                tabBarInactiveTintColor: '#4A6495',
                headerShown: false,
                tabBarStyle: {
                    height: 70, backgroundColor: '#1F2046', position: 'absolute',
                    //borderTopRightRadius: 30,
                    //borderTopLeftRadius: 30,
                },
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                name="Movix"
                component={HomePage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="filmstrip-box" color={color} size={35} />
                    ),
                }} />
            <Tab.Screen
                name="Ranking"
                component={RankingPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="star" color={color} size={35} />
                    ),
                }} />
            <Tab.Screen
                name="Profil"
                component={ProfilPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={35} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default MainContainer;