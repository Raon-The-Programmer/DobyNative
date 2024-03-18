import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Content from './Navigations/Content'
import Auth from './Navigations/Auth'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Toast ,{ BaseToast, ErrorToast } from 'react-native-toast-message';


const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#BEF264',borderRadius:50 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
      
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  )}
const InApp = () => {
  const {loggedIn} = useSelector(state=>state.user)
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'}/>
    <NavigationContainer>
{loggedIn ? <Content/> : <Auth/>}
<Toast config={toastConfig} />
    </NavigationContainer></SafeAreaProvider>
  )
}

export default InApp