import { Text, View } from 'react-native';

export default function DosageSelector() {
  return (
    <View className="absolute right-5 top-32 gap-3">
      <View className="w-12 h-12 rounded-full items-center justify-center bg-[#2a2a2a]">
        <Text className="font-bold text-white">30</Text>
      </View>
      <View className="w-12 h-12 rounded-full items-center justify-center bg-[#00000020]">
        <Text className="font-bold text-[#666]">60</Text>
      </View>
      <View className="w-12 h-12 rounded-full items-center justify-center bg-[#00000020]">
        <Text className="font-bold text-[#666]">90</Text>
      </View>
    </View>
  );
}
