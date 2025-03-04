import React from "react";
import "./CloudInfraSolution.css";
import ConsultNow from "../ConsultNow/ConsultNow";
import CloudBenefits from "./CloudBenefits";
import BusinessInsights from "./BusinessInsights";
import FaqSection from "../FAQSection/FaqsSection";
// import { BottomToTop } from "../animate/AnimatedComponent";
import { motion } from 'framer-motion';
import {AnimatedCardList, AnimatedCard, ContainerVariants,cardvarientlefttoright, cardvarientrighttoleft, FadeInFromRight } from "../animation/animation";
import cImge2 from "../../assets/c-2.png"

const faqData = [
  {
    question: "How can cloud infrastructure improve business scalability and efficiency?",
    answer:
      "Cloud infrastructure enables businesses to scale resources on demand, optimizing performance and cost-efficiency. Automated scaling, seamless data integration, and virtualization ensure uninterrupted operations and enhanced productivity",
  },
  {
    question: "What security measures are in place to protect cloud data?",
    answer:
      "Advanced security protocols, including encryption, multi-factor authentication, access control, and real-time monitoring, safeguard sensitive business data, ensuring compliance and protection against cyber threats",
  },
  {
    question: "Why choose Ambispine Technologies for cloud infrastructure solutions?",
    answer:
      "Ambispine Technologies delivers enterprise-grade cloud solutions tailored to business needs, offering secure, high-performance, and scalable infrastructure that drives digital transformation, innovation, and long-term growth",
  },
];

const CloudInfraSolution = () => {
  const computeServices = [
    {
      title: "Cloud Storage",
      description:
        "Reliable, secure, and scalable cloud storage solutions for seamless data management",
    },
    {
      title: "Cloud Networking",
      description:
        "High-performance, low-latency networking solutions for seamless cloud connectivity",
    },
    {
      title: "Cloud Security",
      description:
        "Comprehensive cloud security to protect data, applications, and infrastructure",
    },
    {
      title: "Cloud Virtualization",
      description:
        "Enhancing cloud performance and scalability with cutting-edge virtualization",
    },
  ];
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },   
  };
  
  return (
    <>
      <div className="infrastructure-wrapper p-5">
        <div className="infrastructure-container">
          <div className="header-section">
            <h1>Comprehensive Cloud Infrastructure Solutions by Ambispine Technologies</h1>
            <p>
            Ambispine provides high-performance, secure, and scalable cloud solutions, rigorously tested for reliability. Our expert team enhances operational efficiency, drives digital transformation, and empowers businesses with cutting-edge cloud infrastructure, ensuring top-tier security, performance, and seamless scalability in today’s dynamic digital ecosystem.
            </p>
          </div>

          <div className="content-section">
            <div>
              <AnimatedCardList containerVariants={ContainerVariants} className="services-column">
                {computeServices.map((service, index) => (
                  <AnimatedCard
                  key={index}
                  className="service-card-llus"
                  variants={index % 2 === 0 ? cardvarientlefttoright : cardvarientrighttoleft}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.9 }}
                >
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </AnimatedCard>
                
                
                ))}
              </AnimatedCardList>
            </div>

            <FadeInFromRight className="illustration-column">

             <motion.img
            src={cImge2}
            alt=""
            className="cloud-illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
            </FadeInFromRight>
          </div>
        </div>
      </div>
      <CloudBenefits />
      <BusinessInsights />
      <FaqSection faqs={faqData} />
      <ConsultNow />
    </>
  );
};

export default CloudInfraSolution;
