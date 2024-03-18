import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Auth/Login';
import Signup from '../Screens/Auth/Signup';
import Content from './Content';


const Auth = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator   screenOptions={{headerShown:false}}>
        <Stack.Screen name='Register' component={Signup}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Content' component={Content}/>
    </Stack.Navigator>
  )
}

export default Auth