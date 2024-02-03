import { View, Text, TouchableOpacity } from 'react-native'
import { sortCategoryData} from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import React from 'react'
import { useState } from 'react'
import { theme } from '../theme'

const SortCategories = () => {
      const [activeSort, setActiveSort] = useState('Popular')
  return (
    <View className="flex-row justify-around mx-4 bg-neutral-100 rounded-full px-4 p-2 space-x-2">
      {
            sortCategoryData.map((sort,index)=>{
                  let isActive = sort == activeSort;
                  let activeBtnClass = isActive? 'bg-white shadow':"";
                  return(
                        <TouchableOpacity key={index} onPress={()=> setActiveSort(sort)} className={`p-3 px-4 rounded-full flex ${activeBtnClass}`} >
                              <Text className='font-semi' style={{fontSize:wp(4),color:isActive? theme.text:'rgba(0,0,0,0.6)'}}>{sort}</Text>
                        </TouchableOpacity>
                  )
            })
      }
    </View>
  )
}

export default SortCategories