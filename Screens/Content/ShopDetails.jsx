import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Backicon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import Star from 'react-native-vector-icons/FontAwesome'
import Downarrow from 'react-native-vector-icons/AntDesign'
import HowItWorks from '../../Components/HowItWorks'
import { SelectList } from 'react-native-dropdown-select-list'
import Plusicon from 'react-native-vector-icons/FontAwesome'
import { addTocart } from '../../Redux/user/cartPage'
import Toast from 'react-native-toast-message';

const ShopDetails = () => {
    const { shopDetails } = useSelector(state => state.shop)
    const navigation = useNavigation()
    const [showOptions, setshowOptions] = useState(false)
    const [contact, setContact] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const dispatch = useDispatch()
    const [count,setcount] = useState(0)
    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setshowOptions(true)
    }
    
    const data = [
        { key: '1', value: 'Male'},
        { key: '2', value: 'Female' }
    ]
    const handleIncrement=(service) => {  
        const selectedService = selectedCategory === 'Male' ? shopDetails.services.men[service] : shopDetails.services.women[service];
        console.log(selectedService.image)
        // Dispatch action to add the service to the cart
        dispatch(addTocart({
            name: service,
            description: selectedService.description,
            price: selectedService.pricePerDress,
            category: selectedCategory,
            quantity: count ,
            image:selectedService.image
        },shopDetails.name));
        setcount(0);
        Toast.show({
            type: 'success',
            text1: 'Service Added',
            text2: 'View Cart',
            swipeable:true
            
          });
    };

   
    return (
        <View className='flex-1 bg-slate-100'>
                <View className='mt-9 flex-row items-center justify-center'>
                    <View className='ml-3 absolute left-0'>
                        <Backicon onPress={() => navigation.goBack()} name='arrow-back-ios' size={25} />
                    </View>
                    <View className=' flex-1 items-center'>
                        <Text className='font-light text-lg'>Shop Details</Text>
                    </View>
                </View>
                <ScrollView>
                <View className='w-full items-center'>
                    <View className=' items-center mt-4 shadow-xl shadow-slate-500 p-2 rounded-xl bg-slate-200'>
                        <Image className='w-[350px] rounded-xl' source={shopDetails.image} />
                        <View className='w-[350px]'>
                            <View className='flex-row mt-3 justify-between'>
                                <View>
                                    <Text className='text-xl font-extrabold'>{shopDetails.name}</Text>
                                    <Text className='font-light'>{shopDetails.address}</Text>
                                </View>
                                <View className='flex-row items-center w-[49px] h-9 justify-between bg-rose-950 rounded-md p-1'>
                                    <Star name='star' size={15} color={'white'} />
                                    <Text className='text-white font-light text-[10px]'>4.2</Text>
                                </View>
                            </View>
                            <View className='mt-3'><Text className='text-[13px]'>{shopDetails.description}</Text></View>
                            <View className='flex-row justify-between items-center mt-2'>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <View>
                                        <SelectList
                                            setSelected={(val) => handleCategorySelect(val)} 
                                            data={data}
                                            save="value"
                                            dropdownStyles={{width:170}}
                                            inputStyles={{width:120,backgroundColor:'white',fontWeight:'300'}}
                                            arrowicon={<Downarrow name='down' size={20}/>}
                                            boxStyles={{alignItems:'center',backgroundColor:'white',borderColor:'white',borderRadius:20,height:50,justifyContent:'center',alignContent:'center'}}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setContact(true)} activeOpacity={0.7}>
                                    <View>
                                    <View className='bg-lime-300 rounded-2xl shadow-lg p-2 px-3 flex-row items-center shadow-slate-500'>
                                        <Text className='mr-1 font-light'>Contact</Text>
                                        <Downarrow name='down' color={'black'} size={20} />
                                    </View></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View className='mt-2'>
                    <Text className='text-lg font-bold mt-2 ml-2'>Services Provided</Text>
                    <View className='mt-2 items-center'>
                            {showOptions ? (
                                selectedCategory === 'Male' ? (
                                    Object.keys(shopDetails.services.men).map((service, index) => (
                                        <View className='bg-slate-200 p-2 mb-4 rounded-xl flex-row' key={index}>
                                            <View className='flex-row items-center justify-center'>
                                            <Image className='w-[150px] h-[150px] rounded-xl mr-3' source={shopDetails.services.men[service].image}/>
                                            <View>
                                            <Text className='text-base font-semibold'>{service}</Text>
                                            <ScrollView style={{ height: 'auto' }}>
                                            <Text className ='font-light w-[170px] text-xs mb-2'>{shopDetails.services.men[service].description}</Text></ScrollView>
                                            <Text className='font-light text-sm bg-rose-950 w-[110px] text-white text-center rounded-lg py-1'>{`Price: ₹${shopDetails.services.men[service].pricePerDress}`}</Text></View>
                                            </View>
                                            <View className='justify-between items-center'>
                                                <TouchableOpacity onPress={()=> handleIncrement(service)}>
                                              <View className='bg-black rounded-lg w-8 h-8 items-center justify-center '><Plusicon name='plus' size={15} color={'white'}/></View>
                                              </TouchableOpacity>
                                            </View>
                                        </View>
                                    ))
                                ) : (
                                    Object.keys(shopDetails.services.women).map((service, index) => (
                                        <View className='bg-slate-200 p-2 mb-4 rounded-xl flex-row' key={index}>
                                            <View className='flex-row items-center justify-center'>
                                            <Image className='w-[150px] h-[150px] rounded-xl mr-3' source={shopDetails.services.women[service].image}/>
                                            <View>
                                            <Text className='text-base font-semibold'>{service}</Text>
                                            <ScrollView style={{ height: 'auto' }}>
                                            <Text className ='font-light w-[170px] text-xs mb-2'>{shopDetails.services.women[service].description}</Text></ScrollView>
                                            <Text className='font-light text-sm bg-rose-950 w-[110px] text-white text-center rounded-lg py-1'>{`Price: ₹${shopDetails.services.women[service].pricePerDress}`}</Text></View>
                                            </View>
                                            <View className='justify-between items-center'>
                                                <TouchableOpacity onPress={()=> handleIncrement(service)}>
                                              <View className='bg-black rounded-lg w-8 h-8 items-center justify-center '><Plusicon name='plus' size={15} color={'white'}/></View>
                                              </TouchableOpacity>
                                            </View>
                                        </View>
                                    ))
                                )
                            ) : (
                                <View className='mt-2'>
                    <Text className='text-sm font-light mt-2 ml-2'>Select your service to view service</Text>
                    </View>
                            )}
                        </View>
                </View>
                
                    <HowItWorks />
                    
                        <TouchableOpacity onPress={()=>navigation.navigate('Cart')} activeOpacity={0.7} className='w-full my-2 mb-5'>
                                <View className='bg-lime-300 mx-3 shadow-xl shadow-slate-500 rounded-lg p-3 items-center'>
                                    <Text className='font-semibold'>Continue</Text>
                                </View>
                        </TouchableOpacity>
                   
            </View></ScrollView>
                </View>
    )
}

export default ShopDetails
