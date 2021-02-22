import React from 'react';

import * as S from './decorative-box.styled';

export const DecorativeBox: React.FC<S.DecorativeBoxStyles> = (props) => (
  <S.DecorativeBox {...props} textStyles={!!props.children} />
);
