import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { blue, white } from '../styles-consts';

export interface ButtonStyles {
  center?: boolean;
}

export const Button = styled(Link)<ButtonStyles>`
  padding: 10px 20px;
  background-color: ${white};
  border: 2px solid ${blue};
  color: ${blue};
  ${(props) => props.center && 'margin: 0 auto;'}
`;
