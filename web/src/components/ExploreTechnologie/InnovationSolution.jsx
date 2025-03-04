

import React from "react";
import './InnovationSolution.css';
import { AnimatedCard, AnimatedCardList} from '../animation/animation';

import { FaLock, FaFileContract, FaCubes, FaCloud, FaCloudUploadAlt, FaTasks, FaChartBar, FaEye, FaDatabase, FaRobot, FaProjectDiagram, FaCommentDots, FaMicrochip, FaTools, FaChartLine } from 'react-icons/fa';
import IndustriesWeServe from "./IndustriesWeServe";

const technologyData = {
  "Blockchain Technology": [
    { text: "Decentralized and Secure", icon: <FaLock /> },
    { text: "Smart Contracts", icon: <FaFileContract /> },
    { text: "Blockchain Development", icon: <FaCubes /> },
  ],
  "Cloud Technology": [
    { text: "Scalable and Secure", icon: <FaCloud /> },
    { text: "Cloud Migration", icon: <FaCloudUploadAlt /> },
    { text: "Cloud Management", icon: <FaTasks /> },
  ],
  "Big Data Technology": [
    { text: "Data Analytics", icon: <FaChartBar /> },
    { text: "Data Visualization", icon: <FaEye /> },
    { text: "Data Management", icon: <FaDatabase /> },
  ],
  "Artificial Intelligence (AI) and Machine Learning (ML)": [
    { text: "AI-powered Solutions", icon: <FaRobot /> },
    { text: "ML-based Models", icon: <FaProjectDiagram /> },
    { text: "Natural Language Processing (NLP)", icon: <FaCommentDots /> },
  ],
  "Internet of Things (IoT)": [
    { text: "IoT-based Solutions", icon: <FaMicrochip /> },
    { text: "Device Management", icon: <FaTools /> },
    { text: "Data Analytics", icon: <FaChartLine /> },
  ],
};


    const innvocontainervaient = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
        },
      },
    };
    const invocard = {
      hidden: { y: -20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };
    const induscard = {
      hidden: { x: -20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

const InnovationSolution = () => {
  return (
    <div className="innovation-container-section">
      <div className="innovation-container-main">
        <div className="innovation-container-top">
          <h2>Building Innovative Solutions with Cutting-Edge Technologies</h2>
          <p>Our team can assist you in transforming your business with the latest tech capabilities to stay ahead of the curve.</p>
        </div>
        <div className="tech-container-cutting-edge">
          {Object.keys(technologyData).map((category, index) => (
            <div key={index} className="tech-section">
              <h3 className="tech-header">{category}</h3>
              <AnimatedCardList className="tech-list" containerVariants={innvocontainervaient}>
                {technologyData[category].map((item, idx) => (
                  <AnimatedCard key={idx} className="tech-item-item" variants={invocard}>
                  
                  <span className="tech-icon">{item.icon}</span>
                    {item.text}
                  </AnimatedCard>
                ))}
              </AnimatedCardList>
            </div>
          ))}
        </div>
      </div>
 
     <IndustriesWeServe cardVariants={induscard} containerVariants={innvocontainervaient}/>
    </div>

  );
};

export default InnovationSolution;
