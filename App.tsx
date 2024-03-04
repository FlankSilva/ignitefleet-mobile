import 'react-native-gesture-handler';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar, View } from 'react-native';

import { Routes } from '@/routes';
import { Loading } from '@/app/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  if (!fontsLoaded) {
    return (
      <>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent
        />
        <View className="flex-1 items-center justify-center bg-gray-800">
          <Loading size={25} color={'#00b37e'} />
        </View>
      </>
    )
  }
  return (
   <Routes />
  );
}

