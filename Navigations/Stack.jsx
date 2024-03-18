import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Shopdetails from '../Screens/Content/Shopdetails'

const Stack = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='Shopedetails' component={Shopdetails}/>
    </Stack.Navigator>
  )
}

export default Stack