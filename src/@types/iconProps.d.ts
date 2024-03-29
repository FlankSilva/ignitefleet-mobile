import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
export declare type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone'
export declare type PaintFunction = (color: string) => React.ReactNode | null
export interface IconProps {
  color?: string
  size?: string | number
  weight?: IconWeight
  style?: StyleProp<ViewStyle>
  mirrored?: boolean
}
export declare type Icon = React.FC<IconProps>
export declare const IconContext: React.Context<IconProps>
