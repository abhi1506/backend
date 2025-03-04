import React from "react";
import Carousel from "react-bootstrap/Carousel";
import inventoryImage from "../../assets/Inventory.png";
import financialImage from "../../assets/financialanalysis1.jpg";
import workforceImage from "../../assets/workforce.png";
import "./Erp.css";
import ConsultNow from "../ConsultNow/ConsultNow";
import FaqSection from "../FAQSection/FaqsSection";

import {
  AnimatedCard,
  AnimatedCardList,
  ContainerVariants,
  FadeInFromLeft,
  FadeInDown,
} from "../animation/animation";
import HowItWorks from "./HowItWorks";
import IntegrationSection from "./IntegrationSection";
import CloudBenefitErp from "./CloudBenefitErp";

const faq = [
  {
    question: "What is an ERP system?",
    answer: "An ERP system integrates and manages core business processes.",
  },
  {
    question: "Is training provided?",
    answer: "Yes, we offer training sessions for all our plans.",
  },
  {
    question: "Is customer support available?",
    answer: "Absolutely! 24/7 customer support is included.",
  },
];
const HeroSection = () => {
  return (
    <div className="erp-hero">
      <div className="erp-hero-overlay">
        <FadeInFromLeft className="erp-hero-left">
          <h1>Cloud-Based ERP Software Services</h1>
          <p>
          Comprehensive, scalable, and secure ERP solutions streamline business operations, enhance productivity, and improve decision-making with real-time data insights—all in one powerful cloud platform
          </p>
        </FadeInFromLeft>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const featvariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section>
      <div className="container-erp">
        <h2 className="text-center mb-4  font-weight-bolder">Intelligent Cloud ERP Solutions for Business Efficiency</h2>
        <p className="text-center text-small text-white mb-5">
        Streamline Operations with Scalable, Secure, and AI-Powered ERP Software
        Optimize your business with our cloud-based ERP solutions, designed for seamless automation, real-time insights, and enhanced collaboration. From financial management to supply chain optimization, our ERP system empowers businesses to scale, improve efficiency, and stay competitive in a dynamic market
        </p>
        <AnimatedCardList className="row" containerVariants={ContainerVariants}>
          {[
            {
              title: "Inventory Management",
              text: "Track and optimize inventory levels efficiently.",
              img: inventoryImage,
            },
            {
              title: "Financial Analytics",
              text: "Monitor financial performance with real-time insights.",
              img: financialImage,
            },
            {
              title: "Workforce Management",
              text: "Streamline HR and payroll processes seamlessly.",
              img: workforceImage,
            },
          ].map((feature, index) => (
            <AnimatedCard
              variants={featvariants}
              className="col-md-4"
              key={index}
            >
              <div className="erp-card ">
                <div className="d-flex justify-content-center">
                  <img
                    src={feature.img}
                    className="erp-card-img-top"
                    alt={feature.title}
                  />
                </div>
                <div className="erp-card-body">
                  <h5 className="card-erp-title ">{feature.title}</h5>
                  <p className="card-erp-text ">{feature.text}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedCardList>
      </div>
    </section>
  );
};

const TestimonialsSection = () => (
  <section className="my-5 bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-5">What Our Clients Say</h2>
      <Carousel>
        {[
          {
            quote: "This ERP system revolutionized our business processes!",
            client: "John Doe, CEO",
          },
          {
            quote: "Exceptional features and easy to use.",
            client: "Jane Smith, Manager",
          },
          {
            quote: "Highly recommend it for growing companies.",
            client: "Mike Johnson, CTO",
          },
        ].map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="text-center">
              <p className="lead">"{testimonial.quote}"</p>
              <p>- {testimonial.client}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </section>
);
const HowItWorksSection = () => {
  const howitVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section className="how-it-works my-5">
      <div className="container">
        <h2 className="text-center font-weight-bolder mb-5">How It Works</h2>
        <p className="text-center text-small text-white mb-5">
          Discover how AmbiSpine Technologies simplifies business processes with
          our advanced ERP system.
        </p>
        <AnimatedCardList
          className=" step-box-card-main"
          containerVariants={ContainerVariants}
        >
          {[
            {
              step: "1",
              title: "Sign Up",
              text: "Create an account with AmbiSpine Technologies to get started.",
            },
            {
              step: "2",
              title: "Setup",
              text: "Customize the ERP system to meet your unique business needs.",
            },
            {
              step: "3",
              title: "Manage",
              text: "Monitor and manage your operations efficiently with our tools.",
            },
          ].map((process, index) => (
            <AnimatedCard
              variants={howitVariants}
              className="step-box-card "
              key={index}
            >
              <div>
                <p className="step-number">{process.step}</p>
              </div>
              <div className="step-box-card-body">
                <h5 className="font-weight-bold ">{process.title}</h5>
                <p>{process.text}</p>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedCardList>
      </div>
    </section>
  );
};

const ERPComponent = () => (
  <div className="erp-main-container">
    <HeroSection />
    <FeaturesSection />
    {/* <ERPFeatures /> */}
    <HowItWorks />
    {/* <HowItWorksSection /> */}
    <IntegrationSection />
    <CloudBenefitErp />
    
    <FaqSection faqs={faq} />
    <ConsultNow />
  </div>
);

export default ERPComponent;
