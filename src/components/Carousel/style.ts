/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable dot-notation */
/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

export const Container = styled.div``;

export const ScrollContainerStyled = styled(ScrollContainer)`
  display: flex;
  cursor: grab;

  width: 100%;

  &:active {
    cursor: grabbing;
  }

  img {
    width: auto;
    height: 260px;

    & + img {
      margin-left: 15px;
    }
  }
`;

interface ContainerTitleProps {
  color?: string;
}

export const ContainerTitle = styled.div<ContainerTitleProps>`
  display: flex;
  align-items: center;

  div {
    background: ${(props) => props.theme.colors.categories[props.color!]};
    padding: 10px 15px;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 20px;

    h1 {
      font-size: 35px;
      font-weight: 400;
    }
  }

  span {
    font-size: 18px;
    font-weight: 300;
  }
`;
