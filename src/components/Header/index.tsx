import React from 'react';

import Logo from '../../assets/logo.svg';

import { Link, Container } from './style';

interface HeaderProps {
  newVideoButton?: boolean;
}

export const Header: React.FC<
  HeaderProps & React.HTMLProps<HTMLHeadingElement>
> = ({ newVideoButton, ...rest }: HeaderProps) => {
  return (
    <Container {...rest}>
      <Link to="/">
        <img src={Logo} alt="Aluraflix" />
      </Link>

      {newVideoButton && (
        <Link to="/new-video">
          <button type="button">Novo vídeo</button>
        </Link>
      )}
    </Container>
  );
};

export default Header;
