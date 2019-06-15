import styled from 'styled-components';

export const HeroesContainer = styled.div`
  display: grid;
  grid-gap: 0.8rem;
  /* grid-template-columns: repeat(8, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;
