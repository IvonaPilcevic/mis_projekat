import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  padding: 10px;
  grid-column-gap: 10px;
`;

export const Column = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  height: 100%;
  padding: 20px;
  overflow-y: scroll;
`;

export const Section = styled.div`
  margin: 30px 0px;
`;
