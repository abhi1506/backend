import React from "react";
import { FaArrowDown } from "react-icons/fa";
import explore from "./ExploreHeroSection.module.css";
import { FadeInFromLeft, FadeInFromRight } from "../animation/animation";

const ExploreHeroTechnology = ({
  heading,
  subtitle,
  heroId,
  heroimg,
  backgroundImage,
  className,
  imagclasName,
}) => {
  return (
    <div
      className={`${explore["hero-explore-tech-container"]} ${className || ""}`}
      id={heroId}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className={explore["hero-explore-tech-main"]}>
        <div className={explore["hero-explore-tech-main-left"]}>
          <FadeInFromLeft className={explore["hero-explore-tech-left-content"]}>
            <h1 className={explore["hero-explore-tech-heading"]}>{heading}</h1>
            <p className={explore["hero-explore-tech-subtitle"]}>{subtitle}</p>
          </FadeInFromLeft>
        </div>
        <div className={explore["hero-explore-tech-main-right"]}>
          <FadeInFromRight className={explore["hero-explore-tech-img-container"]}>
            <img
              src={heroimg}
              className={`${explore["hero-explore-tech-img"]} ${imagclasName || ""}`}
              alt="Technology illustration"
            />
          </FadeInFromRight>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeroTechnology;
