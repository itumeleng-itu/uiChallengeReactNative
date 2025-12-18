import Entypo from '@expo/vector-icons/Entypo';
import { Text, View } from 'react-native';

export default function QuantitySelector() {
  return (
    <View className="flex-row items-center gap-3">
      <View className="w-10 h-10 rounded-lg border border-[#ccc] items-center justify-center">
        <Entypo name="minus" size={20} color="#333" />
      </View>
      
      <Text className="text-xl font-bold text-black min-w-[24px] text-center">2</Text>
      
      <View className="w-10 h-10 rounded-lg border border-[#ccc] items-center justify-center">
        <Entypo name="plus" size={20} color="#333" />
      </View>
    </View>
  );
}
