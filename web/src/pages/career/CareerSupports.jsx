import React from 'react';
import GirlImage1 from "../../assets/supportsection.png";
import workImg from "../../assets/content/work-matters.jpg";
import lifeImg from "../../assets/content/work-life.jpg";
import greatImg from "../../assets/content/great-team.jpeg";
import growthImg from "../../assets/content/growth.jpg";
import healthImg from "../../assets/content/health.jpg";
import techImg from "../../assets/content/latest-technology.jpeg";

import "./CareerSupports.css"
import {
  FadeInFromLeft,
  FadeInUp
} from "../../components/animation/animation";

const CareerSupports = () => {
  const supports = [
    {
      imgSrc: workImg,
      title: "Your Work Matters",
      description: "Make a real impact on global logistics and transportation.",
    },
    {
      imgSrc: greatImg,
      title: "Great Team",
      description: "Flexible pricing models designed to suit enterprises of all sizes.",
    },
    {
      imgSrc: techImg,
      title: "Latest Technology",
      description: "Flexible pricing models designed to suit enterprises of all sizes.",
    },
    {
      imgSrc: growthImg,
      title: "Growth Opportunities",
      description: "Flexible pricing models designed to suit enterprises of all sizes.",
    },
    {
      imgSrc: healthImg,
      title: "Health Benefits",
      description: "Flexible pricing models designed to suit enterprises of all sizes.",
    },
    {
      imgSrc: lifeImg,
      title: "Work-Life Balance",
      description: "Flexible pricing models designed to suit enterprises of all sizes.",
    },
  ];

  return (
    <div className="supports-container">
      <h1 className="supports-title">Supported by exceptional benefits.</h1>

      <div className="supports-content">
        <FadeInFromLeft className="supports-image-container"
        
        >
          <img
            src={GirlImage1}
            alt="Professional in business attire"
            className="professional-image"
          />
          <h3 className="">Experience</h3>
          <div className="professional-content">
          <h2 className="">Experience</h2>
          <p className="">
          Supported by exceptional benefits, cutting-edge technology, and a collaborative team, my role involves 
          implementing scalable solutions, optimizing performance, and enhancing user engagement within the platform.
          </p>
          </div>
        </FadeInFromLeft>

        <div className="supports-grid">
          {supports.map((support, index) => (
            <FadeInUp
            key={index}
            className="support-card"
            
          >
            <img src={support.imgSrc} alt="" />
            <h3 className=''>{support.title}</h3>
            <div className="support-card-content">
              <h2>{support.title}</h2>
              <p>{support.description}</p>
            </div>
          </FadeInUp>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerSupports;
