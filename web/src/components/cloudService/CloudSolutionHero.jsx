import React from "react";
import "./CloudSolutionHero.css";
import cloudIcon from "../../assets/content/cloudeIcon.png";

const CloudSolutionHero = () => {
  return (
    <section className="cloud-solution-hero">
      <div className="cloud-solution-hero-content">
        <div className="img-content-icon">
          <img src={cloudIcon} alt="Cloud Icon" className="img-icon" />
          <h1>Cloud Solutions</h1>
        </div>
        <p >
          Start Designs is an emerging web development company that offers
          website development services. Our in-house team and professional
          web developers use new technologies.
        </p>
      </div>
    </section>
  );
};

export default CloudSolutionHero;
