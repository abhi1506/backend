import React from "react";
import "./SoftwareDevelopmentCard.css";

export default function SoftwareDevelopmentContainer() {
  const data1 = [
    {
      id: 1,
      header: "Requirement Analysis",
      subtitle:
        "Understanding business needs, identifying key objectives, and gathering functional requirements.",
    },
    {
      id: 2,
      header: "UI/UX Design",
      subtitle:
        "Creating intuitive, user-friendly designs to enhance user experience and engagement.",
    },
    {
      id: 3,
      header: "Development & Implementation",
      subtitle:
        "Writing clean, scalable code and integrating advanced technologies to build robust solutions.",
    },
    {
      id: 4,
      header: "Testing & Deployment",
      subtitle:
        "Ensuring software quality through rigorous testing before deployment to production.",
    },
  ];
  const data2 = [
    {
      id: 1,
      header: "AI-Powered Automation",
      subtitle:
        "Leverage Artificial Intelligence and Machine Learning for process automation, predictive analytics, and intelligent decision-making.",
    },
    {
      id: 2,
      header: "Cloud-Native Scalability",
      subtitle:
        "Develop cloud-based applications with high availability, performance, and scalability using AWS, Azure, or Google Cloud.",
    },
    {
      id: 3,
      header: "Blockchain Security",
      subtitle:
        "Enhance security and transparency with blockchain technology, ensuring tamper-proof transactions and secure data management.",
    },
    {
      id: 4,
      header: "IoT & Smart Connectivity",
      subtitle:
        "Integrate Internet of Things (IoT) devices to enable real-time monitoring, automation, and smart data collection.",
    },
    {
      id: 5,
      header: "Low-Code/No-Code Solutions",
      subtitle:
        "Accelerate development with drag-and-drop tools and pre-built integrations for faster software deployment.",
    },
  ];
  return (
    <div className="soft-dev-process-container">
      <h1 className="soft-dev-pro-head">Our Software Development Process</h1>
      <p className="soft-dev-pro-sub">
        We follow a structured approach to ensure successful project delivery
      </p>

      <SoftwareDevelopmentCard data1={data1} heading="Development Stages" />
      <SoftwareDevelopmentCard data1={data2} heading="Key Features" />
    </div>
  );
}

export function SoftwareDevelopmentCard({ data1, heading = "Content" }) {
  return (
    <div className="soft-development-section">
      <h4 className="soft-develop-sec-header">
        {heading || "Default Heading"}
      </h4>
      <div className="software-development-card-container">
        {data1.map((data) => (
          <div key={data.id} className="soft-develop-card">
            <h4 className="soft-dev-head">{data.header}</h4>
            <p className="soft-dev-sub">{data.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
