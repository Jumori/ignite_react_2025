import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  background: ${props => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  position: relative;
`

export const CoffeeImg = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 7.5rem;
  max-height: 7.5rem;
`

export const Tags = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  span {
    ${mixins.fonts.tag}
    text-transform: uppercase;
    color: ${props => props.theme.colors['yellow-dark']};
    background: ${props => props.theme.colors['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`

export const Title = styled.h3`
  ${mixins.fonts.titleS}
  color: ${props => props.theme.colors['base-subtitle']};
  margin-top: 1rem;
`

export const Description = styled.span`
  ${mixins.fonts.textS}
  color: ${props => props.theme.colors['base-label']};
  margin-top: 0.5rem;
`

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
`

export const Pricing = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  span {
    color: ${props => props.theme.colors['base-text']};

    &:first-of-type {
      ${mixins.fonts.textS}
    }

    &:last-of-type {
      ${mixins.fonts.titleM}
    }
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors['purple-dark']};
    color: ${props => props.theme.colors['base-card']};
    border-radius: 6px;
    padding: 0.5rem;
    width: 2.375rem;
    height: 2.375rem;
    transition: color 0.2s;

    &:not(:disabled):hover {
      background: ${props => props.theme.colors.purple};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`
