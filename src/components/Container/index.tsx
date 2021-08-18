import React from 'react';

import { StyledContainer } from './style';

export const Container: React.FC = ({ children }, ...rest) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;
