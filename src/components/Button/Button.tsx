import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  border: 2px solid white;
  border-radius: 30px;
  background-color: transparent;
  color: white;
  padding: 20px;
  margin: 30px 0px;
  width: 350px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

export const SmallButton = styled.button`
  display: block;
  border: 2px solid white;
  border-radius: 30px;
  background-color: transparent;
  color: white;
  padding: 10px;
  margin: 20px 0px;
  width: 150px;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;
