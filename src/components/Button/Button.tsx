import React from 'react';
import { StyledButton } from './ButtonStyle';

const Button: React.FC<{ children: any }> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
