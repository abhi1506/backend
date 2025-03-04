import React from "react";
import "./CrmFourthSection.css";
import { FaUserPlus, FaChartLine, FaUsers, FaRocket } from "react-icons/fa";
import {
  AnimatedCardList,
  AnimatedCard,
  ContainerVariants,
  cardvarienttoptobottom,
} from "../../animation/animation";
export default function CrmFourthSection() {
  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description:
        "Create an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get started..",
      icon: <FaUserPlus />,
    },
    {
      id: 2,
      title: "Track Progress",
      description:
        "Create an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get started..",
      icon: <FaChartLine />,
    },
    {
      id: 3,
      title: "Engage Users",
      description:
        "Create an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get started..",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "Boost Productivity",
      description:
        "Create an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get started..",
      icon: <FaRocket />,
    },
  ];
  return (
    <div className="crm-fourth-container">
     <div className="crm-fourth-wrapper">
     <div className="crm-fourth-container-top">
        <h2 className="crm-fourth-container-header">
          How Our CRM Boots Sales And Productivity
        </h2>
        <p className="crm-fourth-container-subtitle">
          How Our CRM Boots Sales And Productivity How Our CRM Boots Sales And
          Productivity How Our How Our CRM Boots Sales And ProductivityHow Our
          CRM Boots Sales And Productivity
        </p>
      </div>
      <AnimatedCardList
        containerVariants={ContainerVariants}
        className="crm-fourth-card-container"
      >
        {steps.map((step) => (
          <AnimatedCard
            variants={cardvarienttoptobottom}
            key={step.id}
            className="crm-fourth-card"
          >
            <div className="crm-fourth-card-arrow-shape">
              <h4 className="crm-fourth-stop-icon">{step.id}</h4>
            </div>
            <div className="crm-fourth-card-content">
              <h4 className="crm-fourth-card-content-header">{step.title}</h4>
              <p className="crm-fourth-card-content-subtitle">
                {step.description}
              </p>
            </div>
          </AnimatedCard>
        ))}
      </AnimatedCardList>
     </div>
    </div>
  );
}
