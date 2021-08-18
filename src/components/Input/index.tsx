import React, { InputHTMLAttributes } from 'react';

import { Container, Input as StyledInput } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{placeholder}</label>
      <StyledInput {...rest} id={name} />
    </Container>
  );
};

export default Input;
