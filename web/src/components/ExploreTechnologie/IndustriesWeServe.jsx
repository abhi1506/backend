import React from "react";
import { AnimatedCard, AnimatedCardList } from "../animation/animation";
import "./IndustriesWeServe.css";
import growth from './../../images/growth.svg';
import finance from './../../images/finance.svg';
import retail from './../../images/retail.svg';
import helthcare from './../../images/helthcare.svg';
import professional from './../../images/professional 1.svg';
import hand from './../../images/hand.svg';
import edu from './../../images/edu.svg';

const industries = [
      {
        src: growth,
        alt: "growth",
        text: "Track and manage leads effectively.",
        headText: "Lead Management",
      },
      {
        src: finance,
        alt: "finance",
        headText: "Sales Automation",
        text: "Automate repetitive sales tasks to save time.",
      },
      {
        src: retail,
        alt: "retail",
        headText: "Customer Analytics",
        text: "Client Management Project Management Time & Billing Document Management",
      },
      {
        src: helthcare,
        alt: "helthcare",
        headText: "Customer Analytics",
        text: "Client Management Project Management Time & Billing Document Management",
      },
      {
        src: professional,
        alt: "professional",
        headText: "Customer Analytics",
        text: "Client Management Project Management Time & Billing Document Management",
      },
      {
        src: edu,
        alt: "Image 4",
        headText: "Customer Analytics",
        text: "Client Management Project Management Time & Billing Document Management",
      },
      {
        src: hand,
        alt: "Image 4",
        headText: "Customer Analytics",
        text: "Client Management Project Management Time & Billing Document Management",
      },
    ];
const IndustriesWeServe = ({containerVariants,cardVariants}) => {
  return (
    <div className="industries-container">
      <div className="innovation-container-top">
        <h2>Industries We Serve</h2>
      </div>

      <AnimatedCardList className="industry-we-ser-container" containerVariants={containerVariants}>
        {industries.map((industry, index) => (
          <AnimatedCard key={index} className="industry-we-ser-card" variants={cardVariants}>
            <img src={industry.src} className="industry-we-card-img" alt={industry.alt} />
            <div>
              <h3 className="industry-we-card-title">{industry.headText}</h3>
              <p className="industry-we-card-subtitle">{industry.text}</p>
            </div>
          </AnimatedCard>
        ))}
      </AnimatedCardList>
    </div>
  );
};

export default IndustriesWeServe;
