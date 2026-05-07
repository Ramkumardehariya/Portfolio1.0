import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Container } from "./styles";
import image from '../../assets/github.svg'
import hal from '../../assets/experience/hal.png';
import erp from '../../assets/experience/erp.png'
import railway from '../../assets/experience/railway.png'
import settyl from '../../assets/experience/settyl.png'


const WorkIcon = ()=>{
  return (
    <div>
      <img src={image} alt="" />
    </div>
  )
}

const Experience = ()=>{

  return (
    <Container className="experience" id="experience" >
      <div className="experienceHeader">
        <h2 className="font-bold" style={{color: '#23ce6b'}}>Internhips & Experience</h2>
      </div>

      <VerticalTimeline animate={true} lineColor={ '#23ce6b' }>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<img src={settyl} />}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-4xl text-green-600">Software Development Engineer</h1>
          <h4 className="vertical-timeline-element-subtitle text-red-500">Kaptured AI</h4>
          <h3 className="text-[13px] text-sky-900 mb-3">Oct 2025 - Jan 2026</h3>
          <ol className="">
            <li className="mb-2">* Developed scalable web applications using TypeScript, Next.js, React.js, and Supabase with 30+ REST APIs and optimized databases.</li>
            <li>* Implemented dashboards, CRUD operations, PDF reports, bug fixes, and 20+ Python automation scripts improving backend workflow efficiency.</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          icon={<img src={erp} />}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-4xl text-green-600">Quality Analyst</h1>
          <h4 className="vertical-timeline-element-subtitle text-red-500">Unibots</h4>
          <h3 className="text-[13px] text-sky-900 mb-3">May 2026 - Present</h3>
          <ol className="">
            <li className="mb-2">* Performed functional and API testing of web applications, ensuring reliability, performance, seamless user experience, and accurate system behavior.</li>
            <li>* Collaborated with developers to debug issues, validate REST APIs using Postman, and improve backend workflows and application quality.</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<img src={hal} />}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-4xl text-green-600">Quality Assurance Testing</h1>
          <h4 className="vertical-timeline-element-subtitle text-red-500">BridgeLabz Solutions Private Limited</h4>
          <h3 className="text-[13px] text-sky-900 mb-3">August 2024 - Feb 2025</h3>
          <ol className="">
            <li className="mb-2">* Completed six months of Quality Assurance training with hands-on experience in Core Java, automation scripting, API, and database testing.</li>
            <li>* Performed manual, API, database, and mobile testing, fixed 20+ bugs, optimized assets, and improved application maintainability.</li>
          </ol>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<img src={railway} />}
        >
          <h1 className="vertical-timeline-element-title font-semibold text-4xl text-green-600">MERN Full stack Course</h1>
          <h4 className="vertical-timeline-element-subtitle text-red-500">Code help</h4>
          <h3 className="text-[13px] text-sky-900 mb-3">Aug 2023 - Nov 2023</h3>
          <ol className="">
            <li className="mb-2">* Completed MERN Stack training with hands-on experience in MongoDB, Express.js, React.js, Node.js, REST APIs, and full-stack development.</li>
            <li>* Built responsive full-stack applications, implemented authentication, CRUD operations, API integration, and optimized frontend and backend performance.</li>
          </ol>
        </VerticalTimelineElement>
        

      </VerticalTimeline>
    </Container>
  )
}

export default Experience;