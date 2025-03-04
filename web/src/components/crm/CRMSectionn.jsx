

import React, { useEffect, useState } from "react";
import "./CRMSection.css"; // Import the CSS file

const CRMSectionn = () => {
  const [visibleSections, setVisibleSections] = useState([false, false, false]);

  useEffect(() => {
    const timer1 = setTimeout(
      () => setVisibleSections([true, false, false]),
      500
    );
    const timer2 = setTimeout(
      () => setVisibleSections([true, true, false]),
      1000
    );
    const timer3 = setTimeout(
      () => setVisibleSections([true, true, true]),
      1500
    );

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="crm-container">
      <div className="crm-header">
        <h1 className="crm-title">How Our CRM Boosts Sales And Productivity</h1>
        <p className="crm-subtitle">
          In today's fast-paced digital landscape, custom software development
          is crucial for businesses to stay ahead of the competition.
        </p>
      </div>

      <div className="crm-triangle-wrapper">
        <div className="crm-triangle">
          <div
            className={`crm-section crm-section1 ${
              visibleSections[0] ? "crm-visible-section" : ""
            }`}
          >
            <span className="crm-number">1</span>
          </div>
          <div
            className={`crm-section crm-section2 ${
              visibleSections[1] ? "crm-visible-section" : ""
            }`}
          >
            <span className="crm-number">2</span>
          </div>
          <div
            className={`crm-section crm-section3 ${
              visibleSections[2] ? "crm-visible-section" : ""
            }`}
          >
            <span className="crm-number">3</span>
          </div>
        </div>

        <div className="crm-content">
          {[1, 2, 3].map((num) => (
            <div key={num} className="crm-content-item">
              <h3 className="crm-content-title">Decentralized and Secure</h3>
              <p className="crm-content-text">
                Leveraging AI and ML technologies to improve decision-making and
                automate complex business processes.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CRMSectionn;
