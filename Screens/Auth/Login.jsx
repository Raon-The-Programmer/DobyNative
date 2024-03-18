import { View, Text, TextInput,ScrollView } from 'react-native'
import React, { useState } from 'react'
import Mailicon from 'react-native-vector-icons/Entypo'
import Passwordicon from 'react-native-vector-icons/Fontisto'
import Loginicon from 'react-native-vector-icons/MaterialIcons'
import Googleicon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Valid from 'react-native-vector-icons/Feather'
import Notvalid from 'react-native-vector-icons/AntDesign'
import Eyeclose from 'react-native-vector-icons/Feather'
import Eyeopen from 'react-native-vector-icons/Feather'
import axios from 'axios'
import { useDispatch} from 'react-redux'
import { signinSuccess } from '../../Redux/user/userslice'

const Login = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
    const [email,setemail] = useState('')
    const [verifyemail,setverifyemail] = useState(false)
    const [password,setpassword] = useState('')
    const [verifypassword,setverifypassword] = useState(false)
    const [eyeOpen,seteyeOpen] = useState(false)
    const [resError, setresError] = useState(false);
    const [errMessage, seterrMessage] = useState('');

    const handleEmail=(e)=>{
      const emailCont = e.nativeEvent.text
      setemail(emailCont)
      setverifyemail(false)
      if(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)){
      setverifyemail(true)    
      }
     }
     const handlePassword =(e)=>{
      const passCont = e.nativeEvent.text
      setpassword(passCont)
      setverifypassword(false)
      if(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
        setverifypassword(true)
      }
     }
     const handleLogin = async()=>{
      const data = {
        email,
        password
      }
      try{
        console.log("Loin")
      const res = await axios.post('http://192.168.10.167:3000/user/login',data)
      setresError(false);
      seterrMessage('');
      if(res.status==200){
        console.log(res.data)
        dispatch(signinSuccess(res.data))
        navigation.navigate('Content')
        }
      }
     
      catch(err){
        if (err.response.status === 404 || err.response.status === 401) {
          setresError(true);
          seterrMessage(err.response.data.message);
      } else {
          seterrMessage('An unexpected error occurred');
      }
      }

     }
  return (
    <ScrollView keyboardShouldPersistTaps='true'  showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}} >
    <View className='flex-1 bg-slate-100 justify-center'>
    <View className='items-center'><Text className='text-xl font-bold'>DOBBY</Text></View>
 <View className='items-center' >
    <Text className='font-medium text-3xl'>Login</Text>
 </View>
 <View className='bg-white flex-row rounded-full p-4 mx-6 mt-5 shadow-xl shadow-slate-500'>
 <Mailicon name='mail' size={28} color={'grey'} />
 <TextInput onChange={(e)=>handleEmail(e)} className='flex-1 mx-4' placeholder='Email'/>
 {!email.length ? null : verifyemail ? <Valid name='check-circle' color={'green'} size={25}/>:<Notvalid name='frowno' color={'red'} size={25}/>}
 </View>
 <View className='bg-white flex-row rounded-full p-4 mx-6 mt-6 shadow-xl shadow-slate-500'>
 <Passwordicon name='locked' size={25} color={'grey'} />
 <TextInput onChange={(e)=>handlePassword(e)} className='flex-1 mx-4' placeholder='Password' secureTextEntry ={!eyeOpen}/>
 <TouchableOpacity onPress={()=>seteyeOpen(!eyeOpen)}>
    {!password.length ? null : eyeOpen ? <Eyeopen name='eye' size={25} />:<Eyeclose name='eye-off' size={25} />}
 </TouchableOpacity>
 </View>
 {
  !verifypassword && password.length < 6 && password ? (
    <Text className='font-extralight text-[10px] text-red-600 ml-10 mt-1'>Password must have at least 6 characters</Text>
  ) : password.length > 16 ? (
    <Text className='font-extralight text-[10px] text-red-600 ml-10 mt-1'>Password must be less than 16 characters</Text>
  ) : null
}
{resError ? (<Text className="font-extralight text-[10px] text-red-600 ml-10 mt-1">{errMessage}</Text>) : null}
 <View className='items-end mr-10 mt-3'>
  <TouchableOpacity activeOpacity={0.5}>
 <Text className='font-light'>Forgot your Password?</Text></TouchableOpacity>
 </View>
<TouchableOpacity onPress={handleLogin} activeOpacity={0.5}><View className='items-center mt-4'>
 <View className='bg-lime-300 flex-row justify-center items-center py-3 px-6 shadow-xl shadow-slate-500 rounded-full'>
  <Text className='text-base font-medium '>Login</Text>
  <Loginicon name='login' size={25}/>
 </View></View></TouchableOpacity>
 <Text className='text-center my-6 font-light'>----------or login with----------</Text>
 <TouchableOpacity activeOpacity={0.5}><View className='flex-row justify-center items-center bg-black shadow-xl shadow-black rounded-full mx-10 p-3'>
 <Googleicon name='google' size={20} color={'white'}/>
  <Text className='text-white font-semibold ml-3 text-base '>Google</Text>
 </View></TouchableOpacity>
 <View className='items-center'>
  <Text className='font-light mt-4'>Dont have an account? <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Register')}><Text className='font-medium'>Signup</Text></TouchableOpacity></Text>
 </View>
</View></ScrollView>
  )
}

export default Login