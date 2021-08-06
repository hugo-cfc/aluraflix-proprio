import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 2px solid ${(props) => props.theme.colors.primaryMedium};

  padding: 20px 0;
  margin-top: 44px;

  img {
    max-width: 252.5px;
    max-height: 60px;
    margin-bottom: 10px;
  }

  div {
    font-weight: 300;
    font-size: 18px;
  }

  span {
    color: ${(props) => props.theme.colors.primaryMedium};
    font-weight: 600;
  }
`;
