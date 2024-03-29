import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled(NavLink)`
  position: fixed;
  top: 0.75rem;
  right: 1rem;
  z-index: 1000;
  .profile-wrapper {
    display: none;
    @media screen and (min-width: 1301px) {
      position: static;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .profile-image-wrapper {
        width: 2.5rem;
      }
      .profile-info-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.25rem;
        font-size: ${({ theme }) => theme.fontSize.m};
        .name {
          color: ${({ theme }) => theme.colors.black};
          font-weight: 700;
        }
        .login {
          color: ${({ theme }) => theme.colors.textGray};
        }
      }
    }
  }
  .logout-icon {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSize.xl};
    &:hover {
      color: ${({ theme }) => theme.colors.redDarkHover};
    }
  }

  @media screen and (min-width: 501px) {
    position: static;
    margin-top: auto;
  }
  @media screen and (min-width: 1301px) {
    padding: 0.75rem;
    width: 15.5rem;
    height: 4rem;
    border-radius: 1000rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.whiteHover};
    }
  }
`;
