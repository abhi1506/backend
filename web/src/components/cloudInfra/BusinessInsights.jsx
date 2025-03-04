import React from "react";
import "./BusinessInsights.css";
import businessImage from "../../assets/ccloudinfradiscuss.png";
import { FadeInFromLeft, FadeInFromRight } from "../animation/animation";

const BusinessInsights = () => {
  return (
    <section className="business-insights">
      <FadeInFromLeft className="text-content">
        <h2>Cloud Infrastructure Benefits for Business Growth</h2>
        <p>
        Enhance scalability, security, and efficiency with robust cloud infrastructure. Optimize costs, automate operations, and accelerate innovation with seamless data integration, advanced security, and high-performance cloud solutions tailored for business success
        </p>
      </FadeInFromLeft>
      <FadeInFromRight className="image-content">
        <img src={businessImage} alt="Business Team" />
      </FadeInFromRight>
    </section>
  );
};

export default BusinessInsights;
