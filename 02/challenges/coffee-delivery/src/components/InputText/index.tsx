import { InputHTMLAttributes } from 'react'
import { Container, Wrapper } from './styles'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
}

export function InputText({ optional, ...rest }: InputTextProps) {
  return (
    <Container>
      <Wrapper>
        <input {...rest} />

        {optional && <span>Opcional</span>}
      </Wrapper>
    </Container>
  )
}
