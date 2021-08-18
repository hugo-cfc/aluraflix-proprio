import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grayMedium};
  border-radius: 4px;
  padding: 5px 10px;

  & + div {
    margin-top: 77px;
  }

  label {
    width: 100%;
    display: block;
    font-size: 12px;
    font-weight: 300;

    color: ${(props) => props.theme.colors.grayMedium2};
  }

  &:focus {
    border-bottom: 2px solid ${(props) => props.theme.colors.primaryMedium};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: ${(props) => props.type === 'textarea' && '100px'};
  background-color: ${(props) => props.theme.colors.grayMedium};
  color: ${(props) => props.theme.colors.graylight};
  border: 0;
  outline: none;

  &::placeholder {
    color: transparent;
  }
`;
