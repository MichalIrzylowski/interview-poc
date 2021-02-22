import React from 'react';

import * as S from './article.styled';

export const Article: React.FC = ({ children }) => (
  <S.Article>{children}</S.Article>
);
