

import React, { useEffect, useState } from "react";
import "./ProgressSteps.css";
import { FaUserPlus, FaChartLine, FaUsers, FaRocket } from "react-icons/fa";
import {
  AnimatedCardList,
  AnimatedCard,
  ContainerVariants,
  cardvarientlefttoright
} from "../../animation/animation";

const ProgressSteps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const progresteps = [
    {
      id: 1,
      title: "Const Effective Plans",
      description:
        "Create an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with",
      icon: <FaUserPlus />,
    },
    {
      id: 2,
      title: "Track Progress",
      description:
        "Create an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with",
      icon: <FaChartLine />,
    },
    {
      id: 3,
      title: "Engage Users",
      description:
        "Create an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with AmbiSpine Technologies to get startedCreate an account with",
      icon: <FaUsers />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < 3 ? prev + 1 : 3));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crm-progress-container">
      <div className="crm-progress-container-top">
      <h2 className="crm-progress-container-header">
        Revolutionize Your Business with CRM Solutions
      </h2>
      <p className="crm-progress-container-subtitle">
        How Our CRM Boots Sales And Productivity How Our CRM Boots Sales And
        Productivity How Our How Our CRM Boots Sales And ProductivityvHow Our
        How Our How Our CRM Boots Sales And ProductivityvHow Our
      </p>
      </div>
      <div className="crm-progress-steps">
        <div
          className="crm-progress-steps-progress-line"
          style={{ width: `${(activeStep - 1) * 33}%`, left: "16%" }}
        ></div>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`crm-progre-step ${activeStep >= step ? "active" : ""}`}
          >
            {step}
          </div>
        ))}
      </div>
     

      <AnimatedCardList containerVariants={ContainerVariants} className="progres-container-cards">
        {progresteps.map((step) => (
          <AnimatedCard variants={cardvarientlefttoright} key={step} className="progres-container-card">
            <p className="progres-container-card-icon">{step.icon}</p>
            <h4 className="">{step.title}</h4>
            <p className="progres-container-card-subtile">{step.description}</p>
          </AnimatedCard>
        ))}
      </AnimatedCardList>
    </div>
  );
};

export default ProgressSteps;
