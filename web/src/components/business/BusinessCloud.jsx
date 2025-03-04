import React from "react";
import "./BusinessCloud.css";
import {
  AnimatedCardList,
  AnimatedCard,
  ContainerVariants,
} from "../animation/animation";
import { useNavigate } from "react-router-dom";

const BusinessCloud = () => {
  const navigate = useNavigate();
  const buttonvariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "circOut" },
    },
  };
  const mobileButtons = [
    { id: 1, text: "iOS Development", path: "/services/ios-app-development" },
    {
      id: 2,
      text: "Android Development",
      path: "/services/android-app-development",
    },
    {
      id: 3,
      text: "Cross-Platform",
      path: "/services/content-management-system",
    },
    {
      id: 4,
      text: "Enterprise Apps",
      path: "/services/software-development-services",
    },
  ];

  const handleButtonClick = (path) => {
    navigate(path);
  };
  return (
    <section className="cloud-hero-businessCloud">
      <div className="hero-content-businessCloud">
        <h1 className="hero-title-businessCloud">
          Unlock The Cloud Transformation
        </h1>
        <p className="hero-description-businessCloud">
          We bring the cloud experience to all your IT and Business solutions.
          Our combination of public and private cloud infrastructure.
        </p>

        <AnimatedCardList
          className="mobile-buttons-businessCloud"
          containerVariants={ContainerVariants}
          role="group"
        >
          {mobileButtons.map((button) => (
            <AnimatedCard variants={buttonvariants}>
              <button
                key={button.id}
                className="mobile-btn-businessCloud"
                aria-label={`Explore ${button.text}`}
                onClick={() => handleButtonClick(button.path)}
              >
                {button.text}
              </button>
            </AnimatedCard>
          ))}
        </AnimatedCardList>
      </div>
    </section>
  );
};

export default BusinessCloud;
