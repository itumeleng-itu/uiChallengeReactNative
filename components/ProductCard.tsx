import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";

type Props = {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
};

export default function ProductCard({ qty, setQty }: Props) {
  const basePrice = 25.5;
  const plus = () => setQty((prev) => prev + 1);
  const minus = () => setQty((prev) => Math.max(1, prev - 1));
  const totalPrice = (basePrice * qty).toFixed(2);

  return (
    <View className="bg-[#e8e4d9] rounded-t-[40px] px-6 py-8 mt-auto">
      {/* Product Information */}
      <Text className="text-4xl font-medium text-black mb-1">
        Relax 30{"\n"}Dissolvable Wafers
      </Text>
      <Text className="text-lg text-[#666] mb-4">250 mg</Text>

      {/* Price and Quantity Selector Row */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-3xl font-bold text-black">${totalPrice}</Text>

        {/* Quantity Selector UI */}
        <View className="flex-row items-center gap-3">
          <Pressable
            onPress={minus}
            className="w-10 h-10 rounded-lg border border-[#ccc] items-center justify-center active:bg-gray-300 bg-black"
          >
            <Entypo
              name="minus"
              size={20}
              color="#f5b207"
              className="border border-[#f5b207] rounded-md"
            />
          </Pressable>

          <Text className="text-xl font-bold text-black min-w-[24px] text-center">
            {qty}
          </Text>

          <Pressable
            onPress={plus}
            className="w-10 h-10 rounded-lg border border-[#ccc] items-center justify-center active:bg-gray-300 bg-black"
          >
            <Entypo
              name="plus"
              size={20}
              color="#f5b207"
              className="border border-[#f5b207] rounded-md"
            />
          </Pressable>
        </View>
      </View>

      {/* Buy Now Button */}
      <Pressable
        onPress={() =>
          Alert.alert("Purchase in progress...", `Total: $${totalPrice}`)
        }
        className="bg-[#f5b207] rounded-full py-4 flex-row items-center justify-center gap-2 active:opacity-70"
      >
        <Ionicons name="card-outline" size={20} color="black" />
        <Text className="text-black font-bold text-lg">Buy Now</Text>
      </Pressable>
    </View>
  );
}
