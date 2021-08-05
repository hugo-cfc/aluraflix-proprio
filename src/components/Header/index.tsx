import React from 'react';

import Logo from '../../assets/logo.svg';

import { Container } from './style';

interface HeaderProps {
  newVideoButton?: boolean;
}

export const Header: React.FC<
  HeaderProps & React.HTMLProps<HTMLHeadingElement>
> = ({ newVideoButton, ...rest }: HeaderProps) => {
  return (
    <Container {...rest}>
      <img src={Logo} alt="" />

      {newVideoButton && <button type="button">Novo vídeo</button>}
    </Container>
  );
};
