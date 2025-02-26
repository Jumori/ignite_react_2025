import { ShoppingCart } from 'phosphor-react'
import {
  Actions,
  CoffeeImg,
  Container,
  Control,
  Description,
  Pricing,
  Tags,
  Title
} from './styles'
import { InputNumber } from '../InputNumber'

interface CardProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({
  coffee: { image, tags, title, description, price }
}: CardProps) {
  return (
    <Container>
      <CoffeeImg src={image} alt={title} />

      <Tags>
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{title}</Title>

      <Description>{description}</Description>

      <Control>
        <Pricing>
          <span>R$</span>
          <span>
            {price.toLocaleString('pt-br', {
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </span>
        </Pricing>

        <Actions>
          <InputNumber />

          <button>
            <ShoppingCart weight="fill" />
          </button>
        </Actions>
      </Control>
    </Container>
  )
}
