import {
  Heading,
  HeroContainer,
  HeroBullets,
  HeroContent,
  Info
} from './styles'

import heroImg from '../../../../assets/hero.svg'
import heroBackgroundImg from '../../../../assets/hero-background.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <div>
          <Heading>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Heading>

          <Info>
            <div>
              <HeroBullets $backgroundColor="yellow-dark">
                <ShoppingCart size={32} weight="fill" />
              </HeroBullets>
              <span>Compra simples e segura</span>
            </div>

            <div>
              <HeroBullets $backgroundColor="base-text">
                <Package size={32} weight="fill" />
              </HeroBullets>
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <HeroBullets $backgroundColor="yellow">
                <Timer size={32} weight="fill" />
              </HeroBullets>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <HeroBullets $backgroundColor="purple">
                <Coffee size={32} weight="fill" />
              </HeroBullets>
              <span>O café chega fresquinho até você</span>
            </div>
          </Info>
        </div>

        <img src={heroImg} alt="Café do Coffee Delivery" />
      </HeroContent>

      <img src={heroBackgroundImg} alt="" />
    </HeroContainer>
  )
}
