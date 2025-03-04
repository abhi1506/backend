import React from 'react'
import HeroSection2 from '../MobileDevelopment/Herosection2'
import crmupate4 from '../../images/crmupate4.png';
import crmupate5 from '../../images/software-custom1.png';

import './softwareSolutionUpdate.css';
import SoftwareCustomService from './SoftwareCustomService';
import {  SoftwareDevelopmentCard } from './SoftwareDevelopmentCard'
// import  OurCustomersSection from '../card/OurCustomersSection';
import ConsultNow from './../ConsultNow/ConsultNow'
import SoftwareDevelopmentContainer from './SoftwareDevelopmentCard';
import SoftwareContentFeature from './SoftwareContentFeature'
import cplus from './../../images/c 1.svg'
import typescript from './../../images/css-1.svg'
import flutter from './../../images/flutter 1.svg';
import html1 from './../../images/html-1.svg';
import javascript from './../../images/javascript-1.svg';
import angular from './../../images/angular 1.svg';
import react from './../../images/react 1.svg';
import java from './../../images/java-1.svg';
import python from './../../images/python 1.svg';
import css from './../../images/css-1.svg';
import mysql from './../../images/mysql.svg'
import azure from './../../images/azure-2.svg';
import { ScaleAnimationInfinite } from '../animation/animation';


export default function SoftwareSolutionUpdate() {
  const data1=[
    {
      id:1,
      header:"Scalability & Flexibility ",
      subtitle:"Solutions that grow with your business.",

    },
    {
      id:2,
      header:"User-Centric Design",
      subtitle:"Designed with user preferences and experience in mind.",
    
    },
    {
      id:3,
      header:" Agile Development Approach",
      subtitle:"Fast and flexible development process.",

    },
    {
      id:4,
      header:"Secure & Reliable",
      subtitle:"Cutting-edge security and reliability for peace of mind.",
    }
  ]

  const items = [
      {
        id:1,
        icon:html1,
        name: "Html",
      },
      {
        id:2,
        icon:css,
        name: "Css",

      },
      {
        id:3,
        icon:javascript,
        name: "JavaScript",

      },
      {
        id:4,
        icon: react,
        name: "React",

      },
      {
        id:5,
        icon: python,
        name:"Python"
      },
      {
        id:6,
        icon: java,
        name: "Java",

      },
      {
        id: 7,
        icon: mysql,
        name: "mysql"
      },
      {
        id: 8,
        icon: angular,
        name: "Angular",
        
      },
      {
        id:9,
        icon:azure,
        name: "Azure",

      },
      {
        id:10,
        icon: flutter,
        name: "Flutter",

      },
      {
        id:11,
        icon: cplus,
        name: "C++",


      },
      {
        id:12,
      icon: typescript,
      name: 'TypeScript'
      }
    ];

  return (
    <div className='software-solution-page'>
     <HeroSection2 heading="Transform Your Business with Custom Software Solutions"
      subtitle="Our expert software developers help you boost work efficiency and create innovative solutions to drive your business forward."
      className="here-text-mid "
      heroimg={crmupate4}
      imagclasName="imagclasName"
      />
      
        <SoftwareCustomService />

        <SoftwareContentFeature />

        {/* <SoftwareDevelopmentCard data1={data1} heading='Content'/>
        <SoftwareDevelopmentCard  data1={data1} heading='Feature'/> */}
      <SoftwareDevelopmentContainer />
      <div className='our-experty-section'>
        <h1 className='our-experties-heading'>Our Technology Expertise</h1>
        <div className='our-experties-container-technologies'>
              {/* <img src={crmupate5} className="our-experti-img" alt='expetiyes technologies' /> */}
              {
                items.map((item) =>{
                  return(
                    <ScaleAnimationInfinite key={item.id} className='technologies-container-technologies'>
                      <img src={item.icon} className="technologies" /> {item.name}
                    </ScaleAnimationInfinite>
                  )
                })
              }
        </div>
      </div>
      <ConsultNow />
    </div>
  )
}
