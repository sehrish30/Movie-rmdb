import styled from 'styled-components';

export const StyledActor = styled.div`
  font-family: 'Chathura', sans-serif;
  color: #ea5455;
  background: #e5e5e5;
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  font-size: 2rem;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }

  .actor-name {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;
  }

  .actor-character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
  }
`;
