import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

import { Container } from './style';

const Footer: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Aluraflix" />
      </Link>
      <div>
        Site feito na <strong>#ImersãoReact</strong> da <span>Alura</span>.
      </div>
    </Container>
  );
};

export default Footer;
