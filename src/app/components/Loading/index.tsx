import { ActivityIndicator } from 'react-native'
import { LoadingProps } from './props'
import { twMerge } from 'tailwind-merge'

export function Loading({ className, ...rest }: LoadingProps) {
  return <ActivityIndicator className={twMerge('', className)} {...rest} />
}
