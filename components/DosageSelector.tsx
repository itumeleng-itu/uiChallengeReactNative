import { Pressable, Text, View } from 'react-native';

export default function DosageSelector() {

  return (
    <View className="absolute right-6 top-32 gap-3">
      <Pressable className="w-12 h-12 rounded-full items-center justify-center bg-[#2a2a2a]">
        <Text className="font-bold text-white">30</Text>
      </Pressable>
      <Pressable className="w-12 h-12 rounded-full items-center justify-center bg-black/40 active:bg-[#2a2a2a]">
        <Text className="font-bold text-white">60</Text>
      </Pressable>
      <Pressable className="w-12 h-12 rounded-full items-center justify-center bg-black/40 active:bg-[#2a2a2a]">
        <Text className="font-bold text-white">90</Text>
      </Pressable>
    </View>
  );
}
