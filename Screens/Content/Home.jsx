import { View, Text, ScrollView, Image, TextInput, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppLogo from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import Notification from 'react-native-vector-icons/Ionicons'
import Search from 'react-native-vector-icons/Feather'
import Star from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { addShop } from '../../Redux/user/laundryShop'
import shopData from './ShopData'


const Home = () => {
  const { currentUser } = useSelector(state => state.user)
  const Photo = currentUser.photo
  const [location, setLocation] = useState('Nungambakkam')
  const Shops = shopData[location]
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const Suggestions = [
    {
      id: 1,
      title: 'Wash and Fold',
      image: require('../../assets/images/WashFolds.jpg')
    },
    {
      id: 2,
      title: "Ironing",
      image: require('../../assets/images/IronFolds.jpg')
    },
    {
      id: 3,
      title: 'Dying',
      image: require('../../assets/images/Dying.jpeg')
    },
    {
      id: 4,
      title: "Agitation",
      image: require('../../assets/images/Agitation.jpeg')
    },
  ]
  const handleNavigation = ({item})=>{
      navigation.navigate('shopDetails')
      dispatch(addShop(item))
      
  }

  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className='flex-1 bg-slate-100'>
        <View className='mt-10 flex-row justify-center'>
          <AppLogo name='logo-bitbucket' size={30} />
          {/* <Image className='w-[80px] h-10' source={require('../../assets/images/Logo.png')}/> */}
          <Text className='text-xl ml-2'>ᵈᵒᵇᵇʸ</Text>
        </View>
          <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('Profile')}>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row'>
            <View>
              <Image source={{ uri: Photo }} alt='Profile' className='w-12 h-12 rounded-full mx-2' />
            </View>
            <View>
              <Text className='font-light'>Welcome,</Text>
              <Text className='font-semibold text-base'>{currentUser.name}</Text>
            </View>
          </View>
          <View className='mr-3'>
            <Notification name='notifications-outline' size={30} />
          </View>
        </View></TouchableOpacity>
        <View className='bg-white flex-row mx-6 rounded-2xl p-3 mt-5 shadow-xl shadow-slate-500'>
          <Search name='search' size={30} />
          <TextInput className='flex-1 mr-2 ml-3' placeholder='Search Laundry' />
        </View>
        <View className='mt-3 ml-2'>
          <Text className='ml-2 font-normal text-base'>Suggestions</Text>
          <View className='mt-2 h-[150px]'>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={Suggestions} keyExtractor={item => item.id} renderItem={({ item }) => (<Pressable onPress={()=>navigation.navigate('Laundry')} className='mx-2 w-[150px] h-[130px] items-center bg-slate-200 p-2 pt-3 rounded-lg mt-2 shadow-lg shadow-slate-500'><Image className='w-[100px] h-[80px] rounded-lg ' source={item.image} /><Text className='text-center font-light mt-1 text-[12px]'>{item.title}</Text></Pressable>)} />
          </View>
        </View>
        <View className='mt-3 ml-2'>
          <Text className='ml-2 font-normal text-base'>Laundry near you</Text>
          <View className='flex-row ml-2 mt-2'>
            <View className='bg-black mr-3 p-1 px-3 rounded-xl'>
              <Text className='text-white'>Popular</Text>
            </View>
            <View className='bg-lime-300 mr-3 p-1 px-3 rounded-xl'>
              <Text>4.0 +</Text>
            </View>
            <View className='bg-black p-1 px-3 rounded-xl '>
              <Text className='text-white'>Drop and Pickup</Text>
            </View>
          </View>
          <View className='mt-3 h-[320px]'>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={Shops} renderItem={({ item }) => (<TouchableOpacity activeOpacity={0.8} onPress={()=>handleNavigation({item})} className='mx-2 w-[250px] h-[300px]  bg-slate-200 items-center rounded-lg pt-3 shadow-lg shadow-slate-500'><View><Image className='w-[220px] h-[150px] rounded-lg' source={item.image} /></View><View className='w-[220px] flex-row justify-between items-center mt-2'><View><Text>{item.name}</Text><Text className='font-light text-[10px] text-left'>{item.address}</Text></View></View><View className='w-[220px] h-[60px] flex-row items-center justify-between'><View><Text>From</Text><Text className='font-semibold text-base'>₹50</Text></View><View className='flex-row items-center w-[45px] justify-between bg-rose-950 rounded-md p-1'><Star name='star' size={15} color={'white'}/><Text className='text-white font-light text-[10px]'>4.2</Text></View></View></TouchableOpacity>)} />
          </View>
        </View>
        <View className='mt-3 ml-2'>
        <Text className='ml-2 font-normal text-base'>Top Rated</Text>
        <View className='w-full h-[300px] items-center' >
          <Image className='w-[350px]' source={Shops[0].image}/>
        </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home