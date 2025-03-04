import React from "react";
import "./ExploreTechnologie.css";
import ExploreHeroSection from "./ExploreHeroTechnologi";
import exloretechnologi from "./../../images/exloretechnologi.png";
import processdevelop from "./../../images/processDevelop.png";
import SecondSection from "../MobileDevelopment/SecondSection";
import { BiCodeAlt } from "react-icons/bi";
import SoftwareProduct from "./OurSoftwareProduct";
import Technologies from "./TechToolsSlider";
import ConsultNow from "../ConsultNow/ConsultNow";
import InnovationSolution from './InnovationSolution';
import useIntersectionObserver from "../animation/useIntersectionObserver";
import{useRef} from 'react'
import ExploreServices from "./ExploreServices";


export default function ExploreTechnologe() {
  const cardRefs = useRef([]);
  cardRefs.current = []

  const handleCardVisibility = (card) => {
    card.style.visibility = 'visible'; 
    card.style.opacity = 1; // Set opacity to 1 to show the card
    card.classList.add(`explore-card-${index}`); // Add class to trigger animation
  };

  cardRefs.current.forEach((card, index) => {
    useIntersectionObserver((cardElement) => handleCardVisibility(cardElement), 0.5);
  });



  const services = [
    { title: "Custom Software Development" },
    { title: "Mobile App Development" },
    { title: "Web Application Development" },
    { title: "Consultancy & Strategy" },
    { title: "UX/UI Design" },
  ];

  const softwaredevesercontainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const softwaredevcard = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="explore-technologies-pages">
      <div className="explore-hero-section">
        <ExploreHeroSection
          heading="Explore Technologies We Transform "
          subtitle="Technology helps things get better!! It helps things get smaller, faster, and easier much and much better. Your android app has to be one that boosts the image of your company. It should have those features that your audience can use with ease. Android applications help in boosting the revenue and gaining maximum growth. In this era of technology."
          className=" "
          imagclasName="imagclasName"
          heroimg={exloretechnologi}
        />

        <SecondSection
          heading="Software Development Process"
          subtitle="In today's fast-paced digital landscape, custom software development is crucial for businesses to stay ahead of the competition. Our software development services help you design, develop, and deploy robust software solutions that meet your unique needs and goals."
          className=" "
          // classNameheader='goal-obj-header'
          heroimg={processdevelop}
          imagclasName="imagclasName"
        />
       
       
      </div>
      <SoftwareProduct />
      <InnovationSolution />
     <ExploreServices/>
      <Technologies />
      <ConsultNow />
    </div>
  );
}
