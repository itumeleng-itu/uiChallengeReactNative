import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

export default function CategoryTabs() {
  return (
    <View className="flex-row gap-4 mx-5 mt-4">
      <View className="flex-row items-center gap-2 px-4 py-2 rounded-full bg-white">
        <Ionicons name="leaf-outline" size={18} color="black" />
        <Text className="text-black font-medium">Relax</Text>
      </View>
      
      <View className="flex-row items-center gap-2 px-4 py-2 rounded-full">
        <Ionicons name="moon-outline" size={18} color="#666" />
        <Text className="text-[#666]">Sleep</Text>
      </View>
    </View>
  );
}
