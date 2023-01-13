import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';
//import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';


const Hero = (props) => (
  
    
    <Section nopadding id="hero">

    <Img src={'/images/somyadeep.jpg'} />

      <LeftSection >
        <SectionTitle main center>
          Hey there! <br />
          I'm Somyadeep Shrivastava
        </SectionTitle>
        <SectionText>
          I'm currently a Master's Student In Computer Science at USC.<br/> I am confident in my ability to work as a Full Stack Developer, Data Scientist and a NLP Researcher. <br/>I often use my curiosity to land up at exotic places and if you have something new to share how about we hit the cafe we never went!
        </SectionText>
        <br/>
        <Button onClick={()=>window.open('https://drive.google.com/file/d/1pfOiLtb2nJVPGy4E8pPBK4SR2_EZqCMv/view?usp=sharing','_blank')}>View Resume</Button>
      </LeftSection>
    </Section>

  
);

export default Hero;