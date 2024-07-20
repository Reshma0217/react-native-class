import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Sample from '../screens/Sample';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer initialRouteName='Home'>
        <Drawer.Navigator>
            <Drawer.Screen 
            name='Home'
            component={Home}
            />
             <Drawer.Screen 
            name='Sample'
            component={Sample}
            />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default DrawerNavigator;
