import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Sample from '../screens/Sample';

const BottomTab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <NavigationContainer initialRouteName='Home'>
        <BottomTab.Navigator>
            <BottomTab.Screen
            name='Home'
            component={Home}
            />
             <BottomTab.Screen
            name='Sample'
            component={Sample}
            />
        </BottomTab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default TabNavigator;
