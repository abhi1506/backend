import React from "react";
import Herosection2 from "./../Herosection2";
import SecondSection from "./../SecondSection";
import ServiceSection from "./../ServiceSection";
import WhyChooseSection from "./../WhyChooseSection";
import FaqSection from "./../../FAQSection/FaqsSection";
import ConsultNow from "../../ConsultNow/ConsultNow";

import androidhere from "./../../../images/androidhere.png";
import android2 from "../../../images/android2.png";

import "./AndroidMobileApp.css";

export default function AndroidMobileApp() {
  const androidMobileApp = [
    {
      id: 1,
      heading: "Custom Android App Development",
      description:
        "We create bespoke Android applications tailored to meet your business needs and user expectations.",
      className: "custom-android-services",
    },
    {
      id: 2,
      heading: "App Consulting",
      description:
        "Our expert consultants help you define your Android app requirements, identify target audiences, and determine the best features and functionalities.",
      className: "android-app-consulting",
    },
    {
      id: 3,
      heading: "App UI/UX Design",
      description:
        "Our skilled designers craft intuitive and engaging Android app interfaces that enhance user experience and brand visibility.",
      className: "android-app-design",
    },
    {
      id: 4,
      heading: "App Testing & Quality Assurance",
      description:
        "We conduct rigorous testing to ensure your Android app is secure, bug-free, and provides a seamless experience across devices.",
      className: "android-app-testing",
    },
  ];

  const whyChooseAndroid = [
    {
      id: 1,
      heading: "Experienced Developers",
      description:
        "Our Android development team has extensive experience in building scalable, high-performance applications.",
      className: "expert-android-team",
    },
    {
      id: 2,
      heading: "Agile Development Process",
      description:
        "We follow an agile methodology to ensure timely delivery and efficient updates based on your evolving needs.",
      className: "android-agile-methodology",
    },
    {
      id: 3,
      heading: "User-Centric Design",
      description:
        "We focus on user experience, ensuring intuitive navigation, accessibility, and visual appeal in every app we build.",
      className: "android-user-centric",
    },
    {
      id: 4,
      heading: "Affordable Solutions",
      description:
        "We offer cost-effective Android app development solutions without compromising on quality or performance.",
      className: "android-cost-effective",
    },
  ];

  const faqs = [
    {
      question:
        "Does your Android app development company sign an NDA to secure my app idea?",
      answer:
        "Yes. The first task of our team is to sign an NDA to maintain the app's security and privacy. You can trust us that your Android app development ideas will be completely safe.",
    },
    {
      question: "How long does it take to develop an Android app?",
      answer:
        "The timeline depends on the complexity of the project, but typically ranges from 4 to 12 weeks.",
    },
    {
      question: "Do you provide support after the Android app is launched?",
      answer:
        "Yes, we provide user-friendly CMS solutions or ongoing maintenance services for updates.",
    },
  ];

  return (
    <div className="android-mobile-app">
      {/* Hero Section */}
      <Herosection2
        heading="ANDROID APP DEVELOPMENT SERVICES"
        subtitle="Technology helps things get better!! It helps things get smaller, faster, and easier much and much better. Your android app has to be one that boosts the image of your company. It should have those features that your audience can use with ease. Android applications help in boosting the revenue and gaining maximum growth."
        heroimg={androidhere}
        imagclasName="imagclasName"
      />

      {/* Second Section */}
      <SecondSection
        heading="We are your Hero for Android App Development Solutions."
        subtitle="Each feature goes into multiple rounds of testing. Our dedicated team works round the clock to provide a wide range of Android app development services under one roof. Our Android app development skills have helped our clients achieve their goals and succeed in their respective industries."
        heroimg={android2}
      />

      {/* Service Section */}
      <ServiceSection
        data={androidMobileApp}
        name="Our Comprehensive Services Include"
        subtitle="Mobulous excels in delivering high-quality Android app development, creating custom, feature-packed apps to meet your business needs, ensuring optimal performance and user satisfaction."
      />

      {/* Why Choose Us Section */}
      <WhyChooseSection
        data={whyChooseAndroid}
        name="Why Choose Us for Mobile App Development Solutions?"
        subtitle="Mobile app development is becoming increasingly popular for its various benefits such as:"
      />

      {/* FAQs Section */}
      <FaqSection faqs={faqs} />

      {/* Get Free Consultation CTA */}
      <ConsultNow />
    </div>
  );
}
