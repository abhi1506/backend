

import React from "react";
import "./HeroSection.css";

const HeroSection = ({
  icon,
  title,
  subtitle,
  bgImage,
  overlayColor = "rgba(0, 0, 0, 0.6)",
  textAlign = "center",
}) => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: textAlign,
  };

  return (
    <div className="hero-section" style={backgroundStyle}>
      <div className="hero-container">
        <div className="hero-content">
          {icon && <div className="hero-icon">{icon}</div>}
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
