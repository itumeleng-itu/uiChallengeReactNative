import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, Text, View } from "react-native";
const xefagLogo = require("@/assets/images/xefag.png");

type Props = {
  qty: number;
};

export default function Nav({ qty }: Props) {
  return (
    <View className="flex-row gap-5 items-center justify-between mx-5 mt-3">
      <Pressable className="w-14 h-14 items-center justify-center bg-white rounded-full active:bg-black">
        <Entypo name="chevron-left" size={30} color="black" />
      </Pressable>
      <View className="flex-row gap-2 items-center flex-1 ">
        <Image source={xefagLogo} style={{ width: 130, height: 110 }} />
      </View>
      <Pressable className="w-14 h-14 items-center justify-center bg-orange-400 rounded-full active:bg-white">
        <Ionicons name="person-outline" size={24} color="white" />
      </Pressable>
      <Pressable className="relative w-14 h-14 items-center justify-center bg-[#e6e6d8] rounded-full active:bg-orange-400">
        <Entypo name="shopping-basket" size={24} color="black" />
        <View className="absolute top-0 right-0 w-6 h-6 bg-black rounded-full items-center justify-center">
          <Text className="text-white text-xs font-bold">{qty}</Text>
        </View>
      </Pressable>
    </View>
  );
}
