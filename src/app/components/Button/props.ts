import { TouchableOpacityProps } from 'react-native'

export type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode
  isLoading?: boolean
}
