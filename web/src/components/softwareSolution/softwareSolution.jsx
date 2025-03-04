import React from 'react';
import Herosection2 from '../MobileDevelopment/Herosection2';
import crmupate4 from '../../images/crmupate4.png';
import crmupate5 from '../../images/software-custom1.png';

import './softwareSolution.css';
import SoftwareCustomService from './SoftwareCustomService';
import SoftwareDevelopmentCard from './SoftwareDevelopmentCard';
import ConsultNow from '../ConsultNow/ConsultNow';

export default function SoftwareSolutionUpdate() {
  const data1 = [
    {
      id: 1,
      header: "AI-Powered Business Solutions",
      subtitle: "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
    },
    {
      id: 2,
      header: "Cloud-Based Productivity Tools",
      subtitle: "Enhancing collaboration and efficiency with scalable cloud-based solutions.",
    },
    {
      id: 3,
      header: "Enterprise Software Integration",
      subtitle: "Seamlessly integrating software solutions into your existing business ecosystem.",
    },
    {
      id: 4,
      header: "Cybersecurity & Compliance",
      subtitle: "Ensuring robust security and compliance with industry standards.",
    }
  ];

  return (
    <div className='software-solution-page'>
      <Herosection2 
        heading="Transform Your Business with Custom Software Solutions"
        subtitle="Our expert software developers help you boost work efficiency and create innovative solutions to drive your business forward."
        className="hero-text-mid"
        heroimg={crmupate4}
      />

      <SoftwareCustomService />
      <SoftwareDevelopmentCard data1={data1} heading='Content' />
      <SoftwareDevelopmentCard data1={data1} heading='Feature' />

      <div className='our-experty-section'>
        <h1 className='our-experties-heading'>Our Technology Expertise</h1>
        <div className='our-experties-container'>
          <img src={crmupate5} className="our-experti-img" alt='Expertise technologies' />
        </div>
      </div>
      
      <ConsultNow />
    </div>
  );
}
