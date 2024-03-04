import { ReactNode } from 'react'
import { TextProps } from 'react-native'

export type TextPropsComponent = TextProps & {
  children: ReactNode
}
