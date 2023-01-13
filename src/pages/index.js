import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timelines from '../components/Timelines/Timelines';
import Publications from '../components/Publications/Publications';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import React, { useEffect } from 'react';

const Home = () => {


function Example() {
  useEffect(() => {
    document.title = 'Somyadeep Shrivastava';
  }, []);
}
  return (
    
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Technologies />
      <Projects />

      <Publications />
      <Timelines/>
      <Acomplishments />
    </Layout>
  );
};

export default Home;
