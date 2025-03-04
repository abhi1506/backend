import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaRobot, FaCloud, FaShieldAlt, FaChartBar } from "react-icons/fa"; 
import "./Stay.css"
const stayData = [
  {
    title: "Cloud Migration",
    description1: "Seamlessly transfer data to the cloud.",
    description2: "Minimize downtime during migration.",
    description3: "Ensure data integrity and security.",
    icon: <FaCloud />,
  },
  {
    title: "Data Analytics",
    description1: "Unlock actionable insights from data.",
    description2: "Use advanced tools for deep analysis.",
    description3: "Enhance decision-making processes.",
    icon: <FaChartBar />,
  },
  {
    title: "Security Solutions",
    description1: "Protect your data from cyber threats.",
    description2: "Implement robust security protocols.",
    description3: "Comply with industry regulations.",
    icon: <FaShieldAlt />,
  },
  {
    title: "AI Integration",
    description1: "Leverage AI for business automation.",
    description2: "Optimize workflows with machine learning.",
    description3: "Enhance customer experience through AI.",
    icon: <FaRobot />,
  },
];

const StayCards = () => {
  return (
    <div className="stay-cards-container">
      {stayData.map((card, index) => (
        <div className="stay-card" key={index}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="stay-body">
              <h4 className="stay-title">{card.title}</h4>
              <div className="stay-description">
                <IoArrowForwardCircle className="arrow-icon" />
                <p>{card.description1}</p>
              </div>
              <div className="stay-description">
                <IoArrowForwardCircle className="arrow-icon" />
                <p>{card.description2}</p>
              </div>
              <div className="stay-description">
                <IoArrowForwardCircle className="arrow-icon" />
                <p>{card.description3}</p>
              </div>
            </div>
            <div className="iconss">{card.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StayCards;
