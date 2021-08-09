import React from 'react';

import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import {
  PlayerImg,
  FrontImg1,
  FrontImg2,
  FrontImg3,
  FrontImg4,
  BackImg1,
  BackImg2,
  BackImg3,
  BackImg4,
  MobileImg1,
  MobileImg2,
  MobileImg3,
  MobileImg4,
} from './utils/imgsImports';

import { Container, FeaturedContainer, FeaturedDetails } from './styles';

export const Home: React.FC = () => {
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

          <Carousel horizontal>
            <img src={FrontImg1} alt="SEO" />
            <img src={FrontImg2} alt="SEO" />
            <img src={FrontImg3} alt="SEO" />
            <img src={FrontImg4} alt="SEO" />
            <img src={PlayerImg} alt="SEO" />
          </Carousel>

          <Carousel
            horizontal
            title="Back End"
            subtitle="Formação Back End na Alura"
          >
            <img src={BackImg1} alt="SEO" />
            <img src={BackImg2} alt="SEO" />
            <img src={BackImg3} alt="SEO" />
            <img src={BackImg4} alt="SEO" />
            <img src={PlayerImg} alt="SEO" />
          </Carousel>

          <Carousel
            horizontal
            title="Mobile"
            subtitle="Formação Back End na Alura"
          >
            <img src={MobileImg1} alt="SEO" />
            <img src={MobileImg2} alt="SEO" />
            <img src={MobileImg3} alt="SEO" />
            <img src={MobileImg4} alt="SEO" />
            <img src={PlayerImg} alt="SEO" />
          </Carousel>
        </FeaturedContainer>
      </main>

      <Footer />
    </Container>
  );
};

export default Home;
