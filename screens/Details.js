import React from 'react';
import {View, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';

// function BackButton() {
//   const navigation = useNavigation();

//   return(
//     <Button 
//       title='< Back'
//       onPress={()=>{
//         navigation.goBack()
//       }}
//     />
//   )

// }



const DetailsScreen = () => {
  return (
      <View>
          <Text>Details Screen</Text>
      </View>
  )
}

export default DetailsScreen
