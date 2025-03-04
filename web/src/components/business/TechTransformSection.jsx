import React from "react";
import "./TechTransformSection.css";
import { AnimatedCardList, AnimatedCard, ContainerVariants } from "../animation/animation";
const TechTransformSection = () => {
  const solutions = [
    {
      title: "API Integration Solutions",
      description:
        "Seamlessly connect systems and applications to enable real-time data synchronization and improve workflow efficiency. ",
    },
    {
      title: " Smart Software Solutions",
      description:
        "Automate repetitive tasks to reduce human errors and increase overall productivity.",
    },
    {
      title: "Scalable Cloud Solutions",
      description:
        "Adapt quickly to business demands while cutting infrastructure costs and minimizing IT maintenance efforts.",
    },
  ];
  const techiants = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.6, ease: "circOut" } },
  };
  
  return (
    <section className="tech-transform-section">
      <h1 className="transform-title">
        Meet Technology That Transform The World
      </h1>
      <AnimatedCardList containerVariants={ContainerVariants} className="cards-container-tech">
        {solutions.map((solution, index) => (
          <AnimatedCard key={index} variants={techiants} className="solution-card-tech">
            <h2 className="card-title-tech">{solution.title}</h2>
            <p className="card-text-tech">{solution.description}</p>
          </AnimatedCard>
        ))}
      </AnimatedCardList>
    </section>
  );
};

export default TechTransformSection;
