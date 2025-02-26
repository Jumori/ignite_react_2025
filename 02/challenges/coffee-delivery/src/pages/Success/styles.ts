import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  ${mixins.container}
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem 0;
`

export const Heading = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  > h1 {
    ${mixins.fonts.titleL}
    color: ${props => props.theme.colors['yellow-dark']};
  }

  > h2 {
    ${mixins.fonts.textL}
    color: ${props => props.theme.colors['base-subtitle']};
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  > img {
    max-width: 30.75rem;
  }
`

export const Summary = styled.div`
  flex: 1;

  border: 1px solid;
  border-radius: 6px 36px;
  border-color: transparent;
  background-origin: border-box;
  background-image: ${props =>
    `linear-gradient(to bottom right, ${props.theme.colors.yellow}, ${props.theme.colors.purple})`};
`

export const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.3125rem;
  padding: 2.8125rem 2.5rem;
  background-color: ${props => props.theme.colors.background};
  border-radius: 6px 36px;
`

const SUMMARY_CONTENT_BULLETS_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple'
} as const

interface SummaryItemProps {
  $backgroundColor: keyof typeof SUMMARY_CONTENT_BULLETS_COLORS
}

export const SummaryItem = styled.div<SummaryItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > svg {
    background-color: ${props =>
      props.theme.colors[
        SUMMARY_CONTENT_BULLETS_COLORS[props.$backgroundColor]
      ]};
    color: ${props => props.theme.colors.background};
    padding: 0.5rem;
    border-radius: 999px;
  }
`
