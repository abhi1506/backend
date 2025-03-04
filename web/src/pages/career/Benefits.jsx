

import React from "react";
import "./Benefits.css";
import GirlImage from "../../assets/supportsection.png";
import {
  FadeInFromLeft,
  FadeInUp,
  ScaleAnimation,
} from "../../components/animation/animation";

const Benefits = () => {
  const benefits = [
    {
      title: "Your Work Matters",
      description: "Make a real impact on global logistics and transportation.",
    },
    {
      title: "Great Team",
      description:
        "Flexible pricing models designed to suit enterprises of all sizes.",
    },
    {
      title: "Latest Technology",
      description:
        "Flexible pricing models designed to suit enterprises of all sizes.",
    },
    {
      title: "Growth Opportunities",
      description:
        "Flexible pricing models designed to suit enterprises of all sizes.",
    },
    {
      title: "Health Benefits",
      description:
        "Flexible pricing models designed to suit enterprises of all sizes.",
    },
    {
      title: "Work-Life Balance",
      description:
        "Flexible pricing models designed to suit enterprises of all sizes.",
    },
  ];

  return (
    <div className="benefits-container">
      <h1 className="benefits-title">Supported by exceptional benefits.</h1>

      <div className="benefits-content">
        <FadeInFromLeft className="benefits-image-container">
          <img
            src={GirlImage}
            alt="Professional in business attire"
            className="professional-image"
          />
        </FadeInFromLeft>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <FadeInUp key={index} className="benefit-card">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </FadeInUp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
