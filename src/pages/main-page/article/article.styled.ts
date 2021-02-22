import styled from 'styled-components';

import { tablet } from '@components/styles-consts';

export const Article = styled.article`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row-reverse;

    &:first-of-type {
      flex-direction: row;
    }
  }
`;
