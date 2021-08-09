import React from 'react';
import { ScrollContainerProps } from 'react-indiana-drag-scroll';

import { Container, ScrollContainerStyled, ContainerTitle } from './style';

interface CarouselProps extends ScrollContainerProps {
  title?: string;
  subtitle?: string;
}

export const Carousel: React.FC<CarouselProps> = (
  { children, title, subtitle },
  ...rest
) => {
  const unifiedTitle = title?.toLowerCase().split(' ').join('');

  console.log(unifiedTitle);

  return (
    <Container className="container-carousel">
      {title && (
        <ContainerTitle color={String(unifiedTitle)}>
          <div>
            <h1>{title}</h1>
          </div>
          <span>{subtitle}</span>
        </ContainerTitle>
      )}

      <ScrollContainerStyled {...rest}>{children}</ScrollContainerStyled>
    </Container>
  );
};

export default Carousel;
