import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  ${mixins.container}
  display: flex;
  gap: 2rem;
`

export const SideContainer = styled.div`
  > h2 {
    ${mixins.fonts.titleXS}
    color: ${props => props.theme.colors['base-subtitle']};
    margin-bottom: 1rem;
  }

  > form {
    padding: 2.5rem;
    background-color: ${props => props.theme.colors['base-card']};
    border-radius: 6px;

    &:not(:first-of-type) {
      margin-top: 0.75rem;
    }
  }
`

export const PaymentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    > h3 {
      ${mixins.fonts.textM}
      color: ${props => props.theme.colors['base-subtitle']};
    }

    > h4 {
      ${mixins.fonts.textS}
      color: ${props => props.theme.colors['base-text']};
    }
  }
`

export const PaymentForm = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 2rem 0;
`

interface PaymentFormColProp {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

export const PaymentFormCol = styled.div<PaymentFormColProp>`
  grid-column: span ${({ cols }) => cols || 12};
  margin: 1rem 0.75rem;
`

export const PaymentMethodForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin: 2rem 0;
`
