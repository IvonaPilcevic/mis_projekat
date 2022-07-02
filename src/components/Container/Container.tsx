import React from 'react';
import { StyledContainer } from './ContainerStyle';

const Container: React.FC<{ children: any }> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
