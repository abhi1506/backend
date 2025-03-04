import React from "react";
import "./SoftwareDevelopmentCard.css";
import softwaredevelopment from './../../images/softwaredevelopment.png'
import { FadeInFromLeft } from "../animation/animation";
export default function SoftwareDevelopmentContainer() {
  const data1 = [
    {
      id: 1,
      header: "Business Productivity Solutions",
      subtitle:
        "Automate and streamline business processes.",
    },
    {
      id: 2,
      header: " Custom Software Development ",
      subtitle:
        "Tailor-made software solutions for your business needs.",
    },
    {
      id: 3,
      header: "Web & Mobile App Development",
      subtitle:
        " Enhance your digital presence with modern web and mobile apps.",
    },
    {
      id: 4,
      header: "Data Analytics & Business Intelligenc",
      subtitle:
        "Gain valuable insights from your data.",
    },
  ];
  const data2 = [
    {
      id: 1,
      header: "Scalability & Flexibility",
      subtitle:
        "Solutions that grow with your business.",
    },
    {
      id: 2,
      header: " User-Centric Design ",
      subtitle:
        "Designed with user preferences and experience in mind.",
    },
    {
      id: 3,
      header: "Secure & Reliable",
      subtitle:
        "Cutting-edge security and reliability for peace of mind.",
    },
    {
      id: 4,
      header: "Seamless Integration",
      subtitle:
        "Easily integrate with existing systems and third-party applications.",
    },
  ];
  return (
    <div className="soft-dev-process-container">
      <h1 className="soft-dev-pro-head">Our Software Development Process</h1>
      <p className="soft-dev-pro-sub">
        We follow a structured approach to ensure successful project delivery
      </p>
     
     <div className="soft-dev-process-container-section">
     <div className="soft-dev-process-container-section-left">
      <div className="soft-dev-process-container-section-left-main">
      
      <div>
      <SoftwareDevelopmentCard data1={data1} heading="Content" />
      </div>
      <div className="soft-dev-process-feature-section">
        <SoftwareDevelopmentCard data1={data2} heading="Feature" /></div>
      </div>
      </div>
      <div className="soft-dev-process-container-section-right">
        <div className="soft-dev-section-right-img-container">
        <img src={softwaredevelopment} className="softwate-development-img imagclasName" alt="text-description" />

        </div>
      </div>
     </div>

    </div>
  );
}

export function SoftwareDevelopmentCard({ data1, heading = "content" }) {
  return (
    <div className="soft-development-section">
      <h4 className="soft-develop-sec-header">
        {heading || "Default Heading"}
      </h4>
      <div className="software-development-card-container">
        {data1.map((data) => {
          return (
            <FadeInFromLeft key={data.id} className="soft-develop-card-card">
              <h4 className="soft-dev-head">{data.header}</h4>
              <p className="soft-dev-sub">{data.subtitle}</p>
            </FadeInFromLeft>
          );
        })}
      </div>
    </div>
  );
}
