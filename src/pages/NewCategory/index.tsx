import React from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import categories from '../../mocks/categories';

import { ContainerInputs, Main } from './styles';

export const NewCategory: React.FC = () => {
  return (
    <Container>
      <Main>
        <Header />

        <h1>Novo categoria</h1>

        <ContainerInputs>
          <form action="">
            <Input name="name" placeholder="Nome" />
            <Input name="description" placeholder="Descrição" type="textarea" />
            <Input name="link-image" type="color" placeholder="Cor" />
            <Input name="code-security" placeholder="Código de segurança" />

            <div className="buttons-box">
              <Button variant="submit">Salvar</Button>
              <Button variant="cancel">Limpar</Button>
            </div>
          </form>

          <table>
            <thead>
              <tr>
                <td>Nome</td>
                <td>Descrição</td>
                <td>Editar</td>
                <td>Remover</td>
              </tr>
            </thead>

            <tbody>
              {categories.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>Editar</td>
                  <td>Remover</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ContainerInputs>
      </Main>
      <Footer />
    </Container>
  );
};

export default NewCategory;
