import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import styled from 'styled-components'

const TimImg = styled.img`
width:100%;
height:50%;
radius : 5px
object-fit: cover;
overflow: hidden;
margin: 0;
box-sizing: border-box;
border-radius: 3px;
padding-right: 16px;
`




const Timelines = () => (
  <Section id="timeline">
        <SectionTitle>Timelines</SectionTitle>

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(255, 0, 0)', color: '#FFFFFF' }
    }
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <TimImg src="./images/USC.png"/>
    <h3 className="vertical-timeline-element-title">Master's In Computer Science</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
        Courses - Algorithms, Database Systems, Web Technologie, Machine Learning<br/>
        GPA - 3.5
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}

    date="2021 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
        <TimImg src="./images/deloitte.jpg"/>

    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(265,165, 0 )', color: '#fff' }}

    date="2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
            <TimImg src="./images/MIDAS.png"/>

    <h3 className="vertical-timeline-element-title">NLP Research Intern</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentStyle={{ background: 'rgb(144, 238, 144)', color: '#fff' }}

    icon={<WorkIcon />}
  >
                <TimImg src="./images/mandi.jpeg"/>

    <h3 className="vertical-timeline-element-title">Summer Research Intern</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2017-2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentStyle={{ background: 'rgb(173, 216, 230)', color: '#fff' }}

    icon={<SchoolIcon />}
  >
                    <TimImg src="./images/IIIT2.png"/>

    <h3 className="vertical-timeline-element-title">Bachelors in Computer Science and Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      Courses - Data Structures and Algorithms, OOPs, Data Analytics, Machine Larning, Deep Learning<br/>
      CGPA - 8.92/10
    </p>
  </VerticalTimelineElement>
 
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
</Section>
);
export default Timelines;
