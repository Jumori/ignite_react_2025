import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CoffeeList = styled.section`
  ${mixins.container}

  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  padding: 2rem 0;

  > h2 {
    ${mixins.fonts.titleL}

    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 5rem;
    grid-column-gap: 2rem;
    margin-top: 3.375rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`
