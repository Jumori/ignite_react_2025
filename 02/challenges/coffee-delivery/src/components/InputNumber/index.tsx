import { Minus, Plus } from 'phosphor-react'
import { Container } from './styles'

interface InputNumberProps {
  quantity?: number
}

export function InputNumber({ quantity = 0 }: InputNumberProps) {
  return (
    <Container>
      <button>
        <Minus size={14} />
      </button>

      <span>{quantity}</span>

      <button>
        <Plus size={14} />
      </button>
    </Container>
  )
}
