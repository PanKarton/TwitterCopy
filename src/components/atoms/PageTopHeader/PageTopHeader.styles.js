import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-left: 1rem;
  padding-block: 1rem;
  z-index: 0;
  & > .image-wrapper {
    height: 100%;
    width: 2rem;
    @media screen and (min-width: 501px) {
      display: none;
    }
  }
  & > h2.page-header {
    font-size: ${({ theme }) => theme.fontSize.xm};
    color: ${({ theme }) => theme.colors.black};
    @media screen and (min-width: 501px) {
      font-size: ${({ theme }) => theme.fontSize.xxm};
    }
  }
`;
