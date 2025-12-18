import { View, Image, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
const xefagLogo = require('@/assets/images/xefag.png');



export default function Nav() {
  return (
    <View className="flex-row gap-5 items-center justify-between mx-5 my-4 bg-transparent">
        <View className="w-14 h-14 items-center justify-center bg-[#e6e6d8] rounded-full">
            <Entypo name="chevron-left" size={44} color="black"/>
        </View>
        <View className="flex-row gap-2 items-center flex-1">
            <Image source={xefagLogo} style={{ width: 130, height: 130 }} />
        </View>
        <View className="w-14 h-14 items-center justify-center bg-[#00000041] rounded-full"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
            <Ionicons name="person-outline" size={24} color="black" />
        </View>
        <View className="relative w-14 h-14 items-center justify-center bg-[#e6e6d8] rounded-full">
            <Entypo name="shopping-basket" size={24} color="black" />
            <View className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full items-center justify-center">
                <Text className="text-white text-xs font-bold">3</Text>
            </View>
        </View>
    </View>
  );
}