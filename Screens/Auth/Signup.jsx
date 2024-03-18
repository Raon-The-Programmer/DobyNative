import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Mailicon from 'react-native-vector-icons/Entypo';
import Usericon from 'react-native-vector-icons/FontAwesome';
import Passwordicon from 'react-native-vector-icons/Fontisto';
import Registericon from 'react-native-vector-icons/AntDesign';
import Valid from 'react-native-vector-icons/Feather';
import Notvalid from 'react-native-vector-icons/AntDesign';
import Eyeclose from 'react-native-vector-icons/Feather';
import Eyeopen from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { signinSuccess } from '../../Redux/user/userslice';
import GoogleAuth from '../../Components/GoogleAuth';
import Googleicon from 'react-native-vector-icons/AntDesign'

const Signup = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [username, setusername] = useState('');
    const [verifyname, setverifyname] = useState(false);
    const [email, setemail] = useState('');
    const [verifyemail, setverifyemail] = useState(false);
    const [password, setpassword] = useState('');
    const [verifypassword, setverifypassword] = useState(false);
    const [eyeOpen, seteyeOpen] = useState(false);
    const [resError, setresError] = useState(false);
    const [errMessage, seterrMessage] = useState('');

    const handleName = (name) => {
        setusername(name);
        setverifyname(name.length > 2);
    };

    const handleEmail = (email) => {
        setemail(email);
        setverifyemail(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email));
    };

    const handlePassword = (password) => {
        setpassword(password);
        setverifypassword(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password));
    };

    const handleSignup = async () => {
        const data = {
            name: username,
            email,
            password
        };
        try {
            const res = await axios.post('http://192.168.10.167:3000/user/register', data);
            setresError(false);
            seterrMessage('');
            if (res.status == 201) {
                dispatch(signinSuccess(res.data.rest))
                navigation.navigate('Content')


            }
            console.log(res.data)

        } catch (err) {
            if (err.response.status === 409) {
                setresError(true);
                seterrMessage(err.response.data.message);
            } else {
                seterrMessage(err.response.data);
                console.log(err)
            }
        }
    };

    return (
        <ScrollView keyboardShouldPersistTaps="true" showsVerticalScrollIndicator={false}>
            <View className="flex-1 mt-[110px] bg-slate-100 justify-center">
                <View className="items-center">
                    <Text className="font-medium text-3xl">Sign Up</Text>
                </View>
                <View className="bg-white flex-row rounded-full p-4 mx-6 mt-5 shadow-xl shadow-slate-500">
                    <Usericon name="user" size={28} color="grey" />
                    <TextInput
                        onChange={(e) => handleName(e.nativeEvent.text)}
                        className="flex-1 mx-4"
                        placeholder="Username"
                    />
                    {username.length > 0 &&
                        (verifyname ? (
                            <Valid name="check-circle" color="green" size={25} />
                        ) : (
                            <Notvalid name="frowno" color="red" size={25} />
                        ))}
                </View>
                {!username.length ? null : verifyname ? null : (
                    <Text className="font-extralight text-[10px] text-red-600 ml-10 mt-1">
                        Name should be at least 3 characters
                    </Text>
                )}
                <View className="bg-white flex-row rounded-full p-4 mx-6 mt-5 shadow-xl shadow-slate-500">
                    <Mailicon name="mail" size={28} color="grey" />
                    <TextInput
                        onChange={(e) => handleEmail(e.nativeEvent.text)}
                        className="flex-1 mx-4"
                        placeholder="Email"
                    />
                    {!email.length ? null : verifyemail ? (
                        <Valid name="check-circle" color="green" size={25} />
                    ) : (
                        <Notvalid name="frowno" color="red" size={25} />
                    )}
                </View>
                {resError ? (
                    <Text className="font-extralight text-[10px] text-red-600 ml-10 mt-1">{errMessage}</Text>
                ) : null}
                <View className="bg-white flex-row rounded-full p-4 mx-6 mt-6 shadow-xl shadow-slate-500">
                    <Passwordicon name="locked" size={25} color="grey" />
                    <TextInput
                        onChange={(e) => handlePassword(e.nativeEvent.text)}
                        className="flex-1 mx-4"
                        placeholder="Password"
                        secureTextEntry={!eyeOpen}
                    />
                    <TouchableOpacity onPress={() => seteyeOpen(!eyeOpen)}>
                        {!password.length ? null : eyeOpen ? (
                            <Eyeopen name="eye" size={25} />
                        ) : (
                            <Eyeclose name="eye-off" size={25} />
                        )}
                    </TouchableOpacity>
                </View>
                {!verifypassword && password.length < 6 && password ? (
                    <Text className="font-extralight text-[10px] text-red-600 ml-10 mt-1">
                        Password must have at least 6 characters
                    </Text>
                ) : password.length > 16 ? (
                    <Text className="font-extralight text-[10px] text-red-600 ml-10 mt-1">
                        Password must be less than 16 characters
                    </Text>
                ) : null}
                <TouchableOpacity onPress={handleSignup} activeOpacity={0.5}>
                    <View className="items-center mt-10">
                        <View className="bg-lime-300 flex-row justify-center items-center py-3 px-6 shadow-xl shadow-slate-500 rounded-full">
                            <Text className="text-base font-medium mr-1">Sign Up</Text>
                            <Registericon name="caretright" size={25} />
                        </View>
                    </View>
                </TouchableOpacity>
                <Text className="text-center my-6 font-light">----------or register with----------</Text>
                {/* <View>
               <GoogleAuth/></View> */}
                <TouchableOpacity activeOpacity={0.5}><View className='flex-row justify-center items-center bg-black shadow-xl shadow-black rounded-full mx-10 p-3'>
                    <Googleicon name='google' size={20} color={'white'} />
                    <Text className='text-white font-semibold ml-3 text-base '>Google</Text>
                </View></TouchableOpacity>
                <View className="items-center">
                    <Text className="font-light mt-4">
                        Already have an account?{' '}
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Login')}>
                            <Text className="font-medium">Login</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
                <View className="px-10 mt-5">
                    <Text className="text-center text-[10px] font-light">
                        By signing up, you are agreeing to our{' '}
                        <Text className="text-red-600">Terms of Services</Text> and{' '}
                        <Text className="text-red-600">Privacy Policy</Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Signup;
