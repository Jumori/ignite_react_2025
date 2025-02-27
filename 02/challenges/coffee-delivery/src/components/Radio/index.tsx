import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  isSelected: boolean
}

export function Radio({ isSelected, children, ...rest }: RadioProps) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" {...rest} />
      {children}
    </Container>
  )
}
