import React from "react";
import "./CloudSolutioncardsDes.css";
import { AnimatedCard, AnimatedCardList, ContainerVariants } from "../animation/animation";

const CloudSolutioncardsDes = () => {

  const cardsData = [
    {
      title: "Infrastructure as a Service (IaaS)",
      subtitle: "Customize the ERP system to meet your unique business needs.",
    },
    {
      title: "Platform as a Service (PaaS)",
      subtitle:
        "Provides a platform allowing customers to develop, run, and manage applications without the complexity of infrastructure.",
    },
    {
      title: "Software as a Service (SaaS)",
      subtitle:
        "Software applications hosted in the cloud and available over the internet.",
    },
    {
      title: "Cloud Security",
      subtitle:
        "Ensures the protection of data and applications in cloud environments, providing security solutions.",
    },
    {
      title: "Cloud Migration",
      subtitle:
        "Ensures the protection of data and applications in cloud environments, providing security solutions.",
    },
  ];

  const firstCardVariants = {
    hidden: { opacity: 0, x: 5, scale: 1 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  
  const thirdCardVariants = {
    hidden: { opacity: 0, x: 5, scale: 1 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.8 }, // Delay by 0.8s (duration of first card)
    },
  };
  return (
    <section className="cloud-solutions_desc">
      <div className="cloud-solutions-content_desc">
        <h1>Our Comprehensive Cloud Solutions</h1>
        <div className="cards-container-cloud_desc">
          <AnimatedCardList className="cloud-sol-dice_desc" containerVariants={ContainerVariants}>
            <AnimatedCard className="row first-row" variants={firstCardVariants}>
              <div className="card-cloud-sol_desc"> 
                <h3>{cardsData[0].title}</h3>
                <p>{cardsData[0].subtitle}</p>
              </div>
              <div className="card-cloud-sol_desc"> 
                <h3>{cardsData[1].title}</h3>
                <p>{cardsData[1].subtitle}</p>
              </div>
            </AnimatedCard>

            <div className="row justify-content-center" >
              <div className="card-cloud-sol_desc "> 
                <h3>{cardsData[2].title}</h3>
                <p>{cardsData[2].subtitle}</p>
              </div>
            </div>

            <AnimatedCard className="row third-row" variants={thirdCardVariants}>
              <div className="card-cloud-sol_desc"> 
                <h3>{cardsData[3].title}</h3>
                <p>{cardsData[3].subtitle}</p>
              </div>
              <div className="card-cloud-sol_desc"> 
                <h3>{cardsData[4].title}</h3>
                <p>{cardsData[4].subtitle}</p>
              </div>
            </AnimatedCard>
          </AnimatedCardList>
        </div>
      </div>
    </section>
  );
};

export default CloudSolutioncardsDes;

