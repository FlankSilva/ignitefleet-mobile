import { TextComponent } from '@/app/components/TextComponent'
import { ImageBackground } from 'react-native'

import bgImage from '../../../assets/background.png'
import { Button } from '@/app/components/Button'

export function SignIn() {
  return (
    <ImageBackground
      source={bgImage}
      className="flex-1 justify-center p[52px] bg-gray-800 p-[52px]"
    >
      <TextComponent className="text-XXXL text-center text-brand_light">
        Ignite Fleet
      </TextComponent>
      <TextComponent className="text-gray-100 text-MD text-center mb-8">
        Gestão de usp de veículos
      </TextComponent>

      <Button>
        <TextComponent className="text-white text-MD font-roboto_bold">
          Entrar com Google
        </TextComponent>
      </Button>
    </ImageBackground>
  )
}
