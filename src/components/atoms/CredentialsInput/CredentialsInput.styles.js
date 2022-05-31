import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  label {
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  input {
    cursor: pointer;
    border: none;
    padding: 0.75rem 1rem;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.m};
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.twBlue};
    }
  }
`;
