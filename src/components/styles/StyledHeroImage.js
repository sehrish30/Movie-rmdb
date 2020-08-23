import styled from 'styled-components';

export const StyledHeroImage = styled.div`
  background: ${props =>
    `linear-gradient(
      to bottom, rgba(45,64,89,0)
      39%,rgba(45,64,89,35)
      41%,rgba(45,64,89,0.65)
      100%
    ),
    url('${props.image}'), #1c1c1c`};
  background-size: 100%, cover !important;
  background-position: center, center !important;
  width: 100%;
  height: 600px;
  position: relative;
  animation: animateHeroimage 1s;

  .heroimage-content {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }

  .heroimage-text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0);
    color: #e5e5e5;

    h1 {
      font-family: 'Engagement', cursive;
      font-size: 48px;
      color: #e5e5e5;

      @media screen and (max-width: 720px) {
        font-size: 38px;
        color: #e5e5e5;
      }
    }

    p {
      font-family: 'Chathura', sans-serif;
      font-size: 48px;
      line-height: 26px;
      color: #e5e5e5;

      @media screen and (max-width: 720px) {
        font-size: 35px;
        line-height: 20px;
        color: #e5e5e5;
      }
    }

    @media screen and (max-width: 720px) {
      max-width: 100%;
    }
  }

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
