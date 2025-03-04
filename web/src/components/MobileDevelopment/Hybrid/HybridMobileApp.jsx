import React from "react";
import Herosection2 from "../Herosection2";
import "./HybridMobileApp.css";
import webdevelopmentgraphics from "./../../../images/web-develop-graphics.png";
import SecondSection from "../SecondSection";
import ServiceSection from "../ServiceSection";
import hibrid from "./../../../images/hibrid.png";
import WhyChooseSection from "../WhyChooseSection";
import hibrid2 from "./../../../images/hibrid2.png";
import ConsultNow from "../../ConsultNow/ConsultNow";
import FaqSection from "../../FAQSection/FaqsSection";

export default function HybridMobileApp() {
  const comprehensivedata = [
    {
      id: 1,
      heading: "Hybrid Mobile App Development",
      description:
        "We create seamless hybrid apps that work across both iOS and Android platforms, providing a cost-effective solution for businesses.",
      className: "hybrid-mobile-development",
    },
    {
      id: 2,
      heading: "Cross-Platform Compatibility",
      description:
        "Our hybrid apps ensure smooth performance across multiple devices while maintaining a native-like experience.",
      className: "cross-platform-compatibility",
    },
    {
      id: 3,
      heading: "Performance Optimization",
      description:
        "We optimize hybrid apps for speed and efficiency, ensuring a seamless user experience with fast load times and responsiveness.",
      className: "performance-optimization",
    },
    {
      id: 4,
      heading: "App Testing & Quality Assurance",
      description:
        "We conduct rigorous testing to ensure your hybrid app meets high performance, usability, and security standards.",
      className: "app-testing-qa",
    },
  ];

  const whychoose = [
    {
      id: 1,
      heading: "Expert Hybrid App Developers",
      description:
        "Our team has extensive experience in hybrid app development using technologies like React Native, Flutter, and Ionic.",
      className: "expert-hybrid-developers",
    },
    {
      id: 2,
      heading: "Cost-Effective Solutions",
      description:
        "We provide budget-friendly hybrid app development services, ensuring maximum ROI with minimal costs.",
      className: "cost-effective-solutions",
    },
    {
      id: 3,
      heading: "Faster Development Time",
      description:
        "Hybrid apps allow for quicker development and deployment, reducing time-to-market for your application.",
      className: "faster-development-time",
    },
    {
      id: 4,
      heading: "Seamless Maintenance & Updates",
      description:
        "Easily maintain and update your hybrid apps with a single codebase for both iOS and Android platforms.",
      className: "seamless-maintenance-updates",
    },
  ];

  const faqs = [
    {
      question:
        "What are the benefits of choosing hybrid app development over native apps?",
      answer:
        "Hybrid apps allow businesses to save costs and time by using a single codebase for both iOS and Android, ensuring faster development, easier maintenance, and consistent performance across platforms.",
    },
    {
      question: "How long does it take to develop a hybrid mobile app?",
      answer:
        "The timeline depends on your app's complexity and features. A basic hybrid app takes 2-3 weeks, while more advanced applications with custom functionalities may take 2-4 months or more.",
    },
    {
      question:
        "Will a hybrid app provide the same performance as a native app?",
      answer:
        "Hybrid apps deliver high performance and responsiveness, and with the latest frameworks like React Native and Flutter, they can achieve a near-native experience. However, for extremely graphics-intensive applications (like gaming apps), a native solution might be more suitable.",
    },
  ];

  return (
    <div className="hybrid-mobile-app">
      <Herosection2
        heading="HYBRID MOBILE APP DEVELOPMENT"
        subtitle="Revolutionize your business, enhance customer engagement, and drive growth. With Apple's stringent quality standards and loyal user base, investing in iOS app development can help you tap into a lucrative market and stay ahead of the competition"
        className=" "
        heroimg={hibrid}
        imagclasName="imagclasName"
      />
      <div>
        <div className="hybrid-second-part">
          <h1 className="hybrid-second-part-heading">
            Explore Our Hybrid Application Development Potential
          </h1>
          <p className="hybrid-second-part-subtitle">
            Our developers are industry-leading experts in hybrid mobile apps
            development, bringing their expertise and years of experience to
            help you create powerful applications optimized for all screen sizes
          </p>
        </div>
        <SecondSection
          heading="Hybrid Mobile App Development"
          subtitle="In today's digital landscape, we empower businesses with innovative technologies that drive intelligent, data-driven insights and seamless interconnectivity. Our strategic approach transforms your digital strategy, delivering unparalleled business value across every touchpoint."
          className=" "
          heroimg={hibrid2}
        />
      </div>

      <ServiceSection
        data={comprehensivedata}
        name="Our comprehensive services include"
        subtitle="Mobulous excels in delivering high-quality Android app development, creating custom, feature-packed apps to meet your business needs, ensuring optimal performance and user satisfaction."
        className=""
      />
      <WhyChooseSection
        data={whychoose}
        name="Why Choose Us for Mobile App Development Solutions?"
        subtitle="Mobile app development is becoming increasingly popular for its various benefits such as:"
        className=""
      />
      <FaqSection faqs={faqs} />
      <ConsultNow />
    </div>
  );
}
