import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${props => props.theme.colors['base-button']};

  button {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    color: ${props => props.theme.colors.purple};
    transition: all 0.2s;

    &:hover {
      color: ${props => props.theme.colors['purple-dark']};
    }

    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }

  span {
    padding-top: 0.125rem;
    color: ${props => props.theme.colors['base-title']};
  }
`
