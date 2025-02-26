import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  ${mixins.container}
  padding: 2rem 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;
`

export const LocationBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;

  height: 2.375rem;
  padding: 0.625rem 0.5rem;

  background: ${props => props.theme.colors['purple-light']};
  color: ${props => props.theme.colors['purple-dark']};
  border-radius: 6px;

  font-size: 0.875rem;
`

export const CartButton = styled(NavLink)`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors['yellow-light']};
  color: ${props => props.theme.colors['yellow-dark']};
  border-radius: 6px;

  position: relative;

  &:hover {
    opacity: 0.7;
  }
`

export const CartButtonBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);

  width: 1.25rem;
  height: 1.25rem;

  background: ${props => props.theme.colors['yellow-dark']};
  color: ${props => props.theme.colors.white};
  border-radius: 999px;

  font-weight: 700;
  font-size: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
