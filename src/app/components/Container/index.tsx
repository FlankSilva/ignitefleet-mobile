import { SafeAreaView } from 'react-native'
import { twMerge } from 'tailwind-merge'
import { ContainerProps } from './props'

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <SafeAreaView
      className={twMerge(
        'flex-1 justify-center p-[52px] bg-gray-800',
        className,
      )}
      {...rest}
    >
      {children}
    </SafeAreaView>
  )
}
