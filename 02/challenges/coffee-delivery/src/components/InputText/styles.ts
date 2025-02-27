import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Wrapper = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => props.theme.colors['base-button']};
  border-radius: 6px;
  background-color: ${props => props.theme.colors['base-input']};
  transition: all 0.2s;

  input {
    color: ${props => props.theme.colors['base-text']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0.75rem;
    outline: none;

    &::placeholder {
      color: ${props => props.theme.colors['base-label']};
    }
  }

  span {
    ${mixins.fonts.textS}
    color: ${props => props.theme.colors['base-label']};
    padding-right: 0.75rem;
    font-style: italic;
  }
`
