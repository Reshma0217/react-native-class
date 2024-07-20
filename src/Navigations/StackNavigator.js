import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Sample from '../screens/Sample';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer initialRouteName='Home'>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={Home}
          />
          <Stack.Screen
          name="Sample"
          component={Sample}
          />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default StackNavigator;
