import { MapPin, ShoppingCart } from 'phosphor-react'

import {
  Aside,
  CartButton,
  CartButtonBadge,
  HeaderContainer,
  LocationBadge
} from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeeDelivery} alt="Coffee Delivery" />
      </Link>

      <Aside>
        <LocationBadge>
          <MapPin size={22} weight="fill" />

          <span>São Paulo, SP</span>
        </LocationBadge>

        <CartButton to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />

          <CartButtonBadge>10</CartButtonBadge>
        </CartButton>
      </Aside>
    </HeaderContainer>
  )
}
