import React, { useEffect, useState } from "react";
import "./CloudBenefitErp.css";
import { FadeInDown, FadeInUp, ScaleAnimation } from "../animation/animation";

const CloudBenefitErp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: "🔄",
      title: "Scalability",
      description:
        "Scale your resources as needed with AmbiSpine Technologies.",
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Pay only for what you use with our flexible pricing.",
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Enterprise-grade security to protect your data.",
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "High-speed global infrastructure for seamless operations.",
    },
    {
      icon: "🔄",
      title: "Reliability",
      description: "99.99% uptime guarantee for uninterrupted service.",
    },
    {
      icon: "🌐",
      title: "Global Access",
      description: "Access your data and applications from anywhere.",
    },
  ];

  return (
    <section className="cloud-benefits-erp">
      <div className="cloud-benefits-wrapper-erp">
        <h1
          className={`cloud-benefits-heading-erp ${isVisible ? "animate" : ""}`}
        >
          Benefits of Cloud-Based ERP Software for Modern Businesses
        </h1>
        <FadeInUp className="cloud-benefits-grid-erp">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`cloud-benefit-card-erp ${isVisible ? "animate" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cloud-benefit-icon-erp">{benefit.icon}</div>
              <h3 className="cloud-benefit-title-erp">{benefit.title}</h3>
              <p className="cloud-benefit-description-erp">
                {benefit.description}
              </p>
            </div>
          ))}
        </FadeInUp>
      </div>
    </section>
  );
};

export default CloudBenefitErp;
