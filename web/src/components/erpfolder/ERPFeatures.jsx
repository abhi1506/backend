import React from "react";
import "./ERPFeatures.css";
import inventoryImage from "../../assets/Inventory.png";
import financialImage from "../../assets/financialanalysis1.jpg";
import workforceImage from "../../assets/workforce.png";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const ERPFeatures = () => {
  const features = [
    {
      image: inventoryImage,
      title: "Inventory Management",
      description: "Track and optimize inventory levels efficiently.",
    },
    {
      image: financialImage,
      title: "Financial Analytics",
      description: "Monitor financial performance with real-time insights.",
    },
    {
      image: workforceImage,
      title: "Workforce Management",
      description: "Streamline HR and payroll processes seamlessly.",
    },
  ];

  return (
    <div className="erp-container">
      <div className="erp-header">
        <h1>Intelligent Cloud ERP Solutions for Business Efficiency</h1>
        <p>
          Transform your ideas into impactful content with our expert writers.
          From blogs to SEO-friendly articles, we deliver content that
          resonates.
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ERPFeatures;
