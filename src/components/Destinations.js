import {Image, View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { destinationData } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'
const Destinations = () => {
      const navigation = useNavigation()

  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
     {destinationData.map((item,index)=>{
      return(
            <DestinatinCard navigation={navigation} item={item} key={index}/>
      )
     })}
    </View>
  )
}

export default Destinations
const DestinatinCard = ({item,navigation})=>{
      const [isFavorite,toggleFavourite]  = useState(false)
      return(
            
     
            <TouchableOpacity onPress={()=>navigation.navigate('Destination',{...item})} 
            className="flex justify-end relative p-4 py-9 space-y-6 mb-5" style={{width:wp(44), height:wp(65)}}>
            <Image 
            source={item.image}
            style={{width: wp(44),height: wp(65),borderRadius:35}}
           className='absolute'/>
          <LinearGradient 
               colors={['transparent','rgba(0,0,0,0.8)']}
               style={{width:wp(44),height:hp(15),borderBottomLeftRadius:35,borderBottomRightRadius:35}}
               start={{x:0.5,y:0}}
               end={{x:0.5,y:1}}
               className="absolute bottom-0"/> 
                  <TouchableOpacity onPress={()=> toggleFavourite(!isFavorite)}
                   style={{backgroundColor:'rgba(255,255,255,0.4)'}} className="absolute top-1  right-3 rounded-full p-3">
                        <HeartIcon size={wp(5)} color={isFavorite?'red':"white"} />
                  </TouchableOpacity>
                 <Text style={{fontSize:wp(4)}}className='text-white font-semibold'>{item.title}</Text> 
                 <Text style={{fontSize:wp(2.1)}} className='text-white'>{item.shortDescription}</Text>    
   
            </TouchableOpacity>
           
      )
     
}