import { View, Text, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Signout } from '../../Redux/user/userslice'

const Profile = () => {
    const {currentUser} = useSelector(state=>state.user)

    const dispatch = useDispatch()
    const handleLogout=()=>{
      dispatch(Signout())
    }
  return (
    <View>
      <Text>{currentUser?.name}</Text>
      <TouchableHighlight onPress={handleLogout}>

        <Text>LOGOUT</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Profile