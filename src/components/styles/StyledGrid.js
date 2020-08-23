import styled from 'styled-components';

export const StyledGrid = styled.div`
  /* max-width: 1280px; */
  margin: 0 auto;
  padding: 5px 40px;
  background-color: #decdc3;
  h1 {
    font-family: 'Engagement', cursive;
    font-size: 42px;
    color: #ea5455;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 40px;
  position: relative;

  .grid-element {
    animation: animateGrid 0.5s;
  }

  @keyframes animateGrid {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
