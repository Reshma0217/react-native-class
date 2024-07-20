import React from 'react';
import { StyleSheet, Text,Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Sample = (props) => {

  const navigation = useNavigation();
console.log("navigation data:",props.route.params.name);
const name = props.route.params.name;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Sample Screen :{name}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home',{msg:'Good to see Sample screen'})}
      />
    </View>
    );
}

const styles = StyleSheet.create({})

export default Sample;
