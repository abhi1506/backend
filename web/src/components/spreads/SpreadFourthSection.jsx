
import React from "react";
import "./SpreadFourthSection.css";

export default function SpreadFourthSection({
  heading = "",
  maintext = "",
  title = "",
  img1 = "",
  img2 = "",
  order1 = "",
  order2 = "",
}) {
  return (
    <div className="spread-fourth-section">
      {/* Left Content */}
      <div className={`spread-fourth-section-left ${order1}`}>
        <h1 className="spread-second-section-header">
          {heading}
          <span className="spread-text">{maintext}</span> ads
        </h1>
        <p className="spread-second-section-subtitle">{title}</p>
      </div>

      {/* Right Image Section */}
      <div className="spread-fourth-image-container">
  {/* Gradient Background */}
  <div className="spread-fourth-gradient-bg"></div>
  
  {/* Background Image */}
  <img
    src={img1}
    className="spread-fourth-section-right-1"
    alt="Background Illustration"
  />

 
 
</div>

    </div>
  );
}
