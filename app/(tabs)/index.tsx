import { useState } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import DosageSelector from "@/components/DosageSelector";
import Nav from "@/components/Nav";
import ProductCard from "@/components/ProductCard";
import { Image, View } from "react-native";

const relaxBottle = require("@/assets/images/relax-bottle.png");

export default function HomeScreen() {
  const [qty, setQty] = useState(1);

  return (
    <View className="flex-1 bg-[#f5b207]">
      <View className="flex-1 mt-4">
        <Nav qty={qty} />

        <CategoryTabs />

        <View className="flex-1 items-center justify-center px-5 py-4">
          <Image
            source={relaxBottle}
            style={{
              width: 280,
              height: 380,
              resizeMode: "contain",
            }}
          />
        </View>

        <DosageSelector />

        <ProductCard qty={qty} setQty={setQty} />
      </View>
    </View>
  );
}
