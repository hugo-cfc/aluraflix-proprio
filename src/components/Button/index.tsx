import React from 'react';

import { Button as StyledButton, ButtonProps } from './style';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  ...rest
}) => (
  <StyledButton {...rest} variant={variant}>
    {children}
  </StyledButton>
);

export default Button;
