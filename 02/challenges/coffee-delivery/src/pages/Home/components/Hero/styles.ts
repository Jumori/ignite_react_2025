import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const HeroContainer = styled.section`
  position: relative;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }
`

export const HeroContent = styled.div`
  ${mixins.container}
  z-index: 2;

  display: flex;
  justify-content: center;
  gap: 3.5rem;
  padding: 5.875rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    max-height: 22.5rem;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']}
  }

  > p {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`

export const Info = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  color: ${props => props.theme.colors['base-text']};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
  }
`

const HERO_BULLETS_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  'base-text': 'base-text',
  purple: 'purple'
} as const

interface HeroBulletsProps {
  $backgroundColor: keyof typeof HERO_BULLETS_COLORS
}

export const HeroBullets = styled.div<HeroBulletsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  > svg {
    background: ${props =>
      props.theme.colors[HERO_BULLETS_COLORS[props.$backgroundColor]]};
    color: ${props => props.theme.colors.background};
    border-radius: 999px;
    padding: 0.5rem;
  }
`
