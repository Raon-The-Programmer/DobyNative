import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Content/Home';
import Profile from '../Screens/Content/Profile';
import Laundry from '../Screens/Content/Laundry';
import { createStackNavigator } from '@react-navigation/stack';
import ShopDetails from '../Screens/Content/ShopDetails';
import Cart from '../Screens/Content/Cart';
import Homeicon from 'react-native-vector-icons/FontAwesome'
import Laundryicon from 'react-native-vector-icons/MaterialCommunityIcons'
import Carticon from 'react-native-vector-icons/FontAwesome'
import Profileicon from 'react-native-vector-icons/FontAwesome5'

const Homescreen = ()=>{
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
       <Stack.Screen name='Homedet' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='shopDetails' options={{headerShown:false}} component={ShopDetails} />
      
    </Stack.Navigator>
  )
}

const Content = () => {
    
const Bottom = createBottomTabNavigator();

  return (
    <Bottom.Navigator screenOptions={({
      headerShown:false,
      //Tab bar styles can be added here
      tabBarStyle:{borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'black',height:60,paddingTop:10},
      tabBarShowLabel:false
      
  })} initialRouteName='Home'>
    <Bottom.Screen name="Home" options={({route})=>({ tabBarIcon: ({ focused }) => {
          let color;
              color = focused? 'white': '#cbd5e1';
              return <Homeicon name='home' style={focused ?{backgroundColor:'white',padding:8,borderRadius:50,color:'black'}:{backgroundColor:'black',color:'white'}} size={30}/>}})} component={Homescreen} />
    <Bottom.Screen options={({route})=>({ tabBarIcon: ({ focused }) => {
          let color;
              color = focused? 'white': '#cbd5e1';
              return <Laundryicon name='washing-machine' style={focused ?{backgroundColor:'white',padding:8,borderRadius:50,color:'black'}:{backgroundColor:'black',color:'white'}} size={30}/>}})}  name='Laundry' component={Laundry}/>
    <Bottom.Screen options={({route})=>({ tabBarIcon: ({ focused }) => {
          let color;
              color = focused? 'white': '#cbd5e1';
              return <Carticon name='shopping-cart' style={focused ?{backgroundColor:'white',padding:8,borderRadius:50,color:'black'}:{backgroundColor:'black',color:'white'}} size={30}/>}})}  name='Cart' component={Cart} />
    <Bottom.Screen options={({route})=>({ tabBarIcon: ({ focused }) => {
          let color;
              color = focused ? 'white': '#cbd5e1';
              return <Profileicon name='user-alt' size={25} style={focused ?{backgroundColor:'white',padding:8,borderRadius:50,color:'black'}:{backgroundColor:'black',color:'white'}}/>},headerShown:false})} name="Profile"  component={Profile} />
  </Bottom.Navigator>
  )
}

export default Content