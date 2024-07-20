import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Font } from './themes/Fonts';
const Home = (props) => {
  const [message,setMessage]=useState('Welcome to Home Screen..!');
  const navigation = useNavigation();
 // console.log("navigation data:",props);


useEffect(()=>{
const params= props.route.params;
  if(params ){
    console.log("navigation data1:",props.route.params.msg);

    setMessage(props.route.params.msg)
  }else{
    setMessage(message)
  }
},[]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontFamily:Font.Roboto_Black}}>{message}</Text>
      <Button
        title="Go to Sample"
        onPress={() => {
          navigation.navigate('Sample',{name:'priya'})
        }}
      />
    </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
