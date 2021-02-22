import styled, { css } from 'styled-components';
import { black, blue, tablet } from '@components/styles-consts';

export interface DecorativeBoxStyles {
  backgoundImage?: string;
  textStyles?: boolean;
}

const textCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const DecorativeBox = styled.div<DecorativeBoxStyles>`
  color: ${black};
  height: 200px;
  width: 100%;

  ${({ backgoundImage }) =>
    backgoundImage
      ? `background-image: url(${backgoundImage});`
      : `background-color: ${blue};`}

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 20px;

  ${(props) => props.textStyles && textCss}

  @media screen and(min-width: ${tablet}) {
    height: 100%;
  }
`;
