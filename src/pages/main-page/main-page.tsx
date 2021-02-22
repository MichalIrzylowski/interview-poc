import React from 'react';
import { MainWrapper } from '@components/main-wrapper';
import { Heading } from '@components/heading';
import { Button } from '@components/button';

import domex from '@img/domex.jpg';
import board from '@img/board.jpg';
import family from '@img/happy-family.jpg';

import { Article } from './article';
import { Section } from './article/section';
import { DecorativeBox } from './decorative-box';

export const MainPage: React.FC = () => {
  return (
    <MainWrapper>
      <Article>
        <Section padding>
          <Heading level="1">Kim jesteśmy</Heading>
          <Heading level="3">Czyli kim jesteśmy i dokąd zmierzamy?</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            augue in leo blandit aliquet. Etiam sollicitudin, eros quis gravida
            eleifend, leo dui blandit tellus, blandit elementum lectus nulla ut
            justo. Maecenas eu erat sit amet est viverra aliquet quis eu nunc.
            Sed consequat, massa non porttitor scelerisque, est purus blandit
            magna, eget convallis lorem nunc eget sem. Integer lectus dolor,
            volutpat at luctus ut, dapibus at enim. Praesent quis est commodo,
            suscipit mi id, sagittis nibh. Quisque mollis ligula quis dui
            tristique ullamcorper. Aenean tempus ex lacus. Integer sagittis
            justo tempor erat euismod venenatis id ut mauris. Aliquam
            scelerisque turpis in scelerisque placerat. Nullam nec pulvinar
            turpis, et pretium nunc. Ut in dignissim mauris.
          </p>
          <p>
            Cras aliquet arcu metus, vitae efficitur ipsum pellentesque vel.
            Aenean ultricies lacus a ornare commodo. Proin a augue elementum,
            tincidunt quam at, porta sem. Suspendisse quis rhoncus arcu. Donec
            quis luctus metus. Nunc porta mauris interdum fermentum sagittis.
            Donec gravida magna ante, et posuere nulla eleifend id. Morbi congue
            nisl id nisl porta finibus. Phasellus cursus elit et lacus pretium,
            eget consectetur nulla semper. Curabitur tincidunt venenatis nisl,
            eget pulvinar turpis imperdiet malesuada. Donec quis accumsan risus.
            In vel nunc molestie, vulputate est at, rhoncus lacus. Etiam in
            tortor quis leo dapibus tincidunt quis ut felis. Ut in ligula velit.
          </p>
          <div>
            <Button to="/houses">Zobacz więcej</Button>
          </div>
        </Section>
        <Section flexWrap>
          <DecorativeBox backgoundImage={domex} />
          <DecorativeBox backgoundImage={board} />
          <DecorativeBox backgoundImage={family} />
          <DecorativeBox>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            augue in leo blandit aliquet. Etiam sollicitudin, eros quis gravida
            eleifend, leo dui blandit tellus, blandit elementum lectus nulla ut
            justo. Maecenas eu erat sit amet est viverra aliquet quis eu nunc.
          </DecorativeBox>
        </Section>
      </Article>
      <Article>
        <Section padding>
          <Heading level="2">Nasza Oferta</Heading>
          <Heading level="3">Dowiedz się co możemy Tobie zaoferować</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            augue in leo blandit aliquet. Etiam sollicitudin, eros quis gravida
            eleifend, leo dui blandit tellus, blandit elementum lectus nulla ut
            justo. Maecenas eu erat sit amet est viverra aliquet quis eu nunc.
            Sed consequat, massa non porttitor scelerisque, est purus blandit
            magna, eget convallis lorem nunc eget sem. Integer lectus dolor,
            volutpat at luctus ut, dapibus at enim. Praesent quis est commodo,
            suscipit mi id, sagittis nibh. Quisque mollis ligula quis dui
            tristique ullamcorper. Aenean tempus ex lacus. Integer sagittis
            justo tempor erat euismod venenatis id ut mauris. Aliquam
            scelerisque turpis in scelerisque placerat. Nullam nec pulvinar
            turpis, et pretium nunc. Ut in dignissim mauris.
          </p>
          <p>
            Cras aliquet arcu metus, vitae efficitur ipsum pellentesque vel.
            Aenean ultricies lacus a ornare commodo. Proin a augue elementum,
            tincidunt quam at, porta sem. Suspendisse quis rhoncus arcu. Donec
            quis luctus metus. Nunc porta mauris interdum fermentum sagittis.
            Donec gravida magna ante, et posuere nulla eleifend id. Morbi congue
            nisl id nisl porta finibus. Phasellus cursus elit et lacus pretium,
            eget consectetur nulla semper. Curabitur tincidunt venenatis nisl,
            eget pulvinar turpis imperdiet malesuada. Donec quis accumsan risus.
            In vel nunc molestie, vulputate est at, rhoncus lacus. Etiam in
            tortor quis leo dapibus tincidunt quis ut felis. Ut in ligula velit.
          </p>
          <div>
            <Button to="/houses">Zobacz więcej</Button>
          </div>
        </Section>
        <DecorativeBox>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
          augue in leo blandit aliquet.
        </DecorativeBox>
      </Article>
    </MainWrapper>
  );
};
