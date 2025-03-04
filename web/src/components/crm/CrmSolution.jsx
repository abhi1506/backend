import React from 'react'
import Herosection2 from '../MobileDevelopment/Herosection2'
import './CrmSolution.css';
import crmupate1 from '../../images/crmupate1.png';
import crmupate2 from '../../images/crmupate2.png';
import crmupate3 from '../../images/crmupate3.svg';
import crmupate4 from '../../images/crmupate4.png';
import WhyChooseCrmAmbiSpine from './WhyChooseCrmAmbiSpine';
import ConsultNow from '../ConsultNow/ConsultNow';
import FaqSection from '../FAQSection/FaqsSection';
import { AnimatedCardList, RotateAnimationCard, ContainerVariants, FadeInFromLeft ,AnimatedCard } from '../animation/animation';
import CrmFourthSection from './CrmFourthSection/CrmFourthSection';
import ProgressSteps from './ProgressSteps/ProgressSteps';
import CRMSectionn from './CRMSectionn';

export default function CrmSolutions() {

   const featurecrmsolution = [
      {
        src: crmupate2,
        alt: "Image 2",
        text: "Track and manage leads effectively.",
        headText: "Lead Management",
      },
      {
        src: crmupate3,
        alt: "Image 3",
        headText: "Sales Automation",
        text: "Automate repetitive sales tasks to save time.",
      },
      {
        src: crmupate4,
        alt: "Image 4",
        headText: "Customer Analytics",
        text: "Analyze customer data for better decision-making Analyze customer data for better decision-making",
      },
    ];

      const whychoosequ = [
        {
          id: 1,
          headText: "SAP",
          text: "Ehance your business processes with SAP CRM solution that is efficient, scalable, and reliable. Optimize customer engagement, improve operational efficiency, and achieve seamless interactions with powerful tools designed to drive success.",
          className:'sap'
        },
        {
          id: 2,
          headText: "Oracle",
          text: "Optimize performance with OracleOptimize your operations and drive innovation with Oracle’s robust and scalable solutions. Enhance efficiency, ensure reliability, and unlock growth with cutting-edge technology tailored to your business needs. ERP Intelligent, adaptable, cloud-powered solutions.",
          className:'ora-cle'
        },
        {
          id: 3,
          headText: "NetSuite",
          text: "Streamline operations and drive growth with NetSuite’s cloud-based ERP solutions. From financial management to CRM, experience unified and scalable tools designed to optimize your business processes and empower success.",
          className:'net-suite'
        }
      ];
      const faqs = [
        {
          question: "How can a CRM help my business grow?",
          answer: "A CRM organizes customer data, automates sales processes, and enhances communication, allowing your business to improve customer relationships, close deals faster, and scale operations efficiently.",
        },
        {
          question: " What industries can benefit from your CRM solutions?",
          answer: "Our CRM is designed for startups, SMEs, and enterprises across various industries, including finance, healthcare, e-commerce, real estate, and IT services.",
        },
        {
          question: " Is your CRM secure and scalable?",
          answer: "Yes! We use enterprise-grade security protocols, data encryption, and cloud scalability to ensure your CRM is secure, future-proof, and capable of handling business growth",
        },
      ]; 

      const stategicontainerVariants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.5 },
        },
      };
    
      const stateVariants = {
        hidden: { opacity: 0, x: -30 },
        show: { 
          opacity: 1, x: 0, 
          transition: { duration: 0.6, ease: "circOut" } },
      };
      
  return (
    <div className='crm-solution-upates'>
      <Herosection2 heading="Revolutionize Your Business with CRM Solutions"
      subtitle="Transform your business with powerful CRM solutions! Effortlessly manage customers, track sales, and enhance productivity. Streamline operations, improve customer relationships, and drive growth with the best CRM software for your business."
      className=" "
      heroimg={crmupate1}
      imagclasName="imagclasName"
      />
      
      <div className='crm-feature-container'>
        <h1 className='cmsupdate-feaute-heading'>CRM Feature</h1>
        <AnimatedCardList className='crm-feature-solution-container' containerVariants={ContainerVariants}>
        {
          featurecrmsolution.map((data, index)=>{
            return(
            <AnimatedCard key={index} className='crm-feature-solution-card' variants={stateVariants}>
              <div className='crm-feature-solution-card-imag-container'>
                <img src={data.src} className='crm-feauture-solution-img' alt={data.alt} />
              </div>
              <div  className='crm-feature-solution-card-content'>
                <h4 className='feature-crm-headtext'>{data.headText}</h4>
                <p className='feature-crm-subtitle'>{data.text}</p>
              </div>
          </AnimatedCard>
          )
          })
        }
        </AnimatedCardList>
      </div>
      <div>
        <ProgressSteps/>
        <div className="crmsection">
        <CRMSectionn/>
        </div>
        <CrmFourthSection/>
        <WhyChooseCrmAmbiSpine />
      </div>
      <div className='strategic-parten-ship-container'>
         <div className="strategic-parten-wrapper">
         <h3 className='stategic-header'>Strategic Partnership with Scalable Software Solutions</h3>
          <AnimatedCardList containerVariants={stategicontainerVariants} className='strategic-card-container' >
          {
            whychoosequ.map((data, index) =>{
             return(
              <AnimatedCard 
              variants={stateVariants}
              delay={index * 0.10} 
              key={data.id} className={`strategic-card ${data.className}`}>
              <h4 className='fw-bold'>{data.headText}</h4>
              <p>{data.text}</p>
             </AnimatedCard>
             )
            })
          }
          </AnimatedCardList>
         </div>
      </div>
      <FaqSection faqs={faqs} />
      <ConsultNow />
    </div>
  )
}
