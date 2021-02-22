import styled, { css } from 'styled-components';
import { desktop } from '@components/styles-consts';

export interface SectionProps {
  flex?: boolean;
  padding?: boolean;
  flexWrap?: boolean;
}

const flexWrapCss = css`
  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Section = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  & * {
    text-align: center;
  }

  ${(props) => props.padding && 'padding: 20px;'}

  ${(props) => props.flexWrap && flexWrapCss}
`;
