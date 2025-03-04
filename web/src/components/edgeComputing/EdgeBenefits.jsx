import React from "react";
import "./EdgeBenefits.css";

const EdgeBenefits = () => {
  const benefits = [
    { title: "Low Latency", color: "#FFD700" },
    { title: "Enhanced Security", color: "#FFA500" },
    { title: "Real-time Processing", color: "#FF4444" },
    { title: "Scalability", color: "#FFD700" },
    { title: "Improved Reliability", color: "#FFA500" },
  ];

  return (
    <div className="benefits-container">
      <div className="benefits-content">
        <div className="benefits-left">
          <h2>Edge computing benefits and applications</h2>
          <p>
          Edge computing, combined with the cloud, enhances real-time decision-making, user experiences, and operational efficiency. It enables rapid response for critical applications like self-driving cars and telesurgery while optimizing high data volumes, privacy, and remote operations. Edge reduces costs, enhances security, and supports intelligent automation, digital experiences, and autonomous systems, driving continuous innovation and business growth.
          </p>
        </div>

        <div className="benefits-right">
          <div className="diamond-grid">
            {benefits.map((benefit, index) => (
              <div
                className={`diamond-item diamond-${index + 1}`}
                key={index}
                style={{ "--benefit-color": benefit.color }}
              >
                <div className="diamond-content">
                  <span>{benefit.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeBenefits;
