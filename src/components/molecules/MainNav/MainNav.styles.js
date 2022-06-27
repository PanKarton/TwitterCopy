import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 100%;
  a {
    color: black;
    svg {
      height: 26.25px;
      width: 26.25px;
    }
  }
`;
export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  li {
    flex-basis: 20%;
  }
  @media screen and (min-width: 501px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 1rem;
    li {
      flex-basis: auto;
    }
  }
`;
