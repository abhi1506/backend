import React from "react";
import "./AboutHeroPage.css";
import AboutHeroUpdated from "../../assets/BusinessTeam.jpeg";
import {
  FadeInFromLeft,
  FadeInFromRight,
} from "../../components/animation/animation";

const AboutHeroPage = () => {
  return (
    <div className="who-we-are">
      <div className="content-wrapper">
        <FadeInFromLeft className="text-content">
          <h1>Leading IT Solutions Provider : Who We Are</h1>
          <p>
            Ambispine Technologies is your trusted IT support partner. At
            Ambispine, we're passionate about harnessing the power of technology
            to drive business growth and innovation.
          </p>
        </FadeInFromLeft>
        <FadeInFromRight className="image-content">
          <img
            src={AboutHeroUpdated}
            alt="Ambispine Technologies Team"
            className="team-image"
          />
        </FadeInFromRight>
      </div>
    </div>
  );
};

export default AboutHeroPage;
