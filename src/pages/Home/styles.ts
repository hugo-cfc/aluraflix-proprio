import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';

import BackgroundImg from '../../assets/background-home.jpg';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FeaturedContainer = styled.div`
  padding: 0 43px;

  position: relative;

  &::before {
    content: '';

    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    filter: brightness(8%);

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: -999;
  }

  div.featured-content {
    height: 709px;
    align-items: center;
    display: flex;

    position: relative;

    img {
      cursor: pointer;
    }
  }
`;

export const FeaturedDetails = styled.div`
  margin-right: 50px;

  div {
    background-color: ${(props) => props.theme.colors.primaryMedium};
    font-size: 40px;

    width: fit-content;
    padding: 15px 20px;

    margin-bottom: 40px;
  }

  h1 {
    font-size: 46px;

    margin-bottom: 13px;
  }
`;

export const ContainerCarousel = styled.div`
  display: flex;

  overflow: auto;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    cursor: pointer;

    & + img {
      margin-left: 15px;
    }
  }
`;

export const ScrollContainerStyled = styled(ScrollContainer)`
  display: flex;
  cursor: grab;

  img {
    width: auto;
    height: 260px;

    & + img {
      margin-left: 15px;
    }
  }
`;
