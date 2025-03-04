import React from "react";
import "./BusinessBenefits.css";
import cloudSol from "../../assets/cloud solution 1.png";
import cyber from "../../assets/cybersecurity 1.png";
import consult from "../../assets/consulting 1.png";

// import React from "react";
import { AnimatedCardList, AnimatedCard, ContainerVariants } from "../animation/animation";

const BusinessBenefits = () => {
  const benefits = [
    {
      image: cloudSol,
      title: "Cloud Solutions & Migrations",
      description: (
        <span
          dangerouslySetInnerHTML={{
            __html:
              "Unlock the power of the cloud with secure, scalable, and cost-effective migration solutions. Improve system performance, reduce downtime, and enhance flexibility while optimizing costs. <br/>Our expert-led approach ensures seamless transitions, robust data security, and ongoing support, empowering your business with greater efficiency and resilience.",
          }}
        />
      ),
    },
    {
      image: cyber,
      title: "Cybersecurity & Compliance",
      description: (
        <span
          dangerouslySetInnerHTML={{
            __html:
              "Protect your business with advanced security solutions and compliance frameworks. <br/> Prevent cyber threats, safeguard sensitive data, and ensure adherence to industry regulations, reducing risks and enhancing trust.<br/> Our proactive approach strengthens your IT infrastructure, detects vulnerabilities, and mitigates security breaches for long-term business resilience.",
          }}
        />
      ),
    },
    {
      image: consult,
      title: " IT Consulting & Strategy",
      description: (
        <span
          dangerouslySetInnerHTML={{
            __html:
              "Maximize business efficiency with expert IT consulting and strategic planning. <br/> We design tailored solutions to optimize your IT infrastructure, enhance security, and align technology with business goals.<br/> Our data-driven approach ensures scalability, cost savings, and long-term resilience, empowering your business for future growth.",
          }}
        />
      ),
    },
  ];
  const benivariants = {
    hidden: { opacity: 0, y: -50 },
    show: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.6, ease: "circOut" } },
  };
  return (
    <div className="benefits-container">
      <h1 className="benefits-title">The Benefits of Our Business Continuity Solutions</h1>
      {/* <h2 className="benefits-subtitle">Continuity Solutions</h2> */}

      <AnimatedCardList className="benefits-list" containerVariants={ContainerVariants}>
        {benefits.map((benefit, index) => (
          <AnimatedCard key={index} variants={benivariants} className="benefit-item">
            <div className="benefit-image">
              <img src={benefit.image} alt={benefit.title} />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          </AnimatedCard>
        ))}
      </AnimatedCardList>
    </div>
  );
};

export default BusinessBenefits;
