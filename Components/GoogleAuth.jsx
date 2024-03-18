import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Googleicon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import axios from 'axios'
import { app } from '../firebase'
import { signinSuccess } from '../Redux/user/userslice';


const GoogleAuth = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const handleAuth = async()=>{
        console.log("One")
        try{
            console.log("two")
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth,provider)
            const data = {
                name:result.user.displayName,
                email:result.user.email,
                photo:result.user.photoURL
            }
            const res = await axios.post('http://localhost:3000/user/auth/google',data)
            console.log(res.data)
            dispatch(signinSuccess(res.data))
            navigation.navigate('Content')
            
        }catch(err){
            console.log("Error while Oauth: ",err)
        }
            }
  return (
    <TouchableOpacity onPress={handleAuth} activeOpacity={0.5}><View className='flex-row justify-center items-center bg-black shadow-xl shadow-black rounded-full mx-10 p-3'>
    <Googleicon name='google' size={20} color={'white'}/>
     <Text className='text-white font-semibold ml-3 text-base '>Google</Text>
    </View></TouchableOpacity>
  )
}

export default GoogleAuth