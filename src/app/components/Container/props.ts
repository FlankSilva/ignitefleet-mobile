import { ReactNode } from 'react'
import { ViewProps } from 'react-native'

export type ContainerProps = ViewProps & {
  children: ReactNode
}
