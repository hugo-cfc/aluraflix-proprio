import styled from 'styled-components';

export const Main = styled.main`
  h1 {
    text-align: center;
    font-size: 60px;
    font-weight: 400;

    margin-top: 50px;
    margin-bottom: 40px;
  }
`;

export const ContainerInputs = styled.div`
  width: 100%;

  padding: 0 40px;

  select {
    width: 100%;
    background: ${(props) => props.theme.colors.grayMedium};
    color: ${(props) => props.theme.colors.grayMedium2};
    border-radius: 4px;
    margin: 77px 0;
    padding: 5px 10px;

    font-size: 18px;
    font-weight: 300;
  }

  div.buttons-box {
    button {
      & + button {
        margin-left: 20px;
      }
    }
  }

  table {
    width: 100%;
    margin-top: 30px;
    border-collapse: collapse;
    background: #080909;

    thead {
      td {
        font-size: 35px;
        border: 4px solid ${(props) => props.theme.colors.primaryMedium};
        padding: 10px;
      }
    }

    tbody {
      tr td {
        font-size: 27px;
        font-weight: 300;
        border: 2px solid ${(props) => props.theme.colors.blackDark};
        padding: 10px;

        &:first-child {
          border-left: 4px solid ${(props) => props.theme.colors.primaryMedium};
        }

        &:last-child {
          border-right: 4px solid ${(props) => props.theme.colors.primaryMedium};
        }

        &:nth-child(3),
        &:last-child {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }

      tr:last-child td {
        border-bottom: 4px solid ${(props) => props.theme.colors.primaryMedium};
      }
    }
  }
`;
