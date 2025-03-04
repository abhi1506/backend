import React from "react";
import "./SoftwareContentFeature.css";
import { AnimatedCardList, AnimatedCard } from "../animation/animation";
import {  FaUserTie, FaHandsHelping, FaShoppingCart, FaStethoscope, FaGraduationCap, FaChartLine } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
const softwareData = [
  { title: "Banking Software", description: "Manage your banking needs with secure and scalable software solutions.", icon: <BsBank2 /> },
  { title: "HR Software", description: "Streamline HR processes and improve workforce management with our HR tools.", icon: <FaUserTie /> },
  { title: "CRM Software", description: 'Provide financial services to small-scale clients with our microfinance solutions.', icon: <MdBusinessCenter /> },
  { title: "NGO Software", description: 'Efficiently manage your non-profit organization with dedicated software tools.', icon: <FaHandsHelping /> },
  { title: "E-commerce Software", description: 'Launch your online store and manage sales effortlessly with our e-commerce solutions.' , icon: <FaShoppingCart /> },
  { title: "Healthcare Software", description: "Launch your online store and manage sales effortlessly with our e-commerce solutions.", icon: <FaStethoscope /> },
  { title: "Education Software", description: "Manage school operations, from admissions to academics, with ease", icon: <FaGraduationCap /> },
  { title: "Finance Software", description: "Enable your field officers with tools to manage and track their activities efficiently.", icon: <FaChartLine /> },
];


export default function SoftwareContentFeature() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <div className="software-content-feature-container">
              
              <h2 className="software-content-header">Our software services</h2>
      <AnimatedCardList className="software-content-feature" containerVariants={containerVariants}>
   
        {softwareData.map((item, index) => {
          return (
            <AnimatedCard variants={containerVariants}
              className={`software-content-feature-card
              feature-${index}`}
              key={index}
            ><p className="software-solution-content-icon">{item.icon}</p>
              <h3 className="soft-ware-content-feature-card-header">{item.title}</h3>
              <p className="soft-ware-content-feature-card-subtitle">{item.description}</p>
            </AnimatedCard>
          );
        })}
       
      </AnimatedCardList>
    </div>
  );
}
