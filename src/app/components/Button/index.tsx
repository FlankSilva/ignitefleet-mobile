import { TouchableOpacity } from 'react-native'
import { ButtonProps } from './props'
import { twMerge } from 'tailwind-merge'
import { Loading } from '../Loading'

export function Button({
  children,
  className,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      className={twMerge(
        'flex-1 min-h-[56px] max-h-[56px] rounded-md items-center justify-center bg-brand_mid',
        className,
      )}
      {...rest}
    >
      {isLoading ? <Loading size={25} color={'#00b37e'} /> : children}
    </TouchableOpacity>
  )
}
