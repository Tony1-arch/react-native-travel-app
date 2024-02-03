import { View, Text, SafeAreaView,ScrollView, Platform, TouchableOpacity,Image ,TextInput} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import React from 'react'
import Categories from '../components/Categories';
import SortCategories from '../components/SortCategories';
import Destinations from '../components/Destinations';


const ios = Platform.OS == "ios";
const topMargin = ios? "mt-3":'mt-20';

const iosp = Platform.OS == "ios";
const paddingTop = iosp? "pt-1":'pt-6'

const HomeScreen = () => {

  return (
    <SafeAreaView className={"flex-1 bg-white pt-6 " + paddingTop}>
    {/* avatar */}
    <ScrollView className={"space-y-6 pt-6"} showsVerticalScrollIndicator={false}>
     <View className="mx-5 flex-row justify-between items-center mb-10">
        <Text style={{fontSize:wp(7)}} className="font-bold text-neutral-700 ">Let's Discover</Text>
        <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={{height:wp(12),width:wp(12)}} />
        </TouchableOpacity>
     </View>
  {/* search bar */}

    <View className="mx-5 mb-4">
    <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
    <MagnifyingGlassIcon size={20} strokeWidth={3} color='gray'/>
    <TextInput
      placeholder="Search destinations"
      placeholderTextColor={'gray'}
      className='flex-1 text-base mb-1 pl-1 tracking-wider'/>                                                                                                                                                                                                                                                 
    </View>
    </View>
    {/* Categories */}
    <View className='mb-4'>
      <Categories/>                             
    </View>
   {/*  sort categories */}
   <View className='mb-4'>
      <SortCategories/>                            
    </View>
     {/*  Destinations */}
   <View className="pb-6" >
      <Destinations/>                           
    </View>
    </ScrollView>
    </SafeAreaView>                                                     
  )
}

export default HomeScreen