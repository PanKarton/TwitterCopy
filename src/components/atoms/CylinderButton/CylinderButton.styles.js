import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  width: 100%;
  border-radius: 1000px;
  background-color: ${({ bgColor, theme }) => {
    switch (bgColor) {
      case 'blue':
        return theme.colors.twBlue;
      case 'black':
        return theme.colors.black;
      default:
        return theme.colors.white;
    }
  }};
  color: ${({ textColor, theme }) => {
    switch (textColor) {
      case 'white':
        return theme.colors.white;
      case 'blue':
        return theme.colors.twBlue;
      default:
        return theme.colors.black;
    }
  }};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: pointer;

  &:hover {
    transition: background-color 0.125s ease-in-out;
    background-color: ${({ bgColor, textColor, theme }) => {
      if (textColor === 'blue' && bgColor === 'white') return theme.colors.whiteBlueHover;
      switch (bgColor) {
        case 'blue':
          return theme.colors.twBlueDarker;
        case 'black':
          return theme.colors.blackLight;
        default:
          return theme.colors.whiteHover;
      }
    }};
  }

  &:disabled {
    cursor: default;
    background-color: ${({ bgColor, theme }) => {
      switch (bgColor) {
        case 'blue':
          return theme.colors.twBlueLight;
        default:
          return theme.colors.white;
      }
    }};
  }
  & > svg.loading-icon {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    animation: rotate-center 0.75s linear infinite both;
  }

  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
