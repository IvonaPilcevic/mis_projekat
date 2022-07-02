import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: block;
  border: 2px solid white;
  border-radius: 30px;
  background-color: transparent;
  color: white;
  padding: 20px;
  margin: 20px;
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
