import CategoryTabs from '@/components/CategoryTabs';
import DosageSelector from '@/components/DosageSelector';
import Nav from '@/components/Nav';
import ProductCard from '@/components/ProductCard';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const relaxBottle = require('@/assets/images/relax-bottle.png');

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#f5b207]">
      <View className="flex-1">
        <Nav />
        
        <CategoryTabs />
        
        <View className="flex-1 items-center justify-center px-5 py-4">
          <Image 
            source={relaxBottle} 
            style={{ 
              width: 280, 
              height: 380,
              resizeMode: 'contain'
            }} 
          />
        </View>
        
        <DosageSelector />
        
        <ProductCard />
      </View>
    </SafeAreaView>
  );
}
