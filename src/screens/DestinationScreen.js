import { View, Text,Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ChevronLeftIcon, ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

const DestinationScreen = (props) => {
  const navigation = useNavigation()
  const [isFavorit,toggleFavourit] = useState(false)
  const item = props.route.params;
  return (
    <View className='bg-white  flex-1'>
      <Image source={item.image} style={{width:wp(100),height:hp(55)}}/>
      <StatusBar syle={'light'}/>
     {/* back button */}
     <SafeAreaView className="flex-row justify-between items-center pt-6 w-full absolute">
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        className="p-2 rounded-full ml-4"
        style={{backgroundColor:'rgba(255,255,255,0.4)'}} 
        >
         <ChevronLeftIcon size={wp(7)} strokeWidth={4} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> toggleFavourit(!isFavorit)}
        className="p-2 rounded-full mr-4"
        style={{backgroundColor:'rgba(255,255,255,0.4)'}} >
         <HeartIcon size={wp(7)} strokeWidth={4} color={isFavorit?"red":"white"}/>
        </TouchableOpacity>
     </SafeAreaView>
{/*      title and description */}
       <View style={{borderTopLeftRadius:40, borderTopRightRadius:40}} className="  px-5 fle flex-1 justify-between bg-white pt-8 -mt-14">
       <ScrollView showsVerticalScrollIndicator={false} className='space-y-5'>
        <View className='flex-row justify-between items-start'>
          <Text style={{fontSize:wp(7)}} className='font-semibold flex-1 text-neutral-500'>{item?.title}</Text>
          <Text style={{fontSize:wp(7), color:theme.text}} className="font-semibold">${item?.price}</Text>

        </View>
        <Text style={{fontSize:wp(3.7)}} className="text-neutral-700 tracking-wide mb-2">{item?.longDescription}</Text>
        <View className="flex-row justify-between mx-1" >
           <View className="flex-row space-x-2 items-start">
           <ClockIcon size={wp(7)} color="skyblue" />
           <View>
           <Text style={{fontSize:wp(4.5)}} className="font-bold text-neutral-700">{item?.duration}</Text>
            <Text className="text-neutral-600 track-wide">Duration</Text>
           </View>
           
           </View>
           <View className="flex-row space-x-2 items-start">
           <MapPinIcon size={wp(7)} color="#f87171" />
           <View>
           <Text style={{fontSize:wp(4.5)}} className="font-bold text-neutral-700">{item.distance}</Text>
            <Text className="text-neutral-600 track-wide">Distance</Text>
           </View>
           
           </View>
           <View className="flex-row space-x-2 items-start">
           <SunIcon size={wp(7)} color="orange" />
           <View>
           <Text style={{fontSize:wp(4.5)}} className="font-bold text-neutral-700">{item.weather}</Text>
            <Text className="text-neutral-600 track-wide">Sunny</Text>
           </View>
           
           </View>
           
        </View>
       </ScrollView>
            <TouchableOpacity style={{backgroundColor:theme.bg(0.8), height:wp(10),width:wp(50)}} className=" rounded-full mb-6 mx-auto justify-center items-center">
              <Text style={{fontSize:wp(5.2)}} className="text-white font-bold" >Book now</Text>
            </TouchableOpacity>

       </View>

     </View>

  )
}

export default DestinationScreen