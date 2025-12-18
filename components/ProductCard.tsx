import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';
import QuantitySelector from './QuantitySelector';

export default function ProductCard() {
  return (
    <View className="bg-[#e8e4d9] rounded-t-[40px] px-6 py-8 mt-auto">
      <Text className="text-3xl font-bold text-black mb-1">Relax 30{'\n'}Dissolvable Wafers</Text>
      <Text className="text-lg text-[#666] mb-4">250 mg</Text>
      
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-3xl font-bold text-black">$25.50</Text>
        <QuantitySelector />
      </View>
      
      <View className="bg-[#f5b207] rounded-full py-4 flex-row items-center justify-center gap-2">
        <Ionicons name="card-outline" size={20} color="black" />
        <Text className="text-black font-bold text-lg">Buy Now</Text>
      </View>
    </View>
  );
}
