import React from "react";
import heroImage from "../../assets/BusinessHeroImage.png";
import TechTransformSection from "./TechTransformSection";
import BusinessCloud from "./BusinessCloud";
import BusinessBenefits from "./BusinessBenefits";
import "./BusinessHero.css";

const BusinessHero = () => {
  return (
    <div className="business-pages">
      <section className="hero-section-business-busi">
        <div className="hero-content-container-busi">
          <h1 className="hero-title-busi">Business Solution</h1>
          <p className="hero-description-busi">
            Start Designs is an emerging web development company that offers
            website development services. Our in-house team and professional web
            developers use new technologies
          </p>
        </div>
        <div className="hero-image-container-busi">
          <img
            src={heroImage}
            alt="Business Growth Illustration"
            className="hero-image-busi"
          />
        </div>
      </section>
      <TechTransformSection />
      <BusinessCloud />
      <BusinessBenefits />
    </div>
  );
};

export default BusinessHero;
