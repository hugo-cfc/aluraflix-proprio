import React from 'react';

import Logo from '../../assets/logo.svg';

import { Container } from './style';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Aluraflix" />
      <div>
        Site feito na <strong>#ImersãoReact</strong> da <span>Alura</span>.
      </div>
    </Container>
  );
};

export default Footer;
