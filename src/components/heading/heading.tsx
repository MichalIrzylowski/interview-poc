import React from 'react';
import styled from 'styled-components';

import { blue } from '../styles-consts';

export interface HeadingProps {
  level: '1' | '2' | '3' | '4' | '5' | '6';
}

const HeadingCore: React.FC<HeadingProps> = ({
  level = '2',
  children,
  ...restProps
}) => React.createElement(`h${level}`, restProps, children);

export const Heading = styled(HeadingCore)`
  font-size: ${(props) => {
    switch (props.level) {
      case '1': {
        return '32px';
      }
      case '2': {
        return '24px';
      }
      case '3': {
        return '22px';
      }
      case '4': {
        return '20px';
      }
      case '5': {
        return '18px';
      }
      case '6': {
        return '16px';
      }
    }
  }};

  color: ${(props) => props.level === '3' && blue};
`;
