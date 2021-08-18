import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'submit' | 'cancel';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

export const Button = styled.button<ButtonProps>`
  font-family: 'Source Sans Pro';
  font-size: 21px;
  font-weight: 600;

  border: 0;
  border-radius: 4px;
  padding: 17px 50px;

  ${(props) =>
    props.variant === 'submit' &&
    css`
      background: ${props.theme.colors.primaryMedium};
      color: ${props.theme.colors.graylight};
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, props.theme.colors.primaryMedium)};
      }
    `}

  ${(props) =>
    props.variant === 'cancel' &&
    css`
      background: ${props.theme.colors.blackLighter};
      color: ${props.theme.colors.blackDark};
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, props.theme.colors.blackLighter)};
      }
    `}
`;
