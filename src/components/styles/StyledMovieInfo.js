import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const StyledMovieInfo = styled.div`
  background: ${props =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : '#e5e5e5'};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;

  .movieinfo-content {
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(45, 64, 89, 0.7);
    border-radius: 20px;
    position: relative;
  }

  .movieinfo-thumb {
    width: 300px;
    float: left;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }

  .movieinfo-text {
    font-family: 'Chathura', sans-serif;
    padding: 40px;
    color: #e5e5e5;
    overflow: hidden;

    h1 {
      font-family: 'Engagement', cursive;
      font-size: 3.2rem;
      color: #ea5455;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3 {
      font-size: 1.8rem;
      line-height: 0;
      margin-top: 30px;
      color: #e5e5e5;
    }

    p {
      font-family: 'Chathura', sans-serif;
      font-size: 2.5rem;
      color: #e5e5e5;
      line-height: 26px;
    }
  }

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #e5e5e5;
    color: #2d4059;
    font-weight: 800;
    border-radius: 25px;
    margin: 0px 0 0 0;
    font-size: 1.5rem;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      font-family: 'Chathura', sans-serif;
      font-size: 2rem;
      color: #e5e5e5;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
