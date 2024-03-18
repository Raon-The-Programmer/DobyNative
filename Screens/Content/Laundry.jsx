import { View, Text, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Backicon from 'react-native-vector-icons/MaterialIcons'
import { SelectList } from 'react-native-dropdown-select-list'
import Downarrow from 'react-native-vector-icons/AntDesign'
import shopData from './ShopData'
import { useNavigation } from '@react-navigation/native'
import { addShop } from '../../Redux/user/laundryShop'

const Laundry = () => {
  const { shopDetails } = useSelector(state => state.shop)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [location,setLocation] = useState('All')
  const data = [
    { key: 1, value: 'All' },
    { key: 2, value: 'Tambaram' },
    { key: 3, value: 'Perungudi' },
    { key: 4, value: 'Nungambakkam' },
    { key: 5, value: 'Taramani' },
    { key: 6, value: 'Adayar' }
  ]
  const handleCategorySelect = (location)=>{
      setLocation(location)
  }
  const handleNavigation = (shop) => {
    navigation.navigate('shopDetails');
    dispatch(addShop(shop)); // Dispatch action to add selected shop details
  };
  const displayLocation = location === 'All' ? shopData : shopData[location]
  return (
    <View className='flex-1 bg-slate-100'>
      <View className='mt-9 flex-row items-center justify-center'>
        <View className='ml-3 absolute left-0'>
          <Backicon onPress={() => navigation.goBack()} name='arrow-back-ios' size={25} />
        </View>
        <View className=' flex-1 items-center'>
          <Text className='font-light text-lg'>Laundry</Text>
        </View>
      </View>
      <View className='absolute right-4 top-[95px] z-10'>
        <TouchableOpacity activeOpacity={0.7}>
          <SelectList
            setSelected={(val) => handleCategorySelect(val)}
            data={data}
            placeholder='Location'
            save="value"
            dropdownStyles={{ width: 186 ,backgroundColor:'white',borderColor:'white'}}
            inputStyles={{ width: 120, backgroundColor: 'white', fontWeight: '300' }}
            arrowicon={<Downarrow name='down' size={20} />}
            boxStyles={{ alignItems: 'center', backgroundColor: 'white', borderColor: 'white', borderRadius: 20, height: 55, justifyContent: 'center', alignContent: 'center' }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView className="flex-1 bg-slate-100 mt-5">
        {location === 'All' ? Object.keys(displayLocation).map((locationName) => (
          <View key={locationName} className="mx-2">
            {Object.values(displayLocation[locationName]).map((shop, index) => (
              <TouchableWithoutFeedback key={index} onPress={() => handleNavigation(shop)}>
                <View className='bg-slate-200 mb-5 rounded-xl shadow-xl shadow-slate-500 p-2'>
                  <Image source={shop.image} className="w-full rounded-xl" />
                  <View className="flex">
                    <Text className="font-bold mb-1">{shop.name}</Text>
                    <Text className='font-light mb-2'>{shop.address}</Text>
                    <Text className='font-light text-xs'>{shop.description}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        )) : (
          Object.keys(displayLocation).map((shopName) => (
            <TouchableWithoutFeedback key={shopName} onPress={() => handleNavigation(displayLocation[shopName])}>
              <View className='bg-slate-200 mx-2 mb-5 rounded-xl shadow-xl shadow-slate-500 p-2'>
                <Image source={displayLocation[shopName].image} className="w-full rounded-xl"  />
                <View className="flex">
                  <Text className="font-bold mb-1">{displayLocation[shopName].name}</Text>
                  <Text className='font-light mb-2'>{displayLocation[shopName].address}</Text>
                  <Text className='font-light text-xs'>{displayLocation[shopName].description}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>

    </View>
  )
}

export default Laundry