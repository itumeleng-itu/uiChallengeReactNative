import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

export default function CategoryTabs() {
  return (
    <View className="flex-row gap-3 mx-5 ">
      <View className="flex-row items-center gap-2 px-4 rounded-full">
        <Ionicons name="leaf-outline" size={24} color="black" />
        <Text className="text-black text-lg font-bold">Relax</Text>
      </View>
      
      <View className="flex-row items-center gap-2 px-4 rounded-full">
        <Ionicons name="moon-outline" size={24} color="#666" />
        <Text className="text-[#666]">Sleep</Text>
      </View>
    </View>
  );
}
