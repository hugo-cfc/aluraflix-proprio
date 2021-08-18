import React from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import { Main, ContainerInputs } from './styles';

export const NewVideo: React.FC = () => {
  return (
    <Container>
      <Main>
        <Header />
        <h1>Novo vídeo</h1>
        <ContainerInputs>
          <form action="">
            <Input name="title" placeholder="Título" />
            <Input name="link-video" type="url" placeholder="Link do vídeo" />
            <Input
              name="link-image"
              type="url"
              placeholder="Link da imagem do vídeo"
            />
            <label htmlFor="category">
              <select
                id="category"
                name="category"
                placeholder="Escolha uma categoria"
              >
                <option>Back End</option>
                <option>Back End</option>
                <option>Mobile</option>
                <option>Infraestrutura</option>
                <option>Data Science</option>
                <option>Design &amp; UX</option>
                <option>Marketing Digital</option>
                <option>Inovação &amp; Gestão</option>
              </select>
            </label>
            <Input name="description" placeholder="Descrição" type="textarea" />
            <Input name="code-security" placeholder="Código de segurança" />
            <div className="buttons-box">
              <Button variant="submit">Salvar</Button>
              <Button variant="cancel">Limpar</Button>
            </div>
          </form>
        </ContainerInputs>
      </Main>
      <Footer />
    </Container>
  );
};

export default NewVideo;
