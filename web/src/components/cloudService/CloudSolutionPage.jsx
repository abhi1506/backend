import React, { Fragment } from "react";
import "./CloudSolution.css";
import cloud5 from "../../assets/CloudSolution5.jpeg";
import CloudSolutioncardsDes from "./CloudSolutioncardsDes";
import FaqSection from "../FAQSection/FaqsSection";
import CloudSolutionHero from "./CloudSolutionHero";
import ConsultNow from "../ConsultNow/ConsultNow";
import { AnimatedCard, AnimatedCardList, ContainerVariants, FadeInFromLeft, FadeInFromRight } from "../animation/animation";
import Herosection2 from "../MobileDevelopment/Herosection2";
import cloud from './../../images/cloud-hero.png'
import { FaHospital, FaCreditCard, FaBrain, FaIndustry, FaGlobe, FaRobot } from "react-icons/fa";

const CloudSolutionPage = () => {
  const cloude = {
    hidden: { x: -40, opacity: 0 },
  show: {
    opacity: 1,
    x: 0,

    transition: { duration: 0.8, ease: "easeOut" },
  },
};
  const cardsData = [
    {
      title: "Infrastructure as a Service (IaaS)",
      subtitle: "Customize the ERP system to meet your unique business needs.",
      position: "top",
    },
    {
      title: "Platform as a Service (PaaS)",
      subtitle:
        "Provides a platform allowing customers to develop, run, and manage applications without the complexity of infrastructure.",
      position: "left",
    },
    {
      title: "Software as a Service (SaaS)",
      subtitle:
        "Software applications hosted in the cloud and available over the internet.",
      position: "right",
    },
    {
      title: "Cloud Security",
      subtitle:
        "Ensures the protection of data and applications in cloud environments, providing security solutions.",
      position: "center",
    },
    {
      title: "Cloud Migration",
      subtitle:
        "Ensures the protection of data and applications in cloud environments, providing security solutions.",
      position: "bottom",
    },
  ];
  const benefitsData = [
    {
      title: "Cost Efficiency",
      description:
        "Improve cost efficiency by reducing on-premises infrastructure and enabling pay-as-you-go models.",
    },
    {
      title: "Boosted Productivity",
      description:
        "Cloud-based solutions ensure that your team can work seamlessly across various locations.",
    },
    {
      title: "Increased Security",
      description:
        "Cloud providers offer advanced security measures to protect sensitive data.",
    },
    {
      title: "Disaster Recovery",
      description:
        "Ensure business continuity with automated data backups and disaster recovery solutions.",
    },
  ];
  const faqs = [
    {
      question: "What is Cloud Computing in Business?",
      answer:
        "Cloud computing in business involves delivering computing services like servers, storage, and applications over the internet.",
    },
    {
      question: "Is Using the Cloud Safe?",
      answer:
        "Yes, cloud providers invest heavily in security, but businesses must also implement their own security measures.",
    },
    {
      question: "Is Cloud Reliability a Concern?",
      answer:
        "Cloud reliability depends on the provider. Most reputable providers offer high availability and disaster recovery options.",
    },
    {
      question: "Do You Need Internet to Access the Cloud?",
      answer:
        "Yes, an internet connection is typically required to access cloud services.",
    },
  ];
  return (
      
        <div className="cloud-pages">
      {/* <CloudSolutionHero/> */}
      <Herosection2
        heading="Cloud Solutions"
        subtitle="Start Designs is an emerging web development company that offers website development services. Our in-house team and professional web developers use new technologies."
        heroimg={cloud}
        imagclasName='cloud-imagclasName'
        />
        

        <div className="cloud-sol-container">
          <CloudSolutioncardsDes />
          {/* Benefits Section */}
          <section className="benefits-sol">
            <div className="benefits-sol-container">
              <h2>Benefits of Cloud Computing</h2>
              <p>
                With countless businesses now employing hybrid working models to
                allow employees to work both on-site and remotely, it is vital
                that your team can access what they need when they need it.
              </p>
            </div>
            <AnimatedCardList className="benefits-cards-colude-sol" containerVariants={ContainerVariants}>
              {benefitsData.map((item, index) => (
                <AnimatedCard key={index} className="card-colude" variants={cloude}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </AnimatedCard>
              ))}
            </AnimatedCardList>
          </section>

          {/* Cloud Security Section */}
          <section className="cloud-security-container">
            <div className="cloud-security">
            <FadeInFromLeft className="security-left-content">
              <h1>Cloud Security: Protecting Your Data</h1>
              <p>
                Start Designs is an emerging web development company that offers
                website development services. Our in-house team and professional
                web developers use new technologies..
              </p>
            </FadeInFromLeft>
            <FadeInFromRight className="security-right-content">
              <img src={cloud5} alt="Cloud Security" />
            </FadeInFromRight>
            </div>
           
          </section>
        
          <section className="startups-section">
          <h2 className="startups-cloud-heading">Who Needs Cloud Solutions?</h2>

  <div className="startups-grid">
    {[
      { icon: <FaHospital />, title: "Healthcare Industry", desc: "Secure cloud solutions with HIPAA compliance." },
      { icon: <FaCreditCard />, title: "Financial Services", desc: "Real-time transactions & AI fraud detection." },
      { icon: <FaBrain />, title: "AI & ML Startups", desc: "Train & deploy machine learning models at scale." },
      { icon: <FaIndustry />, title: "Manufacturing", desc: "Optimize production with cloud-based automation." },
      { icon: <FaGlobe />, title: "E-Commerce", desc: "Scalable cloud hosting for global sales & operations." },
      { icon: <FaRobot />, title: "IoT & Robotics", desc: "Edge computing & cloud AI for connected devices." }
    ].map((item, index) => (
      <div key={index} className="startup-card">
        <div className="startup-icon">{item.icon}</div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>
</section>
        </div>
        <FaqSection faqs={faqs} />
        <ConsultNow/>
        </div>
     
  );
};

export default CloudSolutionPage;
