import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCode } from 'react-icons/di';
import { FaRobot } from 'react-icons/fa';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    {/*<SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
</SectionText>*/}
    <List>
    <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
           Python <br />
           C++<br/>
           JavaScript  
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
           React.js <br />
           HTML<br/>
           CSS  
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            PostgreSQL <br />
            Flask<br/>
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaRobot size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AI/Data Science</ListTitle>
          <ListParagraph>
            Pandas<br />
            Numpy<br/>
            Pytorch<br/>
            Tensorflow

          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
