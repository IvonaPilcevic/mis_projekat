import styled from '@emotion/styled';

const H2 = styled.h2`
  font-size: 26px;
  color: white;
  font-weight: lighter;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const P = styled.p`
  font-size: 16px;
  color: white;
`;

const Bold = styled.p`
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 5px;
`;

export const Text = {
  h2: H2,
  p: P,
  bold: Bold,
};
