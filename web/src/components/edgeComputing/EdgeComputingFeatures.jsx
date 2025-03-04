import React from "react";
import "./EdgeComputingFeatures.css";

const EdgeComputingFeatures = () => {
  const features = [
    {
      number: "1",
      title: "Data collection aur processing",
    },
    {
      number: "2",
      title: "Edge devices aur gateways",
    },
    {
      number: "3",
      title: "Cloud connectivity aur integration",
    },
  ];

  return (
    <div className="features-container-edge">
      <div className="features-content">
        <div className="features-left">
          <h2>What is Edge Computing?</h2>
          <p>
          Edge computing is a transformative paradigm that brings computing power closer to the data source, enabling faster processing, real-time insights, and greater efficiency. Unlike traditional centralized computing models, edge computing processes data at or near its origin, reducing latency and enhancing decision-making.<br/>
By leveraging edge computing, businesses can optimize asset management, improve operational efficiency, and unlock innovative user experiences. Key applications include self-driving cars, autonomous robots, smart equipment monitoring, and automated retail redefining industries with intelligent, real-time solutions.
          </p>
        </div>

        <div className="features-right">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-number">{feature.number}</div>
              <div className="feature-title">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EdgeComputingFeatures;
