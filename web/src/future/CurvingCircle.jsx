import React from "react";
import "./CurvingCircle.css";

const CurvingCircle = () => {
  const seoSteps = [
    "Website Audit",
    "Keyword Research",
    "Competitor Analysis",
    "On-Page Optimization",
    "Technical SEO",
    "Content Creation",
    "Link Building",
    "Local SEO",
    "Mobile Optimization",
    "Performance Monitoring",
  ];

  const leftSteps = seoSteps.slice(5, 10);
  const rightSteps = seoSteps.slice(0, 5); 

  return (
    <div className="seo-container">
      <h2 className="seo-title">Our SEO Process</h2>

      <div className="seo-wrapper">
        {/* Left Side (Curved) */}
        <div className="seo-left">
          {leftSteps.map((step, index) => {
            // Create curve effect using margin calculations
            const curveSpacingLeft = `${Math.pow(Math.abs(index - Math.floor(leftSteps.length / 2)), 1.5) * 10}px`;

            const leftStepStyle = {
              marginLeft: curveSpacingLeft,
              marginRight: `calc(${curveSpacingLeft} + 10px)`,
              backgroundColor: index % 2 === 0 ? "skyblue" : "orange",
              color: "white",
            };

            return (
              <div key={index} className="seo-step">
                <div className="seo-box left-box" style={leftStepStyle}>
                  {step}
                </div>
                <div className="seo-number">{index + 6}</div>
              </div>
            );
          })}
        </div>

        {/* Center Circle */}
        <div className="seo-center">
          <div className="seo-circle">Our SEO Process</div>
        </div>

        {/* Right Side (Straight Layout) */}
        <div className="seo-right">
  {rightSteps.map((step, index) => {
    // Create curve effect using margin calculations
    const curveSpacingRight = `${Math.pow(Math.abs(index - Math.floor(rightSteps.length / 2)), 1.5) * 10}px`;

    const rightStepStyle = {
      marginRight: `calc(${curveSpacingRight} + 10px)`, // Push outward
      marginLeft: curveSpacingRight,
      backgroundColor: index % 2 === 0 ? "#ff5733" : "#33b5e5", // Alternating colors
      color: "white",
    };

    return (
      <div key={index} className="seo-step">
        <div className="seo-number">{index + 1}</div>
        <div className="seo-box right-box" style={rightStepStyle}>
          {step}
        </div>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
};

export default CurvingCircle;
