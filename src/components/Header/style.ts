import styled from 'styled-components';
import { Link as LinkOriginal } from 'react-router-dom';

export const Link = styled(LinkOriginal)`
  text-decoration: none;
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 19px 40px;

  border-bottom: 2px solid ${(props) => props.theme.colors.primaryMedium};

  img {
    width: 168px;
    height: 40px;
  }

  button {
    height: 54px;

    background: transparent;
    color: ${(props) => props.theme.colors.graylight};
    border: 1px solid ${(props) => props.theme.colors.graylight};
    border-radius: 4px;

    font-family: 'Source Sans Pro', sans-serif;
    font-size: 21px;
    font-weight: 600;

    padding: 0 30px;

    transition: all 0.2s;

    &:hover {
      border: 1px solid ${(props) => props.theme.colors.primaryMedium};
      box-shadow: 0 0 4px ${(props) => props.theme.colors.primaryMedium};
      text-shadow: 0 0 4px ${(props) => props.theme.colors.graylight};
    }

    &:active {
      background: ${(props) => props.theme.colors.graylight};
      color: ${(props) => props.theme.colors.blackDark};
      border: 2px solid ${(props) => props.theme.colors.graylight};
    }
  }
`;
