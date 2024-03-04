import { Text } from 'react-native'
import { TextPropsComponent } from './props'
import { twMerge } from 'tailwind-merge'

export function TextComponent({
  children,
  className,
  ...rest
}: TextPropsComponent) {
  return (
    <Text
      className={twMerge('font-roboto_regular text-white', className)}
      {...rest}
    >
      {children}
    </Text>
  )
}
