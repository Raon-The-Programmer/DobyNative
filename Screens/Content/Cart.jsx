import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeShop, updateQuantity } from '../../Redux/user/cartPage';
import Backicon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Trash from 'react-native-vector-icons/FontAwesome5';
import Plusicon from 'react-native-vector-icons/FontAwesome'
import Minusicon from 'react-native-vector-icons/FontAwesome'
import { Image } from 'react-native';
import Normal from 'react-native-vector-icons/Feather'
import Fast from 'react-native-vector-icons/MaterialCommunityIcons'

const Cart = () => {
    const { cartDetails } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    // Group services by shop name
    const groupedServices = cartDetails.reduce((acc, curr) => {
        const key = curr.shopName;
        if (!acc[key]) {
            acc[key] = { shopName: curr.shopName, services: [curr], totalPrice: curr.price * curr.quantity };
        } else {
            const existingService = acc[key].services.find(service => service.name === curr.name);
            if (existingService) {
                existingService.quantity += curr.quantity;
            } else {
                acc[key].services.push(curr);
            }
            acc[key].totalPrice += curr.price * curr.quantity;
        }
        return acc;
    }, {});

    // Function to handle removal of service from cart
    const handleRemove = (service) => {
        dispatch(removeShop(service)); // Dispatch action to remove service from cart
    };

    // Function to handle incrementing the quantity
    const handleIncrement = (service) => {
        dispatch(updateQuantity({ ...service, quantity: service.quantity + 1 }));
    };

    // Function to handle decrementing the quantity
    const handleDecrement = (service) => {
        if (service.quantity > 1) {
            dispatch(updateQuantity({ ...service, quantity: service.quantity - 1 }));
        } else {
            dispatch(removeShop(service)); // Remove the item if quantity becomes zero
        }
    };

    // Function to calculate total price for all services in the cart
    const calculateTotalPrice = () => {
        let total = 0;
        for (const shopName in groupedServices) {
            total += groupedServices[shopName].totalPrice;
        }
        return total;
    };

    return (
        <View className="flex-1 bg-slate-100 ">
            <View className="flex-row items-center bottom shadow-slate-500 justify-center mt-9">
                <TouchableOpacity onPress={() => navigation.goBack()} className="ml-3 absolute left-0">
                    <Backicon name='arrow-back-ios' size={25} />
                </TouchableOpacity>
                <Text className="font-light text-lg">Cart Details</Text>
            </View>
            <ScrollView className="flex-1 bg-gray-100">
            <TouchableOpacity onPress={() => dispatch(clearCart())} className="mx-3 items-end rounded-lg">
                    <Text className="text-red-600 text-xs">CLEAR CART</Text>
             </TouchableOpacity>
                {Object.values(groupedServices).map((shop, index) => (
                    <View key={index} className="mb-8 items-center mt-5">
                        
                        <Text className="text-lg font-bold mb-2">{shop.shopName}</Text>
                        {shop.services.map((service, serviceIndex) => (
                            <View key={serviceIndex} className="mb-4 p-2 rounded-xl shadow-lg shadow-slate-500 w-[370px] bg-gray-200">
                                <View className='w-[200px] items-center flex-row'>
                                    <Image className='w-[150px] h-[150px] rounded-xl mr-3'  source={service.image}/>
                                    <View>
                                    <Text className="font-bold">{service.name}</Text>
                                    <Text className='font-light text-xs'>{service.description}</Text>
                                    <Text className='font-light text-sm bg-rose-950 w-[110px] my-2 text-white text-center rounded-lg py-1'>Price: ₹{service.price * service.quantity}</Text>
                                    <View className='justify-between items-center flex-row'>
                                    <View className="items-center w-[100px] flex-row justify-between">
                                        <TouchableOpacity onPress={() => handleDecrement(service)}>
                                        <View className='bg-black rounded-lg w-8 h-8 items-center justify-center '><Minusicon name='minus' size={15} color={'white'}/></View>
                                        </TouchableOpacity>
                                        <Text>{service.quantity}</Text>
                                        <TouchableOpacity onPress={() => handleIncrement(service)}>
                                        <View className='bg-black rounded-lg w-8 h-8 items-center justify-center '><Plusicon name='plus' size={15} color={'white'}/></View>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={() => handleRemove(service)}>
                                        <Trash name='trash' size={20} />
                                    </TouchableOpacity>
                                </View>
                                    </View>
                                </View>
                
                            </View>
                        ))}
                        <View className=' w-full px-3'>
                        <Text className="font-">Total Price: ₹{shop.totalPrice}</Text></View>
                    </View>
                    
                ))}
                <View className='mx-3'><Text className="text-md font-bold">Sub Total: ₹{calculateTotalPrice()}</Text></View>
                <TouchableOpacity activeOpacity={0.8}>
                <View className='bg-lime-300 mt-2 mb-9 mx-3 shadow-xl shadow-slate-500 rounded-lg p-3 items-center'>
                         <Text className='font-semibold'>Continue</Text>
                 </View>
                </TouchableOpacity>
            </ScrollView>
            <SafeAreaView>
            <View className="mt-3 items-start mx-3">
                <View>
                <Text className='font-light text-base'>Delivery Time</Text>
                </View>
                <View className='flex-row w-full justify-between mt-3 mb-4'>
                    <View className='flex-row w-[150px] items-center rounded-xl bg-slate-200 px-2 justify-between'>
                        <Normal name='box' size={30}/>
                        <View>
                            <Text>Normal</Text>
                            <Text className='font-light text-xs'>2 - 3 Days</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                    <View className='flex-row w-[180px] items-center rounded-xl bg-rose-950 p-2 justify-between'>
                        <Fast name='truck-fast-outline' size={30} color={'white'}/>
                        <View className='justify-between'>
                            <Text className='text-white'>Fast</Text>
                            <Text className='font-light text-xs text-white'>Under 24 Hours</Text>
                        </View>
                    </View></TouchableOpacity>
                </View>
            </View></SafeAreaView>
        </View>
    );
};

export default Cart;
