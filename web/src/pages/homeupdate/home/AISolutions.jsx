// AISolutions.jsx
import React from "react";
import "./AiSolutions.css";
import cloudHome from "../../../assets/cloudHome.jpg";
import solutionIcon1 from "../../../assets/cloud22 (3).jpg";
import solutionIcon2 from "../../../assets/cloud22 (4).jpg";
import solutionIcon3 from "../../../assets/cloud22 (5).jpg";
import AiHome1 from "../../../assets/cloud22 (8).jpg";
import AiHome2 from "../../../assets/cloud22 (7).jpg";
import AiHome3 from "../../../assets/cloud22 (6).jpg";
import AiHome4 from "../../../assets/cloud22 (2).jpg";
import cloudAiImage1 from "../../../assets/cloudAiImage1.png";
import cloudAiImage2 from "../../../assets/cloudAiImage2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FadeInFromLeft,
  FadeInDown,
  FadeInFromRight,
  ContainerVariants,
  AnimatedCardList,
  AnimatedCard,
} from "../../../components/animation/animation";

const CloudCard = ({ title, description, backgroundImage, redirectlink }) => (
  <div
    className="cloud-card-home-page"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url(${backgroundImage})`,
    }}
  >
    <div className="card-content-home-page">
      <div className="glow-overlay-home-page"></div>
      <div className="content-wrapper-home-page">
        <h3>{title}</h3>
        <p style={{ color: "#ffffff", textAlign: "start" }}>{description}</p>
        <Link className="expand-button" to={redirectlink}>
          <span>Expand</span>
          
          <svg
            className="arrow-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 6 15 12 9 18"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

const FeatureItem = ({ icon, description, index, isHovered }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`feature-ai-item-container ${
        isHovered ? (isEven ? "move-right" : "move-left") : ""
      }`}
    >
      <div className="ai-feature-item">
        <div className="feature-icon-wrapper">
          <div className="icon-background"></div>
          <img src={icon} alt="" className="feature-icon" />
        </div>
        <div className="ai-feature-content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const AISolutions = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);
  const cloudCards = [
    {
      title:
        "Embrace the Cloud Booster: Elevate Your Business with Cloud Expertise",
      description:
        "Unlock the full power of cloud computing with Ambispine Technologies. Our secure, flexible, and scalable cloud solutions provide the infrastructure your business needs to enhance productivity, reduce costs, and foster seamless collaboration.",
      backgroundImage: cloudHome,
      redirectlink: "/services/cloud-solution-and-data-migration",
    },
    {
      title: "Scale Your Business Using Robust SaaS Technology",
      description:
        "Empower your enterprise with scalable, reliable, and on-demand computing resources that require minimal management effort. Our advanced SaaS technology boosts efficiency and flexibility, enabling essential services through interconnected systems and a solid foundational infrastructure. Experience seamless growth and streamlined operations as you harness the power of our robust cloud solutions.",
      backgroundImage: cloudAiImage1,
      redirectlink: "/services/cloud-infastructure",
    },
    {
      title:
        "Revolutionize Your Business With Scalable, Secure, And Reliable Cloud Solutions",
      description:
        "Experience the transformative power of cloud computing with Ambispine Technologies. Our adaptable, secure, and scalable infrastructure is designed to streamline operations, reduce costs, and enhance collaboration, driving your business forward in today’s digital landscape.",
      backgroundImage: cloudAiImage2,
      redirectlink: "services/edge-computing",
    },
  ];

  const features = [
    {
      icon: AiHome1,
      description:
        "AI-powered chatbots automate customer interactions, providing instant responses and support.",
    },
    {
      icon: AiHome2,
      description:
        "Tools monitor brand reputation by analyzing user sentiments and feedback across social platforms.",
    },
    {
      icon: AiHome3,
      description:
        "Personalized content feeds based on user preferences and behavior, enhancing user engagement.",
    },
    {
      icon: AiHome4,
      description:
        "AI analyzes engagement patterns to determine the best times to post content for maximum reach and interaction.",
    },
  ];

  return (
    <div className="ai-solutions-home-page">
      <div className="cloud-cards-home-page">
        {cloudCards.map((card, index) => (
          <CloudCard key={index} {...card} />
        ))}
      </div>

      <div
        className="solutions-section-home-page"
        // style={{ backgroundColor: "black" }}
      >
        <FadeInFromLeft className="solutions-content-home-page ">
          <h2>AI-Powered Solutions</h2>
          <p className="solutions-description">
            We offer cutting-edge AI solutions tailored to revolutionize your
            operations. Our services include intelligent automation.
          </p>
          <div className="solution-icons">
            <img src={solutionIcon1} alt="AI Solution 1" />
            <img src={solutionIcon2} alt="AI Solution 2" />
            <img src={solutionIcon3} alt="AI Solution 3" />
            <img src={cloudHome} alt="AI Solution 4" />
          </div>
        </FadeInFromLeft>

       
        <FadeInFromRight>
          <div
            className="ai-features-list"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            containerVariants={ContainerVariants}
          >
            {features.map((item, index) => (
              <FeatureItem
                key={index}
                icon={item.icon}
                description={item.description}
                index={index}
                isHovered={isHovered}
              />
            ))}
          </div>
        </FadeInFromRight>
      </div>
    </div>
  );
};

export default AISolutions;
