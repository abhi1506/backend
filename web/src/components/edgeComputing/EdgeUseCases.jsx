import React from "react";
import { Cloud, Smartphone, Database, Monitor, BarChart } from "lucide-react";
import "./EdgeUseCases.css";

const EdgeUseCases = () => {
  const useCases = [
    {
      title: "Smart Device Integration",
      description:
        "Edge computing enables real-time data processing in IoT devices, reducing latency and improving efficiency.",
      icon: <Smartphone className="use-case-icon" />,
    },
    {
      title: "Cloud & Edge Synergy",
      description:
        "Combining cloud and edge computing allows businesses to optimize workloads while ensuring faster data access.",
      icon: <Cloud className="use-case-icon" />,
    },
    {
      title: "Data Management & Analytics",
      description:
        "Process data at the edge before sending it to central servers, reducing bandwidth costs and enhancing security.",
      icon: <Database className="use-case-icon" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Deploy AI models closer to users for real-time insights, improving predictive analysis and automation.",
      icon: <BarChart className="use-case-icon" />,
    },
  ];

  return (
    <div className="use-cases-container">
      <h2>Use Cases of Edge Computing</h2>

      <div className="use-cases-grid">
        {useCases.map((useCase, index) => (
          <div className="use-case-card" key={index}>
            <div className="icon-wrapper">{useCase.icon}</div>
            <div className="use-case-content">
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EdgeUseCases;
