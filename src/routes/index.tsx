import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, View } from 'react-native'
import { AppRoutes } from './app.routes'

export function Routes() {
  return (
    <View className="flex-1 bg-gray-900">
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
