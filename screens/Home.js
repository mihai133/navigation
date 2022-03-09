import React from 'react';
import {View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';



const HomeScreen = ({navigation}) => {
  return (
      <View>
        <Text>Home Screen</Text>
        <Button title='Go to Details' onPress={()=> navigation.navigate('Details')}/> 
        
      </View>
  )
}

export default HomeScreen
