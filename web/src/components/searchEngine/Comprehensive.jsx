import React from "react";
import "./Comprehensive.css";
import {FadeInDown, FadeInFromLeft, FadeInFromRight, AnimatedCardList, AnimatedCard, ContainerVariants, cardvarienttoptobottom , cardvarientbottomtotop} from '../animation/animation';

// Define SEO marketing data
const data = [
  {
    icon: "📊", 
    title: "Better Audiences",
    subtitle: "Reach the right people with targeted insights."
  },
  {
    icon: "📈",
    title: "Better Analytics",
    subtitle: "Gain deeper insights into user behavior."
  },
  {
    icon: "🏆",
    title: "Better Outcome",
    subtitle: "Drive better results with data-driven strategies."
  },
];

const Comprehensive = () => {
  return (
    <div className="hero-section-comprehense">
     <div className="comprehense-wrapper">
     <FadeInFromLeft className="hero-content-comprehense">
        <h1 className="hero-title-comprehense">Our Comprehensive SEO Services</h1>
        <p className="hero-description-comprehense">
          We offer top-notch SEO solutions, from social media marketing to email campaigns and consulting.
          Let’s help your business reach the right audience and maximize growth.
        </p>
      </FadeInFromLeft>

      {/* Right Side Cards */}
  
      <FadeInFromRight  className="comprehense-service-container">
        {data.map((market, index) => (
          <div variants={cardvarientbottomtotop} key={index} className="comprehense-service-card"
          style={{ marginLeft: index % 2 !== 0 ? "-2rem" : "0" }}
          >
            <div className="comprehense-service-icon">{market.icon}</div>
            <div className="comprehense-service-info">
              <h4>{market.title}</h4>
              <p>{market.subtitle}</p>
            </div>
          </div>
        ))}
      </FadeInFromRight>
      
     </div>
     
    </div>
  );
};

export default Comprehensive;
