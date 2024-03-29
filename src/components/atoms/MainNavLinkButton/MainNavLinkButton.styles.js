import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: default;
  @media screen and (min-width: 501px) {
    cursor: pointer;
    border-radius: 1000rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.whiteHover};
    }
  }
  @media screen and (min-width: 1301px) {
    padding-right: 1.75rem;
    padding-left: 0.5rem;
  }
  .icon-wrapper {
    padding: 0.75rem;
    /* border: 1px solid red; */
  }
  & .active {
    display: block;
  }
  &.active .active {
    display: none;
  }
  & .passive {
    display: none;
  }
  &.active .passive {
    display: block;
  }

  & > .word {
    padding-left: 0.25rem;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.xxm};
    color: ${({ theme }) => theme.colors.black};
  }
  &.active > .word {
    font-weight: 700;
  }
`;
