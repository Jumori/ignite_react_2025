import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  ${mixins.fonts.buttonM}

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors['base-button']};
  color: ${props => props.theme.colors['base-text']};
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 0.2s;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: ${props => props.theme.colors['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${props => props.theme.colors['purple-light']};
    border: 1px solid ${props => props.theme.colors.purple};
  }

  > svg {
    color: ${props => props.theme.colors.purple};
  }

  input {
    display: none;
  }
`
