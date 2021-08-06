import React, { useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PlayerImg from '../../assets/player.png';

import {
  Container,
  FeaturedContainer,
  FeaturedDetails,
  ContainerCarousel,
  ScrollContainerStyled,
} from './styles';

export const Home: React.FC = () => {
  const carouselEl = useRef(null);

  const handleDragCarousel = (e: React.MouseEvent<HTMLDivElement>): void => {
    console.log(e.currentTarget);
  };

  return (
    <Container>
      <main>
        <Header newVideoButton />

        <FeaturedContainer>
          <div className="featured-content">
            <FeaturedDetails>
              <div>Front end</div>

              <h1>SEO com React</h1>

              <article>
                Eu to aqui pra nesse vídeo dizer que a gente vai aprender a
                começar uma app inspirada no desenho Pokémon com Nextjs e React,
                ver algumas dicas sobre performance e de quebra conhecer uma
                plataforma sensacional pra fazer deploy que é a Vercel. Tudo em
                22 minutos nesse vídeo feito com todo o carinho do mundo
                construindo uma &ldquo;Pokedex&ldquo;! 😍 bora ver? \o
              </article>
            </FeaturedDetails>

            <img src={PlayerImg} alt="SEO" />
          </div>
          <ScrollContainerStyled horizontal>
            <img src={PlayerImg} alt="SEO" />
            <img src={PlayerImg} alt="SEO" />
            <img src={PlayerImg} alt="SEO" />
            <img src={PlayerImg} alt="SEO" />
            <img src={PlayerImg} alt="SEO" />
            <img src={PlayerImg} alt="SEO" />
          </ScrollContainerStyled>
        </FeaturedContainer>
      </main>

      <Footer />
    </Container>
  );
};

export default Home;
