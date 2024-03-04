import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '@/app/screens/SignIn'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={SignIn} />
    </Navigator>
  )
}
