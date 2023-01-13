import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './PublicationsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { publications } from '../../constants/constants';

const Publications = () => (
  <Section nopadding id="publications">
    <SectionTitle main>Publications</SectionTitle>
    <GridContainer>
      {publications.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit} target='_blank'>Paper</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    <SectionDivider />

  </Section>
);

export default Publications;